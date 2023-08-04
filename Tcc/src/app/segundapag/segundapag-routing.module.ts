import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundapagPage } from './segundapag.page';

const routes: Routes = [
  {
    path: '',
    component: SegundapagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundapagPageRoutingModule {}
