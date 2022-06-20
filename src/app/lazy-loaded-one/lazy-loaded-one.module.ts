import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedOneComponent } from './lazy-loaded-one.component';
import { LazyLoadedOneRoutingModule } from './lazy-loaded-one-routing.module';
import { SharedService } from '../shared/shared.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadedOneRoutingModule,
  ],
  declarations: [LazyLoadedOneComponent],
  providers: [SharedService]
})
export class LazyLoadedOneModule { }
