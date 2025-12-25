import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'Demo Component';
  @Input() message?: string;
  @ViewChild('temp') tempEl?: ElementRef;
  @ContentChild('temp') paraContent?: ElementRef;

  constructor() {
    // console.log('DemoComponent constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('DemoComponent ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('DemoComponent ngOnInit called');
    // console.log(this.title);
    // console.log(this.message);
    // console.log(this.tempEl?.textContent);
  }

  ngDoCheck(): void {
    // console.log('DemoComponent ngDoCheck called');
    // console.log('In ngDoCheck', this.paraContent?.nativeElement);
  }

  ngAfterContentInit(): void {
    // console.log('DemoComponent ngAfterContentInit called');
    // console.log('In ngAfterContentInit', this.paraContent?.nativeElement);
  }

  ngAfterContentChecked(): void {
    // console.log('DemoComponent ngAfterContentChecked called');
    // console.log('In ngAfterContentChecked', this.paraContent?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('DemoComponent ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('DemoComponent ngAfterViewChecked called');
    // console.log('In ngAfterViewChecked', this.tempEl?.nativeElement);
  }

  ngOnDestroy(): void {
    console.log('DemoComponent ngOnDestroy called');
  }
}
