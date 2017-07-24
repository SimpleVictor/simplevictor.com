import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./resume";


export const routes: Routes = [
    { path: '', component: ResumeComponent }
];

export const routing = RouterModule.forChild(routes);