import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  persons: Person[] = [];

  clicked = false;
  title = `Angular ${VERSION.full} is cool!`

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clicked = true;
  }

}

// NOTES

// Interpolation: Take raw value in TS and render it on HTML
// Directive: Act like a component but without its own HTML or CSS (eg: *ngIf, *ngFor)
