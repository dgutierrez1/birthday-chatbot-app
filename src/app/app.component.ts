import { Component } from '@angular/core';
import { RouterService } from './services/router/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public routerService: RouterService){}
}
