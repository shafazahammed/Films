import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  email:string;
  password:string;
  success:boolean =false;
  onregister : boolean = false;
  errormessage : string = '';


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.errormessage = ""
    if(this.name == '' || this.email == '' || this.password == ''){
      console.log('error')
      this.errormessage = " All fields are Required"
      return false;
    }
    this.onregister = true;
    let user = {
      'name' : this.name,
      'email' : this.email,
      'password' : this.password
    }
    this.authService.register(user).subscribe(data => {
      this.onregister = false;
      if(data.status){
        this.success = true;
        this.name = '';
        this.email = '';
        this.password = '';
      }
      else{
        this.errormessage = data.message;
      }
    })

  }

}
