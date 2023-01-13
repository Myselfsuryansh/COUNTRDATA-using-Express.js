import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.sass']
})
export class ViewdataComponent implements OnInit {

  title ='viewdata';
  fetchID :any;

  constructor(private router:Router, private service: InteractionService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getData().subscribe((response: any) => {
      console.log('response from API is ', response)
      this.fetchID = response;
    }, (error: any) => {
      console.log('error is', error);
    })
  }

}

