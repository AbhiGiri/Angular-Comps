import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticComponent } from './statistic/statistic.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [ViewHomeComponent, StatisticComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
