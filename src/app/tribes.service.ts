import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tribe } from './Tribe';

@Injectable({
  providedIn: 'root'
})
export class TribesService {

  constructor(private http: HttpClient) { }

  getTribe(id: string) {
  	return this.http.get('./assets/Tribes/' + id + "/" + id + '.json');
  }
}



