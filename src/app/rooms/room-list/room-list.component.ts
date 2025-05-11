import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AudioService } from '../../services/audio-service/audio.service';


interface Room {
  id: string;
  name: string;
  owner: string;
  participantCount: number;
}

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule,MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {
  displayedColumns = ['name', 'owner', 'participants', 'actions'];

  rooms: Room[] = [
    { id: 'r1', name: 'The Dragon’s Den', owner: 'dm-alex', participantCount: 5 },
    { id: 'r2', name: 'Cave of Shadows', owner: 'dm-luna', participantCount: 3 },
    { id: 'r3', name: 'Wizard Wars', owner: 'dm-orin', participantCount: 4 },
  ];

  constructor(private router: RouterModule, private audio: AudioService) {
  }

  ngOnInit() {
    this.audio.playBGM();
  }

  ngOnDestroy(): void {
    this.audio.stopBGM();
  }

  onJoin(roomId: string) {
    this.audio.playSFX('dice');
    console.log('Joining room', roomId);
  }
  onCreateRoom() {
    this.audio.playSFX('button');
    console.log('Creating new room');
  }
}
