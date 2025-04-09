import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeSubMenu: string | null = null; // Tracks the active submenu
  isCollapsed: boolean = false; // Tracks the sidebar state
  toggleSubMenu(subMenu: string): void {
    this.activeSubMenu = this.activeSubMenu === subMenu ? null : subMenu; // Toggles submenu
    this.isCollapsed = false; // Toggles sidebar state
  }
  closeSidebar(): void {
    this.isCollapsed = !this.isCollapsed; // Closes the sidebar
    this.activeSubMenu = null; // Resets active submenu
  }



  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.isCollapsed$.subscribe((state) => {
      this.isCollapsed = state;
    });
  }


  /* toggleSubmenu(button) {
    button.nextElementSibling.classList.toggle('show');
    const icon = button.querySelector('.icon-toggle').classList.toggle('rotate');
  } */
}
