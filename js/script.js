function seeMoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");

    if (dots.style.display === "none" || dots.style.display === "") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        dots.textContent = "See More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        dots.textContent = "Show Less";
    }
}