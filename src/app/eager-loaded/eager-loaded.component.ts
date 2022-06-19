import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-eager-loaded',
  templateUrl: './eager-loaded.component.html',
  styleUrls: ['./eager-loaded.component.css']
})
export class EagerLoadedComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
