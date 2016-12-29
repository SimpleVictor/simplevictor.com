import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './app.component';
import { routing } from "./routes";

import { HomeModule } from "./modules/home/home.module";
import {ProjectsModule} from "./modules/projects/projects.module";
import {AwardsModule} from "./modules/awards/awards.module";
import {GithubModule} from "./modules/github/github.module";
import {ResumeModule} from "./modules/resume/resume.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        HomeModule,
        AwardsModule,
        GithubModule,
        ResumeModule,
        ProjectsModule,
        routing
    ],
    providers: [
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
