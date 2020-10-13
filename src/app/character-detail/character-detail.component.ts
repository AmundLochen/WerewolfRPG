import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { CharacterService } from '../characters.service';
import { CharacterObject } from '../CharacterObject';
import { Character } from '../Character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	@Input() characterObject: CharacterObject
     character: Character;


  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  	this.getCharacter();
  }
   ngOnChanges(changes: SimpleChanges) {
    this.getCharacter();
}

  getCharacter(){
  	this.characterService.getCharacters()
        .subscribe(data => {
           for(let item of data){
             if(this.characterObject.id === item.id)
               this.character = item;
           }
         });
        }
}
