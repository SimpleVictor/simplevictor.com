import { Routes, RouterModule } from '@angular/router';
import {AwardsComponent} from "./awards";


export const routes: Routes = [
    { path: 'awards', component: AwardsComponent }
];

export const routing = RouterModule.forChild(routes);