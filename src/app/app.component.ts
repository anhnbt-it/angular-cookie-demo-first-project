import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieValue!: string;
  title = 'my-first-cookie-project';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('anhnbt');
    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getTime() + (1000 * 60 * 60)); //1 hour
    if (!cookieExists) {
      this.cookieService.set('anhnbt', 'First AnhNBT.CLUB', expiredDate, '/', '.anhnbt.club');
    }
    this.cookieValue = this.cookieService.get('anhnbt');
    console.log(this.cookieValue);
  }

  clearCookie(): void {
    this.cookieService.delete('anhnbt');
  }
}
