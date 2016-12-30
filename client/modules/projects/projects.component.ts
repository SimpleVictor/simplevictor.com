import {Component, AfterViewInit} from "@angular/core";

declare let TweenMax,// ___
                Circ,//    |
                Back,//    | ----- TWEENMAX
              Bounce,// ___|
                   $,// <-- JQUERY
         mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "projects",
    styleUrls: [`client/css/ProjectPage/full.css`,
                `client/css/ProjectPage/iphone.css`,
                `client/css/ProjectPage/medium.css`,
                `client/css/ProjectPage/global.css`],
    templateUrl: `client/modules/projects/projects.component.html`
})
export class ProjectsComponent implements AfterViewInit{

    mobileChecker; //<-- obviously
    mainContainer; //<--main container for the this component

    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    ngAfterViewInit(){

        this.SetUpVariables(); // <-- SET UP GLOBAL VARIABLE
        this.StartProjectPageAnimation(this.mobileChecker); //<--START PAGE ANIMATIONS AT STARTUP

        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
        }else{
            console.log("Project Component: WEB");
        }
    }

    //SET UP ANY GLOBAL VARIABLE FOR THIS COMPONENT
    SetUpVariables(){
        this.mainContainer = $(".projects-container")[0]; //<-- Obviously the main container
        $('.special.cards .image').dimmer({
            on: 'hover' //<--Makes it so when we hover over the card. it displays a button to view the project
        });
    }

    StartProjectPageAnimation(mobile){
        if(mobile){

        }else{
            TweenMax.from(this.mainContainer, 0.8,
                {scale: 0, ease: Circ.easeOut}); //<-- FROM
        }
    }


}