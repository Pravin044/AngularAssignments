import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './Posts/posts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
