import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isCollapsed = new BehaviorSubject<boolean>(false); // Initial state: not collapsed

  isCollapsed$ = this.isCollapsed.asObservable();

  toggleSidebar(): void {
    this.isCollapsed.next(!this.isCollapsed.value); // Toggle the state
  }

  closeSidebar(): void {
    this.isCollapsed.next(true); // Collapse the sidebar
  }

  openSidebar(): void {
    this.isCollapsed.next(false); // Expand the sidebar
  }


}
