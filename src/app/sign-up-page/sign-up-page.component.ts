import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckToSlot, faDashboard, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up-page',
  imports: [FontAwesomeModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  faDownload = faDownload;
  faCheckToSlot = faCheckToSlot

  goToGoogleForm(){
    window.open('https://forms.gle/LV6bhGfRk5Hab2k3A');
  }

  downloadFile(){
    const link = document.createElement('a');
    link.href = 'assets/cv-template.docx'; // Path to your file
    link.download = 'cv-template.docx'; // Optional: specify a different name
    link.click();
  }
}
