import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems: Object;
  currentSection:String = '';
  constructor() { }

  ngOnInit() {
    this.navigationItems = [{
      header: 'Sample header',
      items: [
        {
          label: 'Pagination',
          route: '#',
          section: 'Pagination'
        },
        {
          label: 'Scope',
          route: '#',
          section: 'Scope'
        },
        {
          label: 'CORS',
          route: '#',
          section: 'CORS'
        },
        {
          label: 'Versioning',
          route: '#',
          section: 'Versioning'
        },
        {
          label: 'Rate limiting',
          route: '#',
          section: 'Rate limiting'
        },
        {
          label: 'Expanding resources',
          route: '#',
          section: 'Expanding resources'
        },
      ]
    }]

    this.storeActiveSection('Pagination');

  }

  storeActiveSection(section) {
    this.currentSection = section;
  }
}
