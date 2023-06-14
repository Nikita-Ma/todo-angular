import {Component} from '@angular/core';
import {ModalService} from "../modal/modal.service";

@Component({
  selector: 'app-add-to-test',
  templateUrl: './add-to-test.component.html',
  styleUrls: ['./add-to-test.component.css'],
  providers: [ModalService]
})
export class AddToTestComponent {
  private test = {a: 1, b: 2}

  constructor(
    private readonly modalService: ModalService
  ) {
  }

  public product = this.modalService.controls$

  updateControls(): void {
    const data = '111111'
    this.modalService.setControlsData(data);
  }
  public addToTest() {


  }
}
