import {Component, OnInit} from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private readonly modalService: ModalService
  ) {
  }

  public addToModal() {
    this.modalService.controls$.next
  }

  ngOnInit() {
  }

}
