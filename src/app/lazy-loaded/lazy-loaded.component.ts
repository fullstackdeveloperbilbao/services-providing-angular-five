import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
