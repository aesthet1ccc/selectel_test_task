import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { SecondPage } from './components/second-page/second-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'second',
    component: SecondPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
