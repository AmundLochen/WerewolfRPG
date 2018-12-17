import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../gifts.service';
import { GiftObject } from '../GiftObject';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
	selectedGift: GiftObject;
	giftList: GiftObject[];

  constructor(private giftsService: GiftsService) { }

  ngOnInit() {
  	this.getGifts();
  }
  onSelect(gift: GiftObject): void {
	this.selectedGift = gift;
	}
	getGifts(): void{
		this.giftsService.getGifts().subscribe(giftList => this.giftList = giftList.sort((a, b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)}));
	}
}
