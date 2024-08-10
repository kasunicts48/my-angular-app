import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'This loaded dynamically';
  imgURL: string =
    'https://images.unsplash.com/photo-1715062716491-98bf1d9e59dc';
  isDisable: boolean = false;
  isActive: boolean = false;
}
