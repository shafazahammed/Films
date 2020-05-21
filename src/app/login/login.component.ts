import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password: string;
  success : boolean = false;
  errormessage : string;
  onlogin : boolean = false;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == null || this.password == null ){
      this.errormessage = " Enter email and password";
      return console.error('enter email/password');
    }
    if(!this.validateEmail(this.email)){
      this.errormessage = " Email is not Valid";
      return console.log(this.validateEmail(this.email));
    }
    this.onlogin = true;

    this.authService.login(this.email,this.password).subscribe( (data:any) =>{
      this.onlogin = false;
      console.log('data',data);
      if(data.status){
        this.success = true;
        this.router.navigate(['/films']);
      }
      else{
        this.errormessage = data.message;
      }
    })

  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



}


