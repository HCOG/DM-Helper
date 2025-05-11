import { AudioService } from './../../services/audio-service/audio.service';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth-service/auth.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showHeader = true;

  showSFXSlider = false;
  showBGMSlider = false;

  SFXValue = 70;
  BGMValue = 50;

  constructor(public auth: AuthService,
              private router: Router,
              private audio: AudioService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showHeader = !event.urlAfterRedirects.includes('/login');
      });
  }

  logout() {
    this.auth.logout();
    this.audio.playSFX('button');
    this.router.navigate(['/login']);
  }

  setSFXVolume(value: number) {
    this.audio.setSFXVolume(value / 100);
  }

  setBGMVolume(value: number) {
    this.audio.setBGMVolume(value / 100);
  }
}
