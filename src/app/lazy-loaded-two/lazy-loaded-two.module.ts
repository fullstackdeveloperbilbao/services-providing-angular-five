import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedTwoRoutingModule } from './lazy-loaded-two-routing.module';
import { LazyLoadedTwoComponent } from './lazy-loaded-two.component';
import { SharedService } from '../shared/shared.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forChild(),
    LazyLoadedTwoRoutingModule,
  ],
  declarations: [LazyLoadedTwoComponent],
  providers: []
})
export class LazyLoadedTwoModule { }
