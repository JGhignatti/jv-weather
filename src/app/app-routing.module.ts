import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomePage } from './pages/home/containers/home/home.page';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks/bookmarks.page';
import { HomePage } from './pages/home/containers/home/home.page';


const routes: Routes = [{path:'', component: HomePage}, 
{path: 'bookmarks', component: BookmarksPage},
{ path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
