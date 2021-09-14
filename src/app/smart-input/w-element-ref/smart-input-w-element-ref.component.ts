import { Attribute, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-input-w-element-ref',
  template: `
    <div [ngSwitch]="type">
      <input type="text" *ngSwitchCase="'text'" />
      <input type="number" *ngSwitchCase="'number'" />
      <p *ngSwitchDefault>Unsupported type: {{ type | json }}</p>
    </div>
  `
})
export class SmartInputComponentWElementRef {
  type: string;
  constructor(public elementRef: ElementRef) {
    this.type = this.elementRef.nativeElement.getAttribute('type');
    console.log(
      `Usage with ElementRef: type value in constructor: ${this.type}`
    );
  }
}
