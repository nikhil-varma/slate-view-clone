import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonViewComponent } from './components/json-view/json-view.component';
import { EndpointViewComponent } from './components/endpoint-view/endpoint-view.component';
import { DescriptionComponent } from './components/description/description.component';
import { DetailsComponent } from './components/section-details/details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ApiDocComponent } from './pages/api-doc/api-doc.component';
import { HeaderComponent } from './components/header/header.component';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    JsonViewComponent,
    EndpointViewComponent,
    DescriptionComponent,
    DetailsComponent,
    NavigationComponent,
    ApiDocComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
