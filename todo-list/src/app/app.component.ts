import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  public todolist = [
    {
      index: 0,
      name: 'Drink coffee',
      important: false,
      complete: false
    },
    {
      index: 1,
      name: 'Sleep',
      important: true,
      complete: false
    },
  ]

  reImportant(event: any, index: any) {
    this.todolist[index].important = !this.todolist[index].important
  }

  delItem(event:any, index:any){
    delete this.todolist[index]
  }


  protected readonly JSON = JSON;
}
