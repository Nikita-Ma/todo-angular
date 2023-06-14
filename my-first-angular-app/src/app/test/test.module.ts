import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
// import { TestPipe } from '../test.pipe';



@NgModule({
  declarations: [
    TestComponent,
    // TestPipe
  ],
  exports: [
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
