import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        //Projects
        path: 'projects',
        loadChildren: 'client/modules/projects/projects.module#ProjectsModule'
    },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });