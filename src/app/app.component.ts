import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { ShowinfoComponent } from './showinfo/showinfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddinfoComponent,RouterLink, ShowinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exam';
}
