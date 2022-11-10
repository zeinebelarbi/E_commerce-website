import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  errorMessage: string;
  forgetpasswordform: FormControl;
  email:string;


  

  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  forgetpassword(email:string){
    this.authservice.forgetPassword(email).then(
      ()=>{
        this.router.navigate(['/'])
      },
      (error: string)=>{
        this.errorMessage=error
      }
      ) 
  }
}
