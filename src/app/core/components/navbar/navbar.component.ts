import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navbarLinks: Array<{ [key: string]: string }> = [
    { title: 'Lista de heroes', link: '/heroes/list' },
    { title: 'Nuevo heroe', link: '/heroes/new-hero' },
  ];

  public isMobile: boolean = window.innerWidth < 600;
  public constructor() {
    this.checkSizeScreen();
  }
  private checkSizeScreen(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 600;
    });
  }
}
