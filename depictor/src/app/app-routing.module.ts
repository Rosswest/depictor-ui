import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepictComponent } from './depict/depict.component';

const routes: Routes = [
  { path: '', component: DepictComponent },
  { path: '**', component: DepictComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
