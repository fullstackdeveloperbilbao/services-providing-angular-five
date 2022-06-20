import { Injectable, OnDestroy } from "@angular/core";
console.log("%cSharedService" + "%c bundled", "color:red", "color:green");
@Injectable()
export class SharedService implements OnDestroy{
  constructor() {
    console.log("%cSharedService" + "%c instantiated", "color:red", "color:green");
  }

  ngOnDestroy(): void {
    console.log("%cSharedService" + "%c destroyed", "color:red", "color:green");
  }
}
