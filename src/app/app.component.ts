import { Component, OnInit, ViewChild } from '@angular/core';
import { FluentHorizontalScrollComponent } from '@fluentui-angular-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fluentui-angular';
  @ViewChild('secondaryScroll') secondaryScroll!: FluentHorizontalScrollComponent;

  classifications = [
    {
      label: 'TÉCNICA',
      color: '#e60a0a',
    },
    {
      label: 'ATAQUE ORGANIZADO',
      color: '#0fd730',
    },
    {
      label: 'TRANSICIÓN OFENSIVA',
      color: '#b9b41d',
    },
    {
      label: 'DEFENSA ORGANIZADA',
      color: '#290feb',
    },
    {
      label: 'TRANSICIÓN DEFENSIVA',
      color: '#f29107',
    },
    {
      label: 'VELOCIDAD',
      color: '#000',
    },

    {
      label: 'TÉCNICA',
      color: '#e60a0a',
    },
    {
      label: 'ATAQUE ORGANIZADO',
      color: '#0fd730',
    },
    {
      label: 'TRANSICIÓN OFENSIVA',
      color: '#b9b41d',
    },
    {
      label: 'DEFENSA ORGANIZADA',
      color: '#290feb',
    },
    {
      label: 'TRANSICIÓN DEFENSIVA',
      color: '#f29107',
    },
    {
      label: 'VELOCIDAD',
      color: '#000',
    },

    {
      label: 'TÉCNICA',
      color: '#e60a0a',
    },
    {
      label: 'ATAQUE ORGANIZADO',
      color: '#0fd730',
    },
    {
      label: 'TRANSICIÓN OFENSIVA',
      color: '#b9b41d',
    },
    {
      label: 'DEFENSA ORGANIZADA',
      color: '#290feb',
    },
    {
      label: 'TRANSICIÓN DEFENSIVA',
      color: '#f29107',
    },
    {
      label: 'VELOCIDAD',
      color: '#000',
    },
  ];

  ngOnInit(): void { }

  toNext(): void {
    console.log('to next');
    this.secondaryScroll.onScrollHorizontal();
  }

  toPrevious(): void {
    console.log('to previous');
    this.secondaryScroll.onScrollHorizontal(false);
  }
}
