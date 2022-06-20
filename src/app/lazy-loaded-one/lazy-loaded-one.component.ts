import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-lazy-loaded-one',
  templateUrl: './lazy-loaded-one.component.html',
  styleUrls: ['./lazy-loaded-one.component.css']
})
export class LazyLoadedOneComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
