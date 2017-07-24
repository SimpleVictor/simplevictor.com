import { Routes, RouterModule } from '@angular/router';
import {ProjectSingle} from "./projectsingle";


export const routes: Routes = [
    { path: '', component: ProjectSingle}
];

export const routing = RouterModule.forChild(routes);