import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  // private element: ElementRef;
  // @Input('setBackground') backgroundColor = '#36454F';
  // @Input() textColor = 'white';
  @Input('setBackground') changeTexAndBackColor: {
    backColor: string;
    textColor: string;
  } = {
    backColor: '#36454F',
    textColor: 'white',
  };

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = '#36454F';
    // this.element.nativeElement.style.color = 'white';
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   this.backgroundColor
    // );
    // this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.changeTexAndBackColor.backColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.changeTexAndBackColor.textColor
    );
  }
}
