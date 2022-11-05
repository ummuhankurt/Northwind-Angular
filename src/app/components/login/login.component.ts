import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, Form } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private authService : AuthService,
    private toastrService : ToastrService, private router : Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){

    this.loginForm = this.formBuilder.group({
      email : ["",Validators.required],
      password : ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {//token oluştur.
        this.toastrService.success(response.message) 
        this.router.navigate(["products/add"])
        localStorage.setItem("token",response.data.token) //tokeni client'a tanımla.backendde product add işlemi için bu token gerekli. bu token yoksa yetkiniz yok.
      },
      response =>{
        this.toastrService.error(response.error)
      }
      )
    }
  }
}
