import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email : any = 'admin@gmail.com';
password : any = 'password';
login : FormGroup;
  constructor(private routes : Router) { }

  ngOnInit(): void {
    this.login = new FormGroup ({
      email : new FormControl(''),
      password : new FormControl('')
    })
  }
  onSubmit() {
    console.log(this.login.value);
    if (this.login.value.email === this.email && this.login.value.password === this.password) {
      this.routes.navigateByUrl('create-form');
    } else {
      alert('Username / password error');
    }
  }

}
