import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects.component";


export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent},
];

export const routing = RouterModule.forChild(routes);