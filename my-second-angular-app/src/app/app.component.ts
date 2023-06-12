import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {SecondComponent} from "./second/second.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynamicComp = ChildComponent
  // constructor(
  //   viewContainer: ViewContainerRef,
  //   cfr: ComponentFactoryResolver
  // )
  // {
  //   const ChildComponentFactory = cfr.resolveComponentFactory(ChildComponent)
  //   const childComponent = viewContainer.createComponent(ChildComponentFactory)
  //
  //   setTimeout(()=>viewContainer.remove(),3000)
  // }
  //
  // {
  //   setTimeout(()=> {
  //     this.dynamicComp = ChildComponent
  //   },3000)
  //   setTimeout(()=>{
  //     this.dynamicComp = SecondComponent
  //   }, 6000)
  // }












}
