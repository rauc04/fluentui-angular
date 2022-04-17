import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FluentHorizontalScrollComponent } from '@fluentui-angular-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fluentui-angular';
  @ViewChild('secondaryScroll') secondaryScroll!: FluentHorizontalScrollComponent;

  classifications: any[] | undefined;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.classifications = [
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
      }
    ];
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, { width: '95vw', maxWidth: '100%' });
  }

  toNext(): void {
    console.log('to next');
    this.secondaryScroll.onScrollHorizontal();
  }

  toPrevious(): void {
    console.log('to previous');
    this.secondaryScroll.onScrollHorizontal(false);
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./app.component.scss'],
})
export class DialogComponent implements OnInit {
  classifications: any[] | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.classifications = [
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
      ];
    }, 1000);

    setTimeout(() => {
      this.classifications?.push({
        label: 'TRANSICIÓN DEFENSIVA',
        color: '#f29107',
      });
    }, 3000);
  }
}
