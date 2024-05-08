import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navbarLinks: Array<{ [key: string]: string }> = [
    { title: 'Lista de heroes', link: '/heroes/list' },
    { title: 'Nuevo heroe', link: '/heroes/new' },
  ];
}
