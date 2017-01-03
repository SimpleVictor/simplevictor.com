import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        //Projects
        path: 'projects',
        loadChildren: 'client/modules/projects/projects.module#ProjectsModule'
    },
    {
        //Awards
        path: 'awards',
        loadChildren: 'client/modules/awards/awards.module#AwardsModule'
    },
    {
        //Github
        path: 'github',
        loadChildren: 'client/modules/github/github.module#GithubModule'
    },
    {
        //Resume
        path: 'resume',
        loadChildren: 'client/modules/resume/resume.module#ResumeModule'
    },
    {
        //Project Single
        path: 'single',
        loadChildren: 'client/modules/projectsingle/projectsingle.module#ProjectSingleModule'
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });