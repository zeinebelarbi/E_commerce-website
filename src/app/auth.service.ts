import { Injectable } from '@angular/core';
import firesbase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createNewuser(email:string,password:string){
    return new Promise(
     (resolve,reject)=> 
     firesbase.auth().createUserWithEmailAndPassword(email,password).then(
      ()=>{
        resolve(true)
      },
      (error)=>{
        reject(error)

      }
     )
    )
  }
  signInUser(email:string,password:string){
    return new Promise(
      (resolve,reject) =>{
        firesbase.auth().signInWithEmailAndPassword(email,password).then(
      
          ()=>{
            resolve(true)
            console.log("Bienvenue")
          },
          (error)=>{
            reject(error)
          }
        )
      }
    )
  }
  signoutUser(){
    firesbase.auth().signOut()
  }
  forgetPassword(email:string){
    return new Promise (
      (resolve,reject) =>{
        firesbase.auth().sendPasswordResetEmail(email).then(
          ()=>{
            resolve(true)
            console.log("we have sent you a password Reset Link")
          },
          (error)=>{
            reject(error)
          }
        )
        }
    )
  }
}
