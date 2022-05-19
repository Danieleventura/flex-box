import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './pages/display/display.component';
import { FlexdirectionComponent } from './pages/flexdirection/flexdirection.component';
import { JustifycontentComponent } from './pages/justifycontent/justifycontent.component';
import { AlignitemsComponent } from './pages/alignitems/alignitems.component';
import { FlexwrapComponent } from './pages/flexwrap/flexwrap.component';
import { AligncontentComponent } from './pages/aligncontent/aligncontent.component';
import { GapComponent } from './pages/gap/gap.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FlexdirectionComponent,
    JustifycontentComponent,
    AlignitemsComponent,
    FlexwrapComponent,
    AligncontentComponent,
    GapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
