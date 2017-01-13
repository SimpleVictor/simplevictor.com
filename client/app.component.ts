import {Component, AfterViewInit} from "@angular/core";
import {AnimationChecker} from "./providers/AnimationChecker";

declare let TweenMax,// ___
                Circ,//    |
                Back,//    | ----- TWEENMAX
              Bounce,// ___|
                   $,// <-- JQUERY
         mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "app",
    styleUrls: [`client/css/Minified/Welcome.min.css`],
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

    //Text Description Header
    textDescription;

    //Checks if The page was opened already for the FIRST time
    //So when we navigate back to it. It would redo the animation AND
    //The Script won't wait 1 Second for the animation to proceed if it did already
    OriginalAnimationStartedAlready:boolean = false;


    constructor(public animCheck: AnimationChecker) {
        //This function is to make sure if the user refreshes the page and they're not on the main route.
        //Then redirect the user back to the main Route.
        //This is to avoid animation collisions
        this.animCheck.CheckUrl();
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
        console.log("works at this");
        //STARTING POINT - ANIMATE CONTAINERS IN
        this.profileImg = $(".profile-img")[0];
        this.basicInfoContainer = $(".basic-info")[0];
        this.textDescription = $(".text-router-desc")[0];

        if(!this.mobileOn){
        //WHEN USER IS ON A DESKTOP BROWSER
            $(".text-router-desc").css("display", "none");  //<-- Hide the title that is for the mobile
            this.listContainer = $(".list-container")[0];
            TweenMax.from(this.listContainer, 1 ,
                {"left": "100%", ease: Bounce.easeOut, delay: 0.5}); //<--FROM
        }else{
        //WHEN USER IS A MOBILE BROWSER
            $(".home-container")[0].style.display = "block"; //<-- Show the container. We have by default "none" because of the screen size for the desktop version
            $(".screen-small")[0].style.display = "none"; //<-- Hide the the default message if user is on the web and shrinked screen
            //Set Up Mobile Device (Top Container Background);
            this.topMobileContainer = $(".empty-container-background")[0];
            console.log(this.topMobileContainer);

            //SIDEBAR
            this.sidebar = $('#MobileSidebar');
            //SIDEBAR SETTINGS
            this.sidebar.sidebar('setting', 'transition', 'overlay');
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
        TweenMax.to(this.listContainer, 1,
            {top: "1%","position": "fixed", ease: Circ.easeOut}); //<-- TO
        TweenMax.to(this.profileImg, 0.6,
            {scale: 0,ease: Circ.easeOut}); //<-- TO
        this.originalContentAnimated = true;
    }
    //PROJECTS COMPONENT
    GoToProjects(){
        console.log("Projects");
        this.textDescription.innerHTML = "Projects";
        this.AnimateOriginalContent();
        if(!this.OriginalAnimationStartedAlready) {
            setTimeout(() => {
                window.location.href = "/#/projects";
                this.OriginalAnimationStartedAlready = true;
            }, 1000);
        }else{
            window.location.href = "/#/projects";
        }
    }
    //RESUME COMPONENT
    GoToResume(){
        // this.textDescription.innerHTML = "Resume";
        // this.AnimateOriginalContent();
        // this.OriginalAnimationStartedAlready = true;
        // window.location.href = "/#/resume";
    }
    //GITHUBCOMPONENT
    GoToGithub(){
        this.textDescription.innerHTML = "Github";
        this.AnimateOriginalContent();
        this.OriginalAnimationStartedAlready = true;
        window.location.href = "/#/github";
    }
    //AWARDS COMPONENT
    GoToAwards(){
        this.textDescription.innerHTML = "Awards";
        this.AnimateOriginalContent();
        if(!this.OriginalAnimationStartedAlready) {
            setTimeout(() => {
                window.location.href = "/#/awards";
                this.OriginalAnimationStartedAlready= true;
            }, 1000);
        }else{
            window.location.href = "/#/awards";
        }
    }



}