import { Component } from '@angular/core';
import { RouterService } from './services/router/router.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(public routerService: RouterService) {}

  ngOnInit(): void {

  }
}
