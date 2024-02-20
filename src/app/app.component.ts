import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';

  constructor(private auth: AuthService) {
  }

  login () {
    this.auth.signInWithGoogle();
  }
}
