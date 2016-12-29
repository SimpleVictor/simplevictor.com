import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import {ResumeComponent} from "./resume";
import {routing} from "./resume.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
    ],
    declarations: [
        ResumeComponent
    ],
    bootstrap: [
        ResumeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ResumeModule { }