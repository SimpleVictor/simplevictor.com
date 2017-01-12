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

    ReverseContainer;
    ReverseOverlay;

    CurrentBox;

    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    ngAfterViewInit(){
        console.log("Delete me");
        this.SetUpVariables(); // <-- SET UP GLOBAL VARIABLE
        this.StartProjectPageAnimation(this.mobileChecker); //<--START PAGE ANIMATIONS AT STARTUP

        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
            //HIDE THE BROWSER CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE BROWSER - 4X2
            //MOBILE WILL BE 2X4
            let BrowserContent = $("#browser-project");
            BrowserContent.css("display", "none");

            //There was a glitch with the profile's img
            //It wouldn't set up with a higher z-index so we have to manually add this in...
            let ImgZIndex = $(".profile-img");
            ImgZIndex.css("z-index", "5");

        }else{
            //HIDE THE MOBILE CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE MOBILE - 2X4
            //Browser WILL BE 4X2
            let MobileContent = $("#mobile-project");
            MobileContent.css("display", "none");
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
            TweenMax.from(this.mainContainer, 0.8,
                {scale: 0, ease: Circ.easeOut}); //<-- FROM
        }else{
            TweenMax.from(this.mainContainer, 0.8,
                {scale: 0, ease: Circ.easeOut}); //<-- FROM
        }
    }

    PreviewApp(overlay, imgContainer){ ///<-- Overlay is the dark background, imgCOntainer containers the button and text
        //Check if there is a box already highlighted
        if(this.CurrentBox){
            this.ReverseBox(this.CurrentBox);
        }
        //overlay and container is set by default HIDDEN
        $(overlay).css("display", "flex");
        $(imgContainer).css("display", "flex");
        //Tween Them to come in more naturally
        this.ReverseOverlay = TweenMax.from($(overlay), 0.7,
            {opacity: 0, ease: Circ.easeOut}); //<-- FROM
        this.ReverseContainer = TweenMax.from($(imgContainer), 0.7,
            {opacity: 0, ease: Circ.easeOut}); //<-- FROM
        //Set Up the new current box
        this.CurrentBox = {
            overlay: $(overlay),
            imgContainer: $(imgContainer)
        };
    }

    ReverseBox(current){ //<-- Hide the previous clicked object
            current.imgContainer.css("display", "none");
            current.overlay.css("display", "none");
    }

    GoToSingleAppPage(params){
        // TweenMax.to($(card), 1, {rotation: 720, ease: Circ.easeOut});
        window.location.href = `/#/single/`+params;
    }


}







