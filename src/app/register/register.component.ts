import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerform!: FormGroup;
  errorMessage!: string;


  constructor(private fb:FormBuilder,private authservice:AuthService, private router:Router) { }


  ngOnInit(): void {
    this.initform()
  }
  initform() {
    this.registerform=this.fb.group({
      FirstName:new FormControl ('',[
        Validators.pattern("[a-z A-Z]+"),
        Validators.required
      ]),

LastName:new FormControl ('',[
  Validators.pattern("[a-z A-Z]+"),
  Validators.required
]),
email: new FormControl ('',[
  Validators.required,
  Validators.email
]),
password: new FormControl ('',[
  Validators.required,
  Validators.minLength(6)
]),
passwordrep: new FormControl('',[
  Validators.required,
  Validators.minLength(6)
])
  
    })
  }
  get FirstName(){
    return this.registerform.get('FirstName')  
} 
get LastName(){
  return this.registerform.get('LastName')
}
get emailadress(){
  return this.registerform.get('email')
} 

get password(){
  return this.registerform.get('password')
}
get passwordrep (){
  return this.registerform.get('passwordrep')
}
register(){
  const email=this.registerform.get('email').value
  const password=this.registerform.get('password').value
this.authservice.createNewuser(email,password).then(
  ()=>{
    this.router.navigate(['/'])
  },
  (error: string)=>{
    this.errorMessage=error
  }
  )
}
}

function email(email: any, password: any) {
  throw new Error('Function not implemented.');
}
