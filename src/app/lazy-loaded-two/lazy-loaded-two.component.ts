import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-lazy-loaded-two',
  templateUrl: './lazy-loaded-two.component.html',
  styleUrls: ['./lazy-loaded-two.component.css']
})
export class LazyLoadedTwoComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
