import {
  ModuleWithProviders,
  NgModule,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedService } from "./shared.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService],
    };
  }
}
