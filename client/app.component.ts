import {Component, AfterViewInit} from "@angular/core";

declare var TweenMax;
declare var Circ;
declare var Back;
declare var Bounce;
declare var $;

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
    constructor() {

    }

    ngAfterViewInit(){
        //STARTING POINT - ANIMATE CONTAINERS IN
        this.profileImg = $(".profile-img")[0];
        this.listContainer = $(".list-container")[0];
        TweenMax.from(this.profileImg, 1 ,{scale: 0, ease: Circ.easeOut});
        TweenMax.from(this.listContainer, 1 ,{"-webkit-padding-start": "100rem", ease: Bounce.easeOut, delay: 0.5});

        //WAIT FOR ON CLICK TO ANIMATE TO THE SECOND PHASE
    }

    GoToProjects(){

    }

    GoToResume(){

    }

    GoToGithub(){

    }

    GotoAwards(){

    }

}