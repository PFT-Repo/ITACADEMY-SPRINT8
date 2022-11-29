import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user ={
    email:'',
    password:''
  }

  constructor(private auth:AuthService, private rou:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.auth.signIn(this.user).subscribe(
      res => {
        let y:string | any= Object.values(res);
        localStorage.setItem('token', y);
     this.rou.navigate(['/starships']);
      },err=>console.log(err)
    )
  }
}
