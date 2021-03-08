import { Component } from '@angular/core';
import {UsersCounterService} from '../users-counter.service'
@Component({
  selector: 'app-users-counter',
  templateUrl: './users-counter.component.html',
  styleUrls: ['./users-counter.component.css']
})
export class UsersCounterComponent  {
  counter: Number | undefined;

  constructor(private service: UsersCounterService) {
    service.currentCounter.subscribe(counter=> this.counter= counter);
  }

}
