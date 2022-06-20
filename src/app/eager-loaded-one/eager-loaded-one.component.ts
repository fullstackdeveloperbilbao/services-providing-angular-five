import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-eager-loaded-one',
  templateUrl: './eager-loaded-one.component.html',
  styleUrls: ['./eager-loaded-one.component.css']
})
export class EagerLoadedOneComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
