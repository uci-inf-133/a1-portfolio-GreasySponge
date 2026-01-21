function openTab (evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; ++i) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; ++i) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.classList.add("active");

    const menu = document.getElementById('tabMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(menu);
    if (bsCollapse) {
        bsCollapse.hide();
    }

}

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var playOverlay = document.querySelector("#play-overlay");
var loadButton = document.querySelector("#load-game-btn");

var buildUrl = "Build";
var loaderUrl = buildUrl + "/a1-portfolio-GreasySponge.loader.js";
var config = {
    dataUrl: buildUrl + "/a1-portfolio-GreasySponge.data.br",
    frameworkUrl: buildUrl + "/a1-portfolio-GreasySponge.framework.js.br",
    codeUrl: buildUrl + "/a1-portfolio-GreasySponge.wasm.br",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "DormRoomOne",
    productVersion: "0.1.0",
};

window.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.querySelector("#play-overlay button");

    if (loadButton) {
        loadButton.onclick = () => {
            loadUnityGame();
        };
    }
});
