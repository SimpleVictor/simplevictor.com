function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
    //IMAGES
    'assets/img/profile_pic.png',
    'assets/img/alexaux.jpg',
    'assets/img/dayplanner.jpg',
    'assets/img/fitness.jpg',
    'assets/img/foodai.jpg',
    'assets/img/phreshfood.jpg',
    'assets/img/safedrive.jpg',
    'assets/img/wrinkle.png',
    'assets/img/mybaymax.png',
    //ProfileBackground
    'assets/img/profile_background.png',
    //GIFS
    'assets/img/alexaux.gif',
    'assets/img/foodai.gif',
    'assets/img/frsecurity.gif',
    'assets/img/safedrive.gif',
    'assets/img/teamup.gif'
]);