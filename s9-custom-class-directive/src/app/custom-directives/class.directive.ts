import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value);
    console.log(entries);
    for (let entry of entries) {
      let [className, condition] = entry;
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      } else {
        this.renderer.removeClass(this.element.nativeElement, className);
      }
    }
  }
}
