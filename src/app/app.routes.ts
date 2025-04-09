import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LayoutComponent,
    children : [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path:'home',component:HomeComponent}
    ]

  },
];
