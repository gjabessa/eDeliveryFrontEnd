import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(identifier: string, password: string){
    return this.http.post('http://209.97.181.176:1337/auth/local',{identifier,password}).toPromise().then(this.setSession).catch(this.fail);
    }

    private setSession(authResult:any){
      localStorage.setItem("jwt",authResult.jwt);
    }

    private fail(){
      throw new Error('Invalid email or password')
    }

    logout(){
      localStorage.removeItem("jwt");
    }

    public isLoggedIn(){
      return localStorage.getItem("jwt")? true : false;
    }

    public isLoggedOut(){
      return !this.isLoggedIn();
    }
}

