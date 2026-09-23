import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'blog', 
    children: [
      { path: '', component: BlogComponent },
      { path: ':id', component: BlogDetailsComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
  
];
