import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom, // có tác dụng “cách ly tuyệt đối” HTML + CSS của component khỏi phần còn lại của ứng dụng.
})
export class Comp2Component {}
