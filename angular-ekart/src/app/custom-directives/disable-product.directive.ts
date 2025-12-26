import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective {
  @Input() set disableProduct(disable: Boolean) {
    if (disable) {
      this.renderer.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    } else {
      this.renderer.removeClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
