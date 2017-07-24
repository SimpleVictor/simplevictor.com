import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";

@NgModule({
    imports: [
        routing,
        NgSemanticModule,
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }