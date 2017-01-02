function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
    'assets/img/profile_pic.png',
    'assets/img/alexaux.gif',
    'assets/img/foodai.gif',
    'assets/img/frsecurity.gif',
    'assets/img/safedrive.gif',
    'assets/img/teamup.gif'
]);