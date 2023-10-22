import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistingComponent } from './component/booklisting/booklisting.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'',component:BooklistingComponent},
  {path:'books-list',component:BooklistingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
