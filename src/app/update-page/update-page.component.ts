import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  updatevalue: any;

  update : FormGroup;
  value: any;
  constructor(private routes : Router) {

   }

  ngOnInit(): void {
    
    console.log('from url', history.state);
    this.updatevalue = history.state;
    this.update.patchValue({
      fname : this.updatevalue.fname,
      lname :this.updatevalue.lname,
      email :this.updatevalue.email,
      password : this.updatevalue.password
    })
    
  }
  onSubmit() {
    if(this.update.value) {
      this.value = this.update.value;
      alert('Updated Successful');
      this.routes.navigateByUrl('listing' , {state : this.value});
      } else {
        alert('error');
      }
  }

}
