import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;
  constructor(private router:Router){}
  CheckLogin(){
    if(this.password=="12345"){
      this.user={
        username:this.username,
        password:this.password
      }
      localStorage.setItem("user",JSON.stringify(this.user))
      this.router.navigateByUrl("/user/home");
    }
    else if(this.password=="98765"){
      this.user={
        username:this.username,
        password:this.password
      }
      localStorage.setItem("user",JSON.stringify(this.user))
      this.router.navigateByUrl("/admin/home");
    }    
    else{
      alert("Invalid credentials");
    }
  }

}
