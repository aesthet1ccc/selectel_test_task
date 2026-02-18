import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MenuPage } from './components/menu-page/menu-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'menupage',
    component: MenuPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
