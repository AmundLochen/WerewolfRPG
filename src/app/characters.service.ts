import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterObject } from './CharacterObject';
import { Character } from './Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
	characters: string[];

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]>{
  	return this.http.get<Character[]>('./assets/Characters/Characters.json');
	}
}