import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  persons;

  constructor() { }

  ngOnInit(): void {
    this.persons = of([
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
  }

}
