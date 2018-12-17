import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { Gift } from '../Gift';
import { GiftObject } from '../GiftObject';
import { GiftsService } from '../gifts.service';


@Component({
  selector: 'app-gifts-detail',
  templateUrl: './gifts-detail.component.html',
  styleUrls: ['./gifts-detail.component.css']
})
export class GiftsDetailComponent implements OnInit {
	@Input() giftObject: GiftObject
     gift: Gift;


  constructor(private giftService: GiftsService) { }

  ngOnInit() {
  	this.getGift();
  }

  getGift(){
  	this.giftService.getGift(this.giftObject.id).subscribe((data: Gift) => this.gift = data);
  }
}
