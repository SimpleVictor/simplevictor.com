import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import {AwardsComponent} from "./awards";
import {routing} from "./awards.routing";

@NgModule({
    imports: [
        routing,
        NgSemanticModule,
    ],
    declarations: [
        AwardsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AwardsModule { }