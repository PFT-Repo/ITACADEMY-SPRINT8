import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation format
valPass = /\w/g;
user ={
  email:'',
  password:''
}
  constructor(private authService:AuthService, private rou:Router) { }

  ngOnInit(): void {
  }
signUp(){
  let validation:boolean = this.validate();
  if(validation){
     this.authService.signUp(this.user)
  .subscribe(res => { 
     let y:string | any= Object.values(res);
     localStorage.setItem('token', y);
     this.rou.navigate(['/starships']);
  }, err => console.log(err))
  }
  else{
    let m = document.getElementById("mailsu");
    m?.classList.add("is-invalid");
    let y = document.getElementById("passu");
    y?.classList.add("is-invalid");
    alert("May the FORCE help you with this form...");
  }
  }

  validate():boolean{
    if(this.user.email != "" && this.user.password != ""){
      console.log("Email y pass no están vacios")
      if (this.valMail.test(this.user.email) && (this.valPass.test(this.user.password))){
        console.log("Pasaron los examenes de formateo en front");
        
        return true;
      }
    }
    return false;
  }

  tokenToLS(o:Object|string){
  //  
  }
}
