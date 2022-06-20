import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EagerLoadedOneComponent } from "./eager-loaded-one/eager-loaded-one.component";
import { EagerLoadedTwoComponent } from "./eager-loaded-two/eager-loaded-two.component";

const routes: Routes = [
  { path: "eager-loaded-one", component: EagerLoadedOneComponent },
  { path: "eager-loaded-two", component: EagerLoadedTwoComponent },
  {
    path: "lazy-loaded-one",
    loadChildren: () =>
      import("./lazy-loaded-one/lazy-loaded-one.module").then(
        (m) => m.LazyLoadedOneModule
      ),
  },
  {
    path: "lazy-loaded-two",
    loadChildren: () =>
      import("./lazy-loaded-two/lazy-loaded-two.module").then(
        (m) => m.LazyLoadedTwoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
