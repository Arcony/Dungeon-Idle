import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterComponent } from './monsters/monster/monster.component';
import { GoldsCounterComponent } from './golds-counter/golds-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonstersComponent,
    MonsterComponent,
    GoldsCounterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
