import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyLoadedOneComponent } from "./lazy-loaded-one.component";

const routes: Routes = [
  { path: "", component: LazyLoadedOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadedOneRoutingModule {}
