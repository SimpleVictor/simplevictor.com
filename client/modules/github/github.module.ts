import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import {GithubComponent} from "./github";
import {routing} from "./github.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
    ],
    declarations: [
        GithubComponent
    ],
    bootstrap: [
        GithubComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class GithubModule { }