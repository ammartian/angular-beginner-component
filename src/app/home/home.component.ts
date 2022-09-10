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

  persons = [
    {
      name: 'Ammar Hakimi',
      age: 24,
      starSign: 'Leo'
    },
    {
      name: 'Arfah Diyanah',
      age: 23,
      starSign: 'Aquarius'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clicked = true;
  }

}
