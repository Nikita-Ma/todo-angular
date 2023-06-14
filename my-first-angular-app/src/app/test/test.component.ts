import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = "whattttTeeeeeeest"

  getName() {
    return this.title
  }

  private money = 1000;
  public imgSrc = 'https://chat.openai.com/images/chatgpt-share-og.png'
  public imgWidt = 200

  public imgClick(event: MouseEvent) {
    console.log('Clicked', event)
  }

  public getSalary(): number {
    return this.money * 15
  }
}
