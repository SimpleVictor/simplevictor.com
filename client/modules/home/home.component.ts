import {Component, AfterViewInit} from "@angular/core";

declare var TweenMax;
declare var Circ;
declare var Back;
declare var Bounce;
declare var $;

@Component({
    selector: "home",
    styleUrls: [`client/modules/home/home.component.css`],
    templateUrl: `client/modules/home/home.component.html`
})
// TweenMax.from(logo, 2 ,{top: "30%", repeat: 'infinite', yoyo: true, ease: Back.easeInOut});
export class HomeComponent implements AfterViewInit {

    profileImg;
    listContainer;


    constructor() {

    }

    ngAfterViewInit(){
        this.profileImg = $(".profile-img")[0];
        this.listContainer = $(".list-container")[0];

        console.log(this.profileImg);
        TweenMax.from(this.profileImg, 1 ,{scale: 0, ease: Circ.easeOut});
        TweenMax.from(this.listContainer, 1 ,{"-webkit-padding-start": "108rem", ease: Bounce.easeInOut});

    }
    
}
