import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  tablevalue : any = []
  constructor( private routes : Router) { }

  ngOnInit(): void {
    console.log('from url', history.state);
    this.tablevalue = history.state;
  }
  Edit(val){
    
    this.routes.navigateByUrl('update' , {state : val});

  }

}
