import { Component } from '@angular/core';

@Component({
  selector: 'app-room-join',
  imports: [],
  templateUrl: './room-join.component.html',
  styleUrl: './room-join.component.scss'
})
export class RoomJoinComponent {
  roomName: string | null = null;

  constructor() {
    // Simulate fetching room name from a service or route
    this.roomName = 'Sample Room';
  }
}
