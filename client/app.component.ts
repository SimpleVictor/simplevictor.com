import {Component, AfterViewInit} from "@angular/core";

declare var TweenMax;
declare var Circ;
declare var Back;
declare var Bounce;
declare var $;
declare var mobilecheck;

@Component({
    selector: "app",
    styleUrls: [`client/css/WelcomePage/full.css`,
                `client/css/WelcomePage/iphone.css`,
                `client/css/WelcomePage/med.css`,
                `client/css/WelcomePage/main.css`],
    templateUrl: `./client/app.component.html`
})
export class AppComponent implements AfterViewInit {

    profileImg;
    listContainer;
    mobileOn;
    menuButton;

    topMobileContainer;
    basicInfoContainer;

    sidebar;

    originalContentAnimated:boolean = false;

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
            this.listContainer = $(".list-container")[0];
            TweenMax.from(this.listContainer, 1 ,{"left": "61%", ease: Bounce.easeOut, delay: 0.5});


        }else{
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
            TweenMax.fromTo(this.menuButton, 1 ,{"left": "103%",opacity: 0,scale: 2, ease: Circ.easeOut}, {"left": "5%", opacity: 1, scale: 1,ease: Circ.easeOut, delay: 0.8});
        }
        //No matter what the profile pic is set for both mobile and desktop
        TweenMax.from(this.profileImg, 1 ,{scale: 0, ease: Back.easeOut});


    }

    AnimateOriginalContent(){
        //CHECK IF THE CONTENTS BEEN ANIMATED ALREADY
        //SO WE DON'T TRY TO ANIMATE AGAIN
        if(!this.originalContentAnimated){
            if(this.mobileOn){
            //FOR MOBILE ONLY
                //Top Container Fill In
                this.topMobileContainer.style.display = "block";
                TweenMax.from(this.topMobileContainer, 0.5 ,{scale: 0, ease: Circ.easeOut});

                //Profile Img
                this.profileImg.style.position = "relative";
                TweenMax.to(this.profileImg, 1 ,{scale: 0.4, top: "-12rem", ease: Circ.easeOut});

                //Basic Info Container
                TweenMax.to(this.basicInfoContainer, 0.8, {scale: 0, ease: Circ.easeOut});

                this.originalContentAnimated = true;
            }else{
            //FOR DESKTOP BROWSER ONLY
                console.log('browser');
                this.originalContentAnimated = true;
            };
        };
    }

    ToggleMenu(){
        this.sidebar.sidebar('toggle');
    }

    GoToProjects(){
        this.ToggleMenu();
        this.AnimateOriginalContent();
        window.location.href = "/#/projects";
    }


    GoToResume(){
        this.ToggleMenu();
    }

    GoToGithub(){

    }

    GotoAwards(){

    }

    MenuButton(){
        this.ToggleMenu();
    }

}