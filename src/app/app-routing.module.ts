import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/containers/home/home.page';
import { BookmarksPage } from './pages/bookmarks/bookmarks.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'bookmarks', component: BookmarksPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
