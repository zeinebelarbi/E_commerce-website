import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  isauth: boolean;
  constructor(private authservice:AuthService){
    var firebaseConfig = {
      apiKey: "AIzaSyBN3jPysQhJsk5CQUNl_ZNJLhTVU_UF5oY",
      authDomain: "angularapp-6ed32.firebaseapp.com",
      projectId: "angularapp-6ed32",
      storageBucket: "angularapp-6ed32.appspot.com",
      messagingSenderId: "245482108082",
      appId: "1:245482108082:web:32a3eb28141a197a9385ab",
      measurementId: "G-242PJ3C0T8"
    };
    firebase.initializeApp(firebaseConfig);
   
  }
  ngOnInit(): void{
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if (user){
          this.isauth=true  
        }
        else{
          this.isauth=false
        }
      }
    )
  } 
  signout(){
    this.authservice.signoutUser()
  
  }

}

