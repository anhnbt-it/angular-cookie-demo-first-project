import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieValue!: string;
  title = 'angular-cookie-demo-first-project';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('anhnbt');
    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getTime() + (1000 * 60 * 60)); //1 hour
    if (!cookieExists) {
      this.cookieService.set('anhnbt', 'First AnhNBT.CLUB', expiredDate, '/', environment.DOMAIN_URL);
    }
    this.cookieValue = this.cookieService.get('anhnbt');
    console.log(this.cookieValue);
  }

  clearCookie(): void {
    alert('clear cookie successfully.');
    this.cookieService.delete('anhnbt');
  }
}
