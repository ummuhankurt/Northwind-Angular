import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/login/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/token/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44339/api/auth/";

  constructor(private httpClient : HttpClient) { }

  login(user : LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",user)
  }

  isAuthenticated(){ // token'i localstorage' da tutucaz.
    if(localStorage.getItem("token")){
      return true;
    }
    else{  
      return false;
    }
  }
}
