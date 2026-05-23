import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upper-bar',
  imports: [CommonModule],
  templateUrl: './upper-bar.html',
  styleUrl: './upper-bar.css',
})
export class UpperBar {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
