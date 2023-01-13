import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { PlaceComponent } from './place/place.component';
import { StateComponent } from './state/state.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {path:'place', component:PlaceComponent},
  {path:'state', component:StateComponent},
  {path:'district', component:DistrictComponent},
  {path: 'viewdata', component:ViewdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
