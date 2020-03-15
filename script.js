window.onload = function() {
    document.querySelector(".iphone-horizontal").addEventListener("click", displayPhoneHorizontal);
    document.querySelector(".iphone-vertical").addEventListener("click", displayPhoneVertical);

    function displayPhoneHorizontal() {
        document.querySelector(".iphone-horizontal__screen").classList.toggle("iphone-horizontal__screen--no-active");
    }
    function displayPhoneVertical() {
        document.querySelector(".iphone-vertical__screen").classList.toggle("iphone-vertical__screen--no-active");
    }
}