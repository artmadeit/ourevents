import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule} from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, MdCardModule, MdIconModule, MdToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
