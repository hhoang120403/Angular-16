import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  // 1. Get Access to the DOM element which we want to Add / Remove
  // 2. Place from where we want to Add or Remove DOM element

  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}

  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view);
    } else {
      this.template.clear();
    }
  }
}
