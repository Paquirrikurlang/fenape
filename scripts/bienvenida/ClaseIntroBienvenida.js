class IntroNavidenio {

    constructor(idPopUp, videoPopup, videoContainer, videoIntro, url) {
        debugger;
        this.videoPopup = videoPopup;
        this.videoContainer = videoContainer;
        this.videoIntro = videoIntro;
        this.idPopUp = idPopUp;
        this._url = url
    }

    validarDispositivoMacOIOS() {
        return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
    }

    inicializar() {
        debugger;
        const self = this;
        const screenSizeDesktop = window.matchMedia("(min-width:992px)").matches;
        const srcVideo = {
            srcVideoMobile: "/content/videos/bienvenida/intro_mobile.mp4",
            srcVideoDesktop: "/content/videos/bienvenida/intro-desktop.mp4"
        };

        $.when(_isShow()).then((response) => {
            debugger;
           /* if (response.isShow) {*/
                if (!(self.validarDispositivoMacOIOS())) {
                    self.idPopUp.classList.remove("d-none");
                    self.idPopUp.classList.add("d-block");
                    document.querySelector("body").style.opacity = 1;
                    if (screenSizeDesktop) {
                        self.videoIntro.innerHTML = `<source type="video/webm" src="${srcVideo.srcVideoDesktop}" />`;
                    } else {
                        self.videoIntro.innerHTML = `<source type="video/webm" src="${srcVideo.srcVideoMobile}" />`;
                    }
                    setTimeout(function () {
                        self.mostrarVideoIntro();
                    }, 1000);
                } else {
                    document.querySelector("body").style.opacity = 1;
                    self.idPopUp.classList.remove("d-block");
                    self.idPopUp.classList.add("d-none");
                }
           /* } else {
                document.querySelector("body").style.opacity = 1;
                self.idPopUp.classList.remove("d-block");
                self.idPopUp.classList.add("d-none");
            }*/
        });

        function _isShow() {
           var valor=true;
           /* var url = self._url;
            var sendData = {};
            var d = $.Deferred();
            var promise = $.ajax({
                method: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                async: true,
                url: url,
                data: JSON.stringify(sendData)
            });

            promise.done((response) => {
                d.resolve(response);
            }).fail(() => {
                d.reject();
            });
            */
            return valor;
        }

    }

    mostrarVideoIntro() {
        const claseParaMostrarVideo = "intro__navidenio__container--mostrar";
        this.videoContainer.classList.add(claseParaMostrarVideo);
        this.videoIntro.muted = true;
        this.videoIntro.play();
        this.ocultarVideoIntro(this.videoPopup);
    }

    ocultarVideoIntro(popup) {
        const claseParaOcultarPopup = "intro__navidenio--ocultar";
        this.videoIntro.addEventListener("ended", function () {
            setTimeout(function () {
                popup.classList.add(claseParaOcultarPopup);
            }, 1000);
        });
    }

}