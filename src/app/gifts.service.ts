import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiftObject } from './GiftObject';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  constructor(private http: HttpClient) { }

  getGift(id: number){
  	return this.http.get('./assets/Gifts/' + (id) + '.json');
	}
	getGifts(): Observable<GiftObject[]>{

  	return this.http.get<GiftObject[]>('./assets/Gifts/GiftList.json');
	}
}
