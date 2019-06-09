import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public openSidenav(): void {
    (document.querySelector('#sidenav') as HTMLElement).style.width = '80%';
  }

  public closeSidenav(): void {
    (document.querySelector('#sidenav') as HTMLElement).style.width = '0';
  }
}
