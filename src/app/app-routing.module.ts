import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiDocComponent } from './pages/api-doc/api-doc.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
