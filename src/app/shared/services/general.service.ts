import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
type Theme = 'light' | 'dark';
type Direction = 'ltr' | 'rtl';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private currentTheme: Theme = 'light';
  private currentDirection: Direction = 'ltr';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadPreferences();
  }

  private loadPreferences(): void {
    if (!this.isBrowser) {
      return; // Skip on server side
    }

    // Load theme preference
    const savedTheme = localStorage.getItem('appTheme');
    this.currentTheme = (savedTheme === 'dark') ? 'dark' : 'light';

    // Load direction preference
    const savedDirection = localStorage.getItem('appDirection');
    this.currentDirection = (savedDirection === 'rtl') ? 'rtl' : 'ltr';

    this.applyPreferences();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyPreferences();
    if (this.isBrowser) {
      localStorage.setItem('appTheme', this.currentTheme);
    }
  }

  toggleDirection(): void {
    this.currentDirection = this.currentDirection === 'ltr' ? 'rtl' : 'ltr';
    this.applyPreferences();
    if (this.isBrowser) {
      localStorage.setItem('appDirection', this.currentDirection);
    }
  }

  private applyPreferences(): void {
    if (!this.isBrowser) return;

    // Apply theme
    document.documentElement.setAttribute('data-bs-theme', this.currentTheme);

    // Apply direction
    document.documentElement.dir = this.currentDirection;
    document.documentElement.lang = this.currentDirection === 'rtl' ? 'ar' : 'en';
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  getCurrentDirection(): Direction {
    return this.currentDirection;
  }
}
