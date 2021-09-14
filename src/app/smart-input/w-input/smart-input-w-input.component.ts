import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-input-w-input',
  template: `
    <div [ngSwitch]="type">
      <input type="text" *ngSwitchCase="'text'" />
      <input type="number" *ngSwitchCase="'number'" />
      <p *ngSwitchDefault>Unsupported type: {{ type }}</p>
    </div>
  `
})
export class SmartInputComponentWInput implements OnInit {
  @Input() type: string;
  constructor() {
    console.log(`Usage with @Input(): type value in constructor: ${this.type}`);
  }

  ngOnInit() {
    console.log(`Usage with @Input(): type value in ngOnInit: ${this.type}`);
  }
}
