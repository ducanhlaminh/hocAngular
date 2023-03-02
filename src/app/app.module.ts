import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componnets/header/header.component';
import { HighlightDirective } from './Directive/highlight.directive';
import { LayoutHomeComponent } from './Layout/layout-home/layout-home.component';
import { CounterComponent } from './componnets/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    LayoutHomeComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
