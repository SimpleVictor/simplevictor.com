import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";


import { SharedModule } from "../shared/shared.module";
import {ProjectsComponent} from "./projects.component";
import {routing} from "./projects.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
    ],
    declarations: [
        ProjectsComponent
    ],
    bootstrap: [
        ProjectsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ProjectsModule { }