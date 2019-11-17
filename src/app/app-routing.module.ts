import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { GalleryComponent } from './gallery/gallery.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', component: HomeComponent},
  { path: 'home',  pathMatch: 'full', component: HomeComponent },
  { path: 'gallery',  pathMatch: 'full', component: GalleryComponent  },
  { path: 'login-register',  pathMatch: 'full', component: LoginRegisterComponent  },
  { path: '**',  pathMatch: 'full', component:HomeComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
