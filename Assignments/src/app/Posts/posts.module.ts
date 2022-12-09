import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { DisplayPostCountComponent } from './display-post-count/display-post-count.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { PostStructureComponent } from './post-structure/post-structure.component';
import {MatCardModule } from "@angular/material/card";
import {MatListModule} from "@angular/material/list"
import {MatButtonModule} from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { PostsComponent } from './posts.component';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import {  MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DisplayPostsComponent,
    DisplayPostCountComponent,
    AddNewPostComponent,
    PostStructureComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    PostRoutingModule,
    ReactiveFormsModule,FormsModule,
    MatIconModule
  ],
  exports:[DisplayPostCountComponent,DisplayPostsComponent,AddNewPostComponent,PostsComponent]
})
export class PostsModule { }
