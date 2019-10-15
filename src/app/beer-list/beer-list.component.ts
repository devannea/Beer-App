import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IBeer } from '../ibeer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit/*, AfterViewInit*/ {
  beerList: IBeer[] = [];
  displayedColumns: string[] = ["name", "tagline", "first_brewed"];
  constructor(private BeerService: BeerService) { }

  ngOnInit() {
    this.BeerService.getAll().subscribe(data => (this.beerList = data));
  }
  //ngAfterViewInit() {}

}
