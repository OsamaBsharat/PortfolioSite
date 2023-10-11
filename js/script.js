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
function convertBirthDayToAge(){
    let myAgeSpan=document.getElementById("my-age");
    var today = new Date();
    const birthDayDate=new Date("1999-05-14");
   const age =today.getFullYear()-birthDayDate.getFullYear();
    myAgeSpan.textContent=age+" Years";

}
convertBirthDayToAge();