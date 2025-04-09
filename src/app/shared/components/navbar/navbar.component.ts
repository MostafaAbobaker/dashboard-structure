import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isCollapsed = false; // Toggles sidebar state
  constructor(private sidebarService: SidebarService , private generalService:GeneralService) {}

  closeSidebar(): void {
    this.isCollapsed = !this.isCollapsed; // Toggle the sidebar state
    this.sidebarService.toggleSidebar(); // Toggle the sidebar
  }
  ngOnInit(): void {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }


  get isRTL(): boolean {
    return this.generalService.getCurrentDirection() === 'rtl';
  }
  get themeIcon(): string {
    return this.generalService.getCurrentTheme() === 'dark' ? 'dark' : 'light';
  }

  toggleTheme(): void {
    this.generalService.toggleTheme();
  }

  toggleDirection(): void {
    this.generalService.toggleDirection();
  }
}
