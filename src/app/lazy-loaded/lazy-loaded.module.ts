import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
  ],
  declarations: [LazyLoadedComponent]
})
export class LazyLoadedModule { }
