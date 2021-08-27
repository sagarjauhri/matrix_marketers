import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.scss']
})
export class WelcomeHomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public onValidate(event: any): void {
    if(event.target.value == 'admin') {
      window.localStorage.setItem('token', 'admin');
      this._router.navigate(['/protected']);
    }
  }

}
