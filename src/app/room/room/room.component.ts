import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  roomId: string | null = null;
  username: string | null = null;

  constructor() {
    // Simulate fetching room ID and name from a service or route
    this.roomId = '12345';
    this.username = 'Sample Room';
  }
}
