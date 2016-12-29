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

    sidebar;

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
        if(!this.mobileOn){
            this.listContainer = $(".list-container")[0];
            TweenMax.from(this.listContainer, 1 ,{"left": "61%", ease: Bounce.easeOut, delay: 0.5});
        }else{
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

        //WAIT FOR ON CLICK TO ANIMATE TO THE SECOND PHASE
    }

    GoToProjects(){
        if(this.mobileOn){
            console.log("mobile");
        }else{
            console.log('browser');
        }

    }

    ToggleMenu(){
        this.sidebar.sidebar('toggle');
    }

    GoToResume(){
        this.ToggleMenu();
        window.location.href = "/#/projects";
    }

    GoToGithub(){

    }

    GotoAwards(){

    }

    MenuButton(){
        this.ToggleMenu();
    }

}