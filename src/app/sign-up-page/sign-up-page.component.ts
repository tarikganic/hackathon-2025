import { Component, NgZone, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckToSlot, faDashboard, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up-page',
  imports: [FontAwesomeModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit{
  constructor(private ngZone: NgZone) {}
  countdown: string = ''; 

  ngOnInit(){
    this.calculateCountdown();
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.ngZone.run(()=>{
          this.calculateCountdown();
        });
      }, 1000);
    });
  }

  calculateCountdown() {
    const targetDate = new Date('2025-01-24T10:00:00');
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }


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
