import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 

  constructor( private http: HttpClient) { }
  getData() {
    return this.http.get('http://localhost:3000/fetch')
  }

  postData(data:string){
    return this.http.post('http://localhost:3000/postData',data)
  }
  postCountry(data:any){
    return this.http.post('http://localhost:3000/COUNTRY/'+data.COUNTRY, data)
  }
  postState(data:any){
    return this.http.post('http://localhost:3000/COUNTRY/' +data.COUNTRY, data)
  }
  getState(){
    return this.http.get('http://localhost:3000/fetch/STATE')
  }

  getStateName(COUNTRY: String){
    return this.http.get('http://localhost:3000/COUNTRY/'+COUNTRY)
  }

  postDistrict(data:any){
    return this.http.post('http://localhost:3000/COUNTRY/'+data.COUNTRY+'/'+data.STATENAME,data)
  }
  // postState(COUNTRY: string, STATE: any){
  //   return this.http.pos

  // }
}

