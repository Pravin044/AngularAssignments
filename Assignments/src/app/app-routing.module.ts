import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './Posts/posts.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",redirectTo:"posts"
  },
  {
    path:"posts",component:PostsComponent,loadChildren:()=>import("./Posts/posts.module").then(m=>m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
