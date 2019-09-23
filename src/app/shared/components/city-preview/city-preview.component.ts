import { Component, OnInit, Input } from '@angular/core';
import { CityInfo } from '../../models/city-info.model';

@Component({
  selector: 'ctw-city-preview',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent implements OnInit {
  @Input() city: CityInfo;

  constructor() { }

  ngOnInit() {
  }

}
