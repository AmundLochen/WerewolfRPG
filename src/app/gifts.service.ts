import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiftObject } from './GiftObject';
import { Gift } from './Gift';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
	gifts: string[];

  constructor(private http: HttpClient) { }

  getGifts(): Observable<Gift[]>{
  	return this.http.get<Gift[]>('./assets/Gifts/Gifts.json');
	}
}
