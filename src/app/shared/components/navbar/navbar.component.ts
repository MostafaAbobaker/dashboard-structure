import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isCollapsed = false; // Toggles sidebar state
  constructor(private sidebarService: SidebarService) {}

  closeSidebar(): void {
    this.sidebarService.toggleSidebar(); // Toggle the sidebar
    this.isCollapsed = !this.isCollapsed; // Toggle the sidebar state
  }
  ngOnInit(): void {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }
}
