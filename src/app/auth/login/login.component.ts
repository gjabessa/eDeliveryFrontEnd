import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  loginForm = new FormGroup({
    identifier: new FormControl(""),
    password: new FormControl("")
  })
  ngOnInit(): void {
  }
  message!:String;
  submit(){
    const {identifier,password} = this.loginForm.value;
    this.authService.login(identifier, password).then(res =>
      this.router.navigateByUrl('/')
    ).catch(res => this.message=res);
  }

}
