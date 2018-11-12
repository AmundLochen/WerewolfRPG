import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Tribe } from '../Tribe';
import { TribesService }  from '../tribes.service';
import { NgbTabset, NgbTabContent, NgbTabTitle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tribes-detail',
  templateUrl: './tribes-detail.component.html',
  styleUrls: ['./tribes-detail.component.css']
})
export class TribesDetailComponent implements OnInit {
	id: string;
	tribe: Tribe;

  constructor(private route: ActivatedRoute,
	private tribesService: TribesService,
  	private location: Location) { }

  ngOnInit() {
  	this.route.paramMap.subscribe((params: ParamMap) => {
	  	this.id = params.get('id');
	  			this.getTribe();
	  });
  }
  getTribe(): void {

	  this.tribesService.getTribe(this.id).subscribe((data: Tribe) => this.tribe = data);
	}

}
