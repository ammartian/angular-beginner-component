import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clicked = false;
  title = `Angular ${VERSION.full} is cool!`

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clicked = true;
  }

}

// NOTES!

// Smart component vs Dumb component

// Smart component: Control how things works
// Dumb component: Control presentation logic

// A.K.A Statefull vs Stateless component
