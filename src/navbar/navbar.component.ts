import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 @ViewChild('navbar') navbar!: ElementRef;
  constructor() {}
  menuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation(); // evita che il click chiuda subito il menu
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {

  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.menuOpen && !this.navbar.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
  openMaps(){
    const url = `https://www.google.com/maps/search/?api=1&query=via torino 26, Biella`;
    window.open(url, '_blank');
  }

}
