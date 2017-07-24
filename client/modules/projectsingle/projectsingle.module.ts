import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import {ProjectSingle} from "./projectsingle";
import {routing} from "./projectsingle.routing";

@NgModule({
    imports: [
        routing,
        NgSemanticModule,
    ],
    declarations: [
        ProjectSingle
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ProjectSingleModule { }