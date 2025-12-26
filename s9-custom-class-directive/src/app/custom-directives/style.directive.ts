import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appStyle') set style(styles: Object) {
    let entries = Object.entries(styles);
    for (let [cssStyle, value] of entries) {
      this.renderer.setStyle(this.element.nativeElement, cssStyle, value);
    }
  }
}
