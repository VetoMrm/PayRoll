import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalid:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  valid(userName:string,password:string, FormData):any{
    if((userName=='Admin' || userName=='User' ) && password=='12345678'){
      localStorage.setItem("userName",userName);
      return this.router.navigate(['/default']);
   }else{
    this.invalid=true;
      FormData.clear();
      return false;
    }
    }
}
