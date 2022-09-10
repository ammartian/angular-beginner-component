import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked = false;
  title = `Angular ${VERSION.full} is cool!`

  persons = of([
    {
      name: 'Ammar Hakimi',
      age: 24,
      starSign: 'Leo',
      img: 'assets/images/ammar.jpeg'
    },
    {
      name: 'Arfah Diyanah',
      age: 23,
      starSign: 'Aquarius',
      img: 'assets/images/arfah.png'
    }
  ])

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clicked = true;
  }

}
