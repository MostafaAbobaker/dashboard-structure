import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
