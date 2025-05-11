import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private bgm: HTMLAudioElement;
  private sfxMap: Map<string, HTMLAudioElement> = new Map();

  // State (can expose as BehaviorSubject if needed)
  private bgmVolume = 0.5;
  private sfxVolume = 0.7;

  constructor() {
    this.bgm = new Audio('/assets/audio/bgm_0.mp3');
    this.bgm.loop = true;
    this.bgm.volume = this.bgmVolume;
  }

  playBGM() {
    this.bgm.play();
  }

  stopBGM() {
    this.bgm.pause();
    this.bgm.currentTime = 0;
  }

  setBGMVolume(volume: number) {
    this.bgmVolume = volume;
    this.bgm.volume = volume;
  }

  setSFXVolume(volume: number) {
    this.sfxVolume = volume;
    for (const audio of this.sfxMap.values()) {
      audio.volume = volume;
    }
  }

  playSFX(name: string) {
    const url = `/assets/SFX/${name}.mp3`;
    let audio = this.sfxMap.get(name);
    if (!audio) {
      audio = new Audio(url);
      audio.volume = this.sfxVolume;
      this.sfxMap.set(name, audio);
    }
    audio.currentTime = 0;
    audio.play();
  }
}

