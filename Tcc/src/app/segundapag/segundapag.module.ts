import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundapagPageRoutingModule } from './segundapag-routing.module';

import { SegundapagPage } from './segundapag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundapagPageRoutingModule
  ],
  declarations: [SegundapagPage]
})
export class SegundapagPageModule {}
