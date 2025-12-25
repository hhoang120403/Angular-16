import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  @HostBinding('style.backgroundColor') backgroundColor = '#28282B';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.color') textColor = 'white';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '#28282B 3px solid';
    this.textColor = '#28282B';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#28282B';
    this.border = 'none';
    this.textColor = 'white';
  }
}
