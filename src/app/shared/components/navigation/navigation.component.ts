import { Component, OnInit, Input } from '@angular/core';
import { NavigationRoute } from '../../models/navigation-route.model';

@Component({
  selector: 'ctw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() title: string;
  @Input() route: NavigationRoute;

  constructor() { }

  ngOnInit() {
  }

}
