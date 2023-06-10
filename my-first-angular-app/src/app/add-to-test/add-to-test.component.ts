import {Component} from '@angular/core';

@Component({
  selector: 'app-add-to-test',
  templateUrl: './add-to-test.component.html',
  styleUrls: ['./add-to-test.component.css']
})
export class AddToTestComponent {
  private test = {a: 1, b: 2}

  public addToTest() {
    console.log(this.test)
  }
}
