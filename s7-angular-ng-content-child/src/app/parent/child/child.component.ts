import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @ContentChild('para') paragraphEl!: ElementRef;
  @ContentChild(TestComponent) testEl!: TestComponent;
  @ContentChildren('para') paraElemts!: QueryList<ElementRef>;
  @ContentChildren(TestComponent) testElemts!: QueryList<TestComponent>;

  styleParagraph() {
    // this.paragraphEl.nativeElement.style.color = 'red';
    // console.log(this.testEl.name);

    this.paraElemts.forEach((para) => {
      console.log(para.nativeElement);
    });
    this.testElemts.forEach((test) => {
      console.log(test.name);
    });
  }
}
