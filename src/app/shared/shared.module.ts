import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedService } from "./shared.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        "SharedModule is already loaded. Import it in the AppModule only"
      );
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService],
    };
  }
}
