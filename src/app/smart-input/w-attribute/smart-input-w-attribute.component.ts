import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'smart-input-w-attribute',
  template: `
    <div [ngSwitch]="type">
      <input type="text" *ngSwitchCase="'text'" />
      <input type="number" *ngSwitchCase="'number'" />
      <p *ngSwitchDefault>Unsupported type: {{ type | json }}</p>
    </div>
  `
})
export class SmartInputComponentWAttribute {
  constructor(@Attribute('type') public type: string) {
    console.log(
      `Usage with @Attribute(): type value in constructor: ${this.type}`
    );
  }
}

// import { Component, Inject, InjectionToken, Attribute } from '@angular/core';

// export const TOKEN = new InjectionToken<string>('TypeAttribute');

// export function factory(token: string): string {
//   return token;
// }

// @Component({
//   selector: 'smart-input',
//   template: `
//     <div [ngSwitch]="type">
//       <input type="text" *ngSwitchCase="'text'" />
//       <input type="number" *ngSwitchCase="'number'" />
//       <p *ngSwitchDefault>Unsupported type: {{ type }}</p>
//     </div>
//   `,
//   providers: [
//     {
//       provide: TOKEN,
//       deps: [[new Attribute('type')]],
//       useFactory: factory
//     }
//   ]
// })
// export class SmartInputComponent {
//   constructor(@Inject(TOKEN) readonly type: string) {}
// }
