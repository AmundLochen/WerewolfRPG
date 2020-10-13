import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../characters.service';
import { CharacterObject } from '../CharacterObject';
import { Character } from '../Character';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	selectedCharacter: CharacterObject;
	characterList: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  	this.getCharacters();
  }
  onSelect(character: CharacterObject): void {
	this.selectedCharacter = character;
	}
	getCharacters(): void{
		this.characterService.getCharacters().subscribe(characterList => this.characterList = characterList.sort((a, b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)}));
	}
}