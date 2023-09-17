import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { DetailComponent } from './detail';
import { PopUpComponent } from './pop-up/pop-up.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'Add', component: HomeComponent },
      { path: 'Details', component: DetailComponent },
      { path: '**', redirectTo: '' },
      { path : 'pop-up', component:PopUpComponent}
    ])
  ],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
