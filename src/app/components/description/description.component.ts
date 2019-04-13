import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  noEndpoint = false;
  noData = false;
  showEmptyText = false;

  @Input('desObj') desObj;
  constructor() { }

  ngOnInit() {
    this.noEndpoint = !this.desObj.endPoint;
    this.noData = !Object.keys(this.desObj.data).length;
    this.showEmptyText = this.noEndpoint && this.noData;
  }

}
