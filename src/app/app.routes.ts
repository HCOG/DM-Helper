import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomCreateComponent } from './rooms/room-create/room-create.component';
import { RoomJoinComponent } from './rooms/room-join/room-join.component';
import { RoomComponent } from './room/room/room.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'rooms/create', component: RoomCreateComponent },
  { path: 'rooms/join/:id', component: RoomJoinComponent },
  { path: 'room/:id', component: RoomComponent }
];
