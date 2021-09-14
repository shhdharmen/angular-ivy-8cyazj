import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmartInputComponentWInput } from './smart-input/w-input/smart-input-w-input.component';
import { SmartInputComponentWAttribute } from './smart-input/w-attribute/smart-input-w-attribute.component';
import { SmartInputComponentWElementRef } from './smart-input/w-element-ref/smart-input-w-element-ref.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SmartInputComponentWInput,
    SmartInputComponentWAttribute,
    SmartInputComponentWElementRef
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
