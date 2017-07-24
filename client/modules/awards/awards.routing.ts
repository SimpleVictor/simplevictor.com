import { Routes, RouterModule } from '@angular/router';
import {AwardsComponent} from "./awards";


export const routes: Routes = [
    { path: '', component: AwardsComponent }
];

export const routing = RouterModule.forChild(routes);