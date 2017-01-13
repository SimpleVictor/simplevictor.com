import {Component, AfterViewInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AllProjects} from "../../projects";

declare let TweenMax,// ___
    Circ,//    |
    Back,//    | ----- TWEENMAX
    Bounce,// ___|
    $,// <-- JQUERY
    mobilecheck;// <-- CUSTOM Library to find out if the user is on the mobile or web browser

@Component({
    selector: "single",
    styleUrls: [`client/css/Minified/ProjectSingle.min.css`],
    templateUrl: `client/modules/projectsingle/projectsingle.html`
})

export class ProjectSingle implements AfterViewInit{

    mobileChecker; //<-- obviously
    mainContainer; //<--main container for the this component

    CurrentState = "about";

    WhatPicture;


    Img;
    Icon;

    ParamProject;
    Project;
    //Used to make sure the tab finish animating before clicking another one
    TabReady: boolean = true;


    constructor(public activatedRoute: ActivatedRoute) {

        this.mobileChecker = mobilecheck(); //<--Init the function
        this.ParamProject = this.activatedRoute.params.subscribe((params) => {
            this.ParamProject = params["id"];
            this.Project = AllProjects[this.ParamProject];
            if(this.Project.name === "Safe Drive"){
                this.WhatPicture = "second-main-img";
            }else if(this.Project.name === "AlexaUX"){
                this.WhatPicture = "alexa-main-img";
            }else if(this.Project.name === "TeamUp"){
                this.WhatPicture = "teamup-main-img";
            }else if(this.Project.name === "Baymax 2.0") {
                this.WhatPicture = "baymax-main-logo";
            }else{
                this.WhatPicture = "single-main-img";
            }
            console.log(this.Project);
        })
    }

    ngAfterViewInit(){

        this.Img = $("#main-img-single");
        this.Icon = $(".store-icon");

        if(this.Project.video){
            $("#iframe-video").attr("src", this.Project.video);
        };

        $('.menu .item')
            .tab()
        ;

        this.StartAnimating();

        console.log(this.mobileChecker);
        if(this.mobileChecker){
            console.log("Project Component: MOBILE");
            //HIDE THE BROWSER CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE BROWSER - 4X2
            //MOBILE WILL BE 2X4
            let BrowserContent = $(".project-single-browser-container");
            BrowserContent.css("display", "none");

            //There was a glitch with the profile's img
            //It wouldn't set up with a higher z-index so we have to manually add this in...
            let ImgZIndex = $(".profile-img");
            ImgZIndex.css("z-index", "5");

        }else{
            //HIDE THE MOBILE CONTENT
            //THE GRID IS SET UP DIFFERENTLY ON THE MOBILE - 2X4
            //Browser WILL BE 4X2
            let MobileContent = $(".project-single-mobile-container");
            MobileContent.css("display", "none");
            console.log("Project Component: WEB");
        }
    }

    StartAnimating(){
        TweenMax.from($(".project-single-container"), 0.5, {scale: 0, ease: Circ.easeOut});
    }

    //Back Button
    BackButton(){
        window.location.href = "/#/projects";
    }

    AnimateTabs(tab, current){
        let vm = this;
        vm.CurrentState = current;

        let ReadyNow = () => {
            this.TabReady = true;
        }
        //Condition statement is to avoid having the user click multiple times
        if(this.TabReady){
            this.TabReady = false;
            console.log(this.CurrentState);
            if(this.CurrentState === "video"){
                this.Img.css("display", "none");
                this.Icon.css("display", "none");

            }else{
                this.Img.css("display", "block");
                this.Icon.css("display", "block");
            }
            TweenMax.from($(tab), 0.5, {scale: 0, ease: Circ.easeOut, onComplete: ReadyNow});
        }
    }

    PictureClicked(tab, current){
        this.AnimateTabs(tab, current);
        setTimeout(() => {
            $(".fancybox").fancybox({
                padding : 0,
                beforeLoad: function() {
                    this.title = $(this.element).attr('caption');
                },
                helpers : {
                    overlay : {
                        css : {
                            'background' : 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            });
        }, 500);
    }




}
