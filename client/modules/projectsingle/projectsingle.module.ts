import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";


import { SharedModule } from "../shared/shared.module";
import {ProjectSingle} from "./projectsingle";
import {routing} from "./projectsingle.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
    ],
    declarations: [
        ProjectSingle
    ],
    bootstrap: [
        ProjectSingle
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ProjectSingleModule { }