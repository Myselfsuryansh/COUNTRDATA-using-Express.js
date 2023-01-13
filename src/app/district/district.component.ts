import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.sass'],
})
export class DistrictComponent implements OnInit {

  title = 'District';
  districtname: any
  preview: string = ' ';
  data: any = {};
  fetchID: any;
  STATENAME: any;
  DISTRICTNAME: any;
  DISTRICT :any;
  COUNTRY: any;
  countryId: any;
  state: any;
  dropdownstate: any;
  stateId: any;
  getState: any;

  constructor(private route: Router, private service: InteractionService) {
    this.districtname = new FormGroup({
      COUNTRY: new FormControl(' ', [Validators.required, Validators.minLength(1)]),
      STATENAME: new FormControl(' ', [Validators.required, Validators.minLength(1)]),
      DISTRICTNAME: new FormControl(' ', [Validators.required, Validators.minLength(3)])

    })
  }
  Clickme() {
    console.log(this.districtname.value);
    alert(`Thank You`)
    this.data.COUNTRY = this.districtname.value.COUNTRY
    this.data.STATENAME = this.districtname.value.STATENAME
    this.data.DISTRICTNAME = this.districtname.value.DISTRICTNAME
    this.postDatafromApi();
    // this.postData();



  }



  ngOnInit(): void {
    this.getData();
    // this.postData();
    // this.postDatafromApi();
  }

  onSelect(country: any) {
    this.data.COUNTRY = this.districtname.value.COUNTRY
    this.countryId = this.data.COUNTRY
    // console.log("Country",this.c);
    // console.log(this.address);
    this.getStateNameAPI(this.data.COUNTRY)
    this.dropdownstate = []
  }
  getStateNameAPI(statename: string) {
    this.service.getStateName(statename).subscribe((res) => {
      this.state = res;
      for (let value of this.state) {
        for (let lo of value.STATE) {
          this.dropdownstate.push(lo.STATENAME)
        }
      }
      console.log(this.dropdownstate);
    })
  }


  getStateName() {
    this.getState.STATENAME = this.districtname.value.STATENAME
    console.log("State", this.getState);
    this.stateId = this.getState.STATENAME
  }

  getData() {
    this.service.getData().subscribe((response: any) => {
      console.log('response from API is ', response)
      this.fetchID = response;
    }, (error: any) => {
      console.log('error is', error);
    })
    this.service.getState().subscribe((response: any) => {
      console.log('response from API is', response)
      this.fetchID = response
    }, (error) => {
      console.log('error is', error)
    })
  }
  // postData() {
  //   this.service.postData(this.data).subscribe((response: any) => {
  //     console.log('Response from API Post is', response)
  //     this.preview = JSON.stringify(response);
  //   }, (error: any) => {
  //     console.log('Error is ', error)
  //   })
  // }
  // postDatafromApi() {
  //   this.service.postState(this.data).subscribe((response: any) => {
  //     console.log('Response from API Post is', response)
  //     this.preview = JSON.stringify(response);
  //   }, (error: any) => {
  //     console.log('Error is ', error)
  //   })



  postDatafromApi() {
    this.service.postDistrict(this.data).subscribe((response: any) => {
      console.log('Response from API Post is', response)
      this.preview = JSON.stringify(response);
    }, (error: any) => {
      console.log('Error is ', error)
    })

  }


}

