import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import {ResumeComponent} from "./resume";
import {routing} from "./resume.routing";

@NgModule({
    imports: [
        routing,
        NgSemanticModule
    ],
    declarations: [
        ResumeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ResumeModule { }