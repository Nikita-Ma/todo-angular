import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class ModalService {
  public example = 'q'
  public controls$ = new Subject()

  constructor() {
  }
  setControlsData(data: any): void {
    this.controls$.next(data);
  }
}
