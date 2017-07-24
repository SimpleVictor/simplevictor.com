import { Injectable } from '@angular/core';

declare let TweenMax,// ___
    Circ,//    |
    Back,//    | ----- TWEENMAX
    Bounce,// ___|
    $,// <-- JQUERY
    mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Injectable()
export class AnimationChecker{

    mobileChecker;

    topMobileContainer;
    profileImg;
    basicInfoContainer;

    // constructor(private http: Http) {
    constructor() {
        this.mobileChecker = mobilecheck(); //<--Init the function
    }

    //This function is to make sure if the user refreshes the page and they're not on the main route.
    //Then redirect the user back to the main Route.
    //This is to avoid animation collisions
    CheckUrl(){
        if(location.href !== "http://localhost:3000/#/home"){
            window.location.href = "/#/home";
        }else{
            console.log("User is already on the home page");
        }
    }
}