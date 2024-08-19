import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeagueComponent } from './league/league.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeagueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = 0;

  clickAdd(){
    this.counter++;
  }

  clickSub(){
    this.counter--;
  }
}
