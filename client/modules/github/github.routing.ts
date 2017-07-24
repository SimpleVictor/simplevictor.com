import { Routes, RouterModule } from '@angular/router';
import {GithubComponent} from "./github";


export const routes: Routes = [
    { path: '', component: GithubComponent }
];

export const routing = RouterModule.forChild(routes);