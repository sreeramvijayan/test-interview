import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css']
})
export class AddingFormComponent implements OnInit {

  Reg : FormGroup;
  value: any;
  constructor(private routes : Router) { }

  ngOnInit(): void {
    this.Reg = new FormGroup ({
      fname : new FormControl(''),
      lname : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.Reg.value);
    if(this.Reg.value) {
    this.value = this.Reg.value;
    alert('Registration Successful');
    this.routes.navigateByUrl('listing' , {state : this.value});
    } else {
      alert('error');
    }
  }

}
