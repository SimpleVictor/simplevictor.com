import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import {GithubComponent} from "./github";
import {routing} from "./github.routing";

@NgModule({
    imports: [
        routing,
        NgSemanticModule,
    ],
    declarations: [
        GithubComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class GithubModule { }