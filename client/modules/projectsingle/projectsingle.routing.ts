import { Routes, RouterModule } from '@angular/router';
import {ProjectSingle} from "./projectsingle";


export const routes: Routes = [
    { path: 'single/:id', component: ProjectSingle}
];

export const routing = RouterModule.forChild(routes);