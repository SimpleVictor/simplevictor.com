import {Component, AfterViewInit} from "@angular/core";

declare let TweenMax,// ___
    Circ,//    |
    Back,//    | ----- TWEENMAX
    Bounce,// ___|
    $,// <-- JQUERY
    mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "single",
    styleUrls: [`client/css/ProjectSingle/full.css`],
    templateUrl: `client/modules/projectsingle/projectsingle.html`
})

export class ProjectSingle implements AfterViewInit{

    mobileChecker; //<-- obviously
    mainContainer; //<--main container for the this component

    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    ngAfterViewInit(){
        console.log(this.mobileChecker);
        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
            //HIDE THE BROWSER CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE BROWSER - 4X2
            //MOBILE WILL BE 2X4
            let BrowserContent = $(".project-single-browser-container");
            BrowserContent.css("display", "none");

            //There was a glitch with the profile's img
            //It wouldn't set up with a higher z-index so we have to manually add this in...
            let ImgZIndex = $(".profile-img");
            ImgZIndex.css("z-index", "5");

        }else{
            //HIDE THE MOBILE CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE MOBILE - 2X4
            //Browser WILL BE 4X2
            let MobileContent = $(".project-single-mobile-container");
            MobileContent.css("display", "none");
            console.log("Project Component: WEB");
        }
    }




}
