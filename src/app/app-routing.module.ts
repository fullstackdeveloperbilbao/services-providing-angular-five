import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EagerLoadedComponent } from "./eager-loaded/eager-loaded.component";

const routes: Routes = [
  { path: "eager-loaded", component: EagerLoadedComponent },
  {
    path: "lazy-loaded",
    loadChildren: () =>
      import("./lazy-loaded/lazy-loaded.module").then(
        (m) => m.LazyLoadedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
