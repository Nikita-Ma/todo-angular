import {Component, Input} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public title = 'test';
  protected readonly Title = Title;

  public titleQ = 'se'
  public searchText = "";

  public search(text: string): void {
    this.searchText = text
    console.log(text)
  }
}
