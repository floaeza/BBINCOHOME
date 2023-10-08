import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {
  private audio = new Audio();
  private volume = 0.1;

  playSound( soundFile: string ){
    this.audio.src = `assets/sounds/${soundFile}`;
    this.audio.volume = this.volume;
    return new Promise<void>((resolve, reject) => {
      this.audio.load();
      this.audio.oncanplaythrough = () => {
        this.audio.play();
        resolve();
      };
      this.audio.onerror = (error) => {
        reject(error);
      };
    });
  }
  stopSound() {
    if (!this.audio.paused) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
