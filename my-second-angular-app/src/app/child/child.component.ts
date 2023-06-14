import {Attribute, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() title?: string

  // constructor(@Attribute('title') public title: string) {
  //   console.log(this.title)
  //
  // }

  ngOnInit() {
    console.log(this.title)
  }
}
