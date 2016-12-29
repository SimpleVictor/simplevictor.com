import {Component, AfterViewInit} from "@angular/core";

declare let TweenMax,// ___
                Circ,//    |
                Back,//    | ----- TWEENMAX
              Bounce,// ___|
                   $,// <-- JQUERY
         mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "app",
    styleUrls: [`client/css/WelcomePage/full.css`,
                `client/css/WelcomePage/iphone.css`,
                `client/css/WelcomePage/med.css`,
                `client/css/WelcomePage/main.css`],
    templateUrl: `./client/app.component.html`
})
export class AppComponent implements AfterViewInit {
    //WEB
    listContainer; //<--GITHUB/RESUME/PROJECTS/ ETC CONTAINER (WEB)

    //MOBILE
    menuButton; //<--MENU BUTTON (MOBILE)
    topMobileContainer; //<--TOP CONTAINER BACKGROUND FOR MOBILE
    basicInfoContainer; //<--MOBILE BASIC INFO CONTAINER (NAME, STUDENT DEVELOPER)
    sidebar; //<--SIDEBAR FOR MOBILE

    //BOTH
    mobileOn; //<--BOOLEAN VARIABLE TO KNOW IF USER IS A MOBILE OR WEB
    profileImg; //<---PROFILE IMG CONTAINER
    originalContentAnimated:boolean = false; //<--CHECKS IF ORIGINAL CONTENT HAS BEEN ANIMATED BEFORE MOVING ON TO THE NEXT PAGE


    constructor() {
        //Checks if the user is on a mobile or a desktop
        if(mobilecheck() === true){
            console.log("User is viewing on a mobile broswer");
            this.mobileOn = true;
        }else{
            console.log("User is viewing on a desktop browser");
            this.mobileOn = false;
        }
    }

    ngAfterViewInit(){
        //STARTING POINT - ANIMATE CONTAINERS IN
        this.profileImg = $(".profile-img")[0];
        this.basicInfoContainer = $(".basic-info")[0];
        if(!this.mobileOn){
        //WHEN USER IS ON A DESKTOP BROWSER
            this.listContainer = $(".list-container")[0];
            TweenMax.from(this.listContainer, 1 ,
                {"left": "76%", ease: Bounce.easeOut, delay: 0.5}); //<--FROM
        }else{
        //WHEN USER IS A MOBILE BROWSER
            $(".home-container")[0].style.display = "block";
            //Set Up Mobile Device (Top Container Background);
            this.topMobileContainer = $(".empty-container-background")[0];
            console.log(this.topMobileContainer);

            //SIDEBAR
            this.sidebar = $('#MobileSidebar');
            //SIDEBAR SETTINGS
            this.sidebar.sidebar('setting', 'transition', 'overlay');
            this.sidebar.sidebar('setting', "dimPage", false);
            //MENU BUTTON
            this.menuButton = $("#menu-button")[0];
            TweenMax.fromTo(this.menuButton, 1 ,
                {"left": "103%",opacity: 0,scale: 2, ease: Circ.easeOut}, //<---- FROM
                {"left": "5%", opacity: 1, scale: 1,ease: Circ.easeOut, delay: 0.8}); //<---- TO
        }
        //No matter what the profile pic is set for both mobile and desktop
        TweenMax.from(this.profileImg, 1 ,
            {scale: 0, ease: Back.easeOut}); //<-- FROM
    }
    AnimateOriginalContent(){
            if(this.mobileOn){
                this.ToggleMenu();
                //CHECK IF THE CONTENTS BEEN ANIMATED ALREADY
                //SO WE DON'T TRY TO ANIMATE AGAIN
                if(!this.originalContentAnimated) {
                    //FOR MOBILE ONLY
                    //TOGGLE SIDEBAR
                    //Top Container Fill In
                    this.topMobileContainer.style.display = "block";
                    TweenMax.from(this.topMobileContainer, 0.5,
                        {scale: 0, ease: Circ.easeOut}); //<-- FROM

                    this.profileImg.style.position = "relative"; //<--Profile Img
                    TweenMax.to(this.profileImg, 1,
                        {scale: 0.4, top: "-12rem", ease: Circ.easeOut}); //<-- TO

                    //Basic Info Container
                    TweenMax.to(this.basicInfoContainer, 0.8,
                        {scale: 0, ease: Circ.easeOut}); //<-- TO
                    this.originalContentAnimated = true; //<-- SWITCH CONTENT ANIMATION TO TRUE
                }
            }else{
            //FOR DESKTOP BROWSER ONLY
                //CHECK IF THE CONTENTS BEEN ANIMATED ALREADY
                //SO WE DON'T TRY TO ANIMATE AGAIN
                if(!this.originalContentAnimated){
                    this.ToggleWebComponents(); //<-- Start animating for the starting components
                    this.originalContentAnimated = true; //<-- SWITCH CONTENT ANIMATION TO TRUE
                };
            };
    }
    //TOGGLE MENU TO CLOSE OR OPEN
    ToggleMenu(){
        this.sidebar.sidebar('toggle');
    }
    //THE ANIMATIONS FOR THE STARTIING COMPONENTS ON THE WEB BROSWER
    ToggleWebComponents(){
        TweenMax.to(this.profileImg, 0.6,
            {scale: 0, ease: Circ.easeOut}); //<-- TO
        TweenMax.to(this.listContainer, 1,
            {top: "-35%", ease: Circ.easeOut, delay: 0.5}); //<-- TO
        this.originalContentAnimated = true;
    }
    //PROJECTS COMPONENT
    GoToProjects(){
        this.AnimateOriginalContent();
        window.location.href = "/#/projects";
    }
    //RESUME COMPONENT
    GoToResume(){
        this.AnimateOriginalContent();
        window.location.href = "/#/resume";
    }
    //GITHUBCOMPONENT
    GoToGithub(){
        this.AnimateOriginalContent();
        window.location.href = "/#/github";
    }
    //AWARDS COMPONENT
    GoToAwards(){
        this.AnimateOriginalContent();
        window.location.href = "/#/awards";
    }



}