import { Component } from '@angular/core';
import { faClock, faDollarSign, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about-page-extended',
  imports: [FontAwesomeModule],
  templateUrl: './about-page-extended.component.html',
  styleUrl: './about-page-extended.component.css'
})
export class AboutPageExtendedComponent {
  faMapLocationDot = faMapLocationDot;
  faDollarSign = faDollarSign;
  faClock = faClock;
}
