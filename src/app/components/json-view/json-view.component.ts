import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-view',
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.scss']
})
export class JsonViewComponent implements OnInit {
  @Input('data') data: Object;
  constructor() { }

  ngOnInit() {
  }

}
