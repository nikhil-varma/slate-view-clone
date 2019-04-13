import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endpoint-view',
  templateUrl: './endpoint-view.component.html',
  styleUrls: ['./endpoint-view.component.scss']
})
export class EndpointViewComponent implements OnInit {
  @Input('endPoint') endPoint: string;
  constructor() { }

  ngOnInit() {
  }

}
