import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(public router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
