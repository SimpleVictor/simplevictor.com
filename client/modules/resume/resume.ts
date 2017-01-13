import {Component, AfterViewInit} from "@angular/core";

declare let TweenMax,// ___
    Circ,//    |
    Back,//    | ----- TWEENMAX
    Bounce,// ___|
    $,// <-- JQUERY
    mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "resume",
    styleUrls: [`client/css/Minified/Resume.min.css`],
    templateUrl: `client/modules/resume/resume.html`
})

export class ResumeComponent implements AfterViewInit{


    mobileChecker; //<-- obviously
    mainContainer; //<--main container for the this component

    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    ngAfterViewInit(){
        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
            //HIDE THE BROWSER CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE BROWSER - 4X2
            //MOBILE WILL BE 2X4
            let BrowserContent = $(".resume-browser-container");
            BrowserContent.css("display", "none");

            //There was a glitch with the profile's img
            //It wouldn't set up with a higher z-index so we have to manually add this in...
            let ImgZIndex = $(".profile-img");
            ImgZIndex.css("z-index", "5");

        }else{
            //HIDE THE MOBILE CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE MOBILE - 2X4
            //Browser WILL BE 4X2
            let MobileContent = $(".resume-mobile-container");
            MobileContent.css("display", "none");
            console.log("Project Component: WEB");
        }
    }


}
