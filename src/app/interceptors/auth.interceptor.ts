import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //requestin içine header(token) koymamızı sağlar
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token"); // localStroge'a tokeni ekliyoruz. 
    let newRequest :  HttpRequest<any> // bizim yaptığımız istek bu.
    newRequest = request.clone({ // mevcut requestimin klonunu buna atar. Ama bu fonksiyonun içine bişeyler eklersek...
      headers : request.headers.set("Authorization","Bearer " + token) //Authorization headeri yolla,sonrasında ne vereceğimizi belirtiyoruz.
    }) 
    return next.handle(newRequest);
  }
}
