import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {
  @Input() delay?: number
  @Input() delayTime?: number

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<Object>
  ) {
  }

  ngOnInit() {
    setTimeout(() => this.viewContainer.createEmbeddedView(this.templateRef), this.delay)
  }
}
