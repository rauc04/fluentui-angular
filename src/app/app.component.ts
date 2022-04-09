import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fluentui-angular';

  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 3' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
    { title: 'Slide 3' }
  ];

  ngOnInit(): void {
  }
}
