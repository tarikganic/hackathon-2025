import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { AboutPageExtendedComponent } from "./about-page-extended/about-page-extended.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";



@Component({
  selector: 'app-root',
  imports: [NavBarComponent, LandingPageComponent, AboutPageComponent, AboutPageExtendedComponent, SignUpPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hack-app';
  
}
