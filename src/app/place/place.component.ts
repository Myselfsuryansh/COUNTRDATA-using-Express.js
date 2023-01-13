import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.sass']
})
export class PlaceComponent implements OnInit {

  title =  'country';
  countryname :any
  preview: string = '';
  data:any={}; 

  constructor(private router: Router, private service: InteractionService ) { 

    this.countryname = new FormGroup({
      COUNTRY: new FormControl('',[Validators.required, Validators.minLength(3),]),
    })
  }
    

  Clickme(){
    console.log(this.countryname.value)
    alert(`Country is ${this.countryname.value.COUNTRY}`);
    this.data.COUNTRY  = this.countryname.value.COUNTRY
    this.postData()
  }

  ngOnInit(): void {
    this.postData();

  }
  postData() {
    this.service.postData(this.data).subscribe((response: any) => {
      console.log('Response from API Post is', response)
      this.preview = JSON.stringify(response);
    }, (error: any) => {
      console.log('Error is ', error)
    })
  }

}
