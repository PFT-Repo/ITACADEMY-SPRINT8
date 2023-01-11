import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation format
valPass = /\w/g;//Alfanumeric from 4 to 8 char
  user ={
    email:'',
    password:''
  }

  constructor(private auth:AuthService, private rou:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    if(this.validate()){
       this.auth.signIn(this.user).subscribe(
      res => {
        let y:string | any= Object.values(res);
        localStorage.setItem('token', y);
     this.rou.navigate(['/starships']);
      },err=>console.log(err)
    )
    }
    else{
      let m = document.getElementById("mail");
      m?.classList.add("is-invalid");
      let y = document.getElementById("pass");
      y?.classList.add("is-invalid");
      alert("May the FORCE help you with this form...\n Check your email and password padawan");
    }
  }
  validate():boolean{
    if(this.user.email != "" && this.user.password != ""){
      console.log("Email y pass no están vacios")
      if (this.valMail.test(this.user.email) ){
        console.log("pasó el test de mail");
        if (this.valPass.test(this.user.password)) {
           console.log("Pasaron los examenes de formateo en front");
        return true;
        }
      }
    }
    return false;
  }
}
