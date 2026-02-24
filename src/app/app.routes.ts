
import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { ChiSiamoComponent } from '../chiSiamo/chiSiamo.component';
import { MenuComponent } from '../menu/menu.component';
import { Orari } from './orari/orari';

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'chisiamo', component: ChiSiamoComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'orari', component: Orari}
];
