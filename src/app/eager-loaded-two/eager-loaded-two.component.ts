import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-eager-loaded-two',
  templateUrl: './eager-loaded-two.component.html',
  styleUrls: ['./eager-loaded-two.component.css']
})
export class EagerLoadedTwoComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
