import {Component, AfterViewInit} from "@angular/core";
import {AnimationChecker} from "../../providers/AnimationChecker";


declare let TweenMax,// ___
    Circ,//    |
    Back,//    | ----- TWEENMAX
    Bounce,// ___|
    $,// <-- JQUERY
    mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "awards",
    styleUrls: [`client/css/AwardsPage/full.css`,
        `client/css/AwardsPage/iphone.css`,
        `client/css/AwardsPage/medium.css`
    ],
    templateUrl: `client/modules/awards/awards.html`
})

export class AwardsComponent implements AfterViewInit{

    mobileChecker; //<-- obviously
    mainContainer; //<--main container for the this component

    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    ngAfterViewInit(){

        this.SetUpVariables(); // <-- SET UP GLOBAL VARIABLE
        this.StartAwardsPageAnimation(this.mobileChecker); //<--START PAGE ANIMATIONS AT STARTUP


        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
            //HIDE THE BROWSER CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE BROWSER - 4X2
            //MOBILE WILL BE 2X4
            let BrowserContent = $("#browser-project-awards");
            BrowserContent.css("display", "none");

            //There was a glitch with the profile's img
            //It wouldn't set up with a higher z-index so we have to manually add this in...
            let ImgZIndex = $(".profile-img");
            ImgZIndex.css("z-index", "5");

        }else{
            //HIDE THE MOBILE CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE MOBILE - 2X4
            //Browser WILL BE 4X2
            let MobileContent = $("#mobile-project-awards");
            MobileContent.css("display", "none");
            console.log("Project Component: WEB");
        }

    }

    SetUpVariables(){
        this.mainContainer = $(".awards-container")[0]; //<-- Obviously the main container
        $('.special.cards .image').dimmer({
            on: 'hover' //<--Makes it so when we hover over the card. it displays a button to view the project
        });
    }

    //Start Pop In Animation of the Main Container
    StartAwardsPageAnimation(mobile){
        if(mobile){
            TweenMax.from(this.mainContainer, 0.8,
                {scale: 0, ease: Circ.easeOut}); //<-- FROM
        }else{
            TweenMax.from(this.mainContainer, 0.8,
                {scale: 0, ease: Circ.easeOut}); //<-- FROM
        }
    }


}
