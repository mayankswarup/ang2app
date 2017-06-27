import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroDetailComponent  } from './hero-detail.component';
import { HighlightDirective  } from './appDirective';

@NgModule({
  declarations: [ 
    AppComponent, HeroDetailComponent, HighlightDirective 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
