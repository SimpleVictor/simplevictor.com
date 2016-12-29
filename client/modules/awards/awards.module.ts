import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import {AwardsComponent} from "./awards";
import {routing} from "./awards.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
    ],
    declarations: [
        AwardsComponent
    ],
    bootstrap: [
        AwardsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AwardsModule { }