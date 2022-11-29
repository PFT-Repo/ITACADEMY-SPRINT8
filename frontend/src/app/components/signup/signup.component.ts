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
user ={
  email:'',
  password:''
}
  constructor(private authService:AuthService, private rou:Router) { }

  ngOnInit(): void {
  }
signUp(){
  this.authService.signUp(this.user)
  .subscribe(res => { 
     let y:string | any= Object.values(res);
     localStorage.setItem('token', y);
     this.rou.navigate(['/starships']);
  }, err => console.log(err))
  }

  tokenToLS(o:Object|string){
  //  
  }
}
