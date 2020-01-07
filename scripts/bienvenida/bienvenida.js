(function (urlGetFlagMicroEffect) {
    debugger;
    const videoPopup = document.querySelector(".intro__navidenio");
    const videoContainer = document.getElementById("IntroNavidenio");
    const videoIntro = document.getElementById("IntroNavidenioVideo");
    const idPopUp = document.getElementById("introNavidenioWrapper");

    const intro = new IntroNavidenio(idPopUp,videoPopup, videoContainer, videoIntro, urlGetFlagMicroEffect);
    setTimeout(function () {
        intro.inicializar();
    }, 1000);
})(urlGetFlagMicroEffect);