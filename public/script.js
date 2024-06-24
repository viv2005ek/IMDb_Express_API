const card1LoadingImg = document.getElementById("card1LoadingImg");
const card2LoadingImg = document.getElementById("card2LoadingImg");
const card1LoadingTitle = document.getElementById("card1LoadingTitle");
const card2LoadingTitle = document.getElementById("card2LoadingTitle");
const card1LoadingText = document.getElementById("card1LoadingText");
const card2LoadingText = document.getElementById("card2LoadingText");
const card1LoadingButton = document.getElementById("card1LoadingButton");
const card2LoadingButton = document.getElementById("card2LoadingButton");


setTimeout(() => {
    card1LoadingImg.src = "./images/img1.png";
    card2LoadingImg.src = "./images/img2.png";

    card1LoadingTitle.innerText = "JUMANJI: Welcome To The Jungle";
    card2LoadingTitle.innerText = "URI: The Great Revenge";

    card1LoadingText.innerText = "Action thriller movie, full of Adventure";
    card2LoadingText.innerText = "Action movie, Based on true incident";

    card1LoadingButton.innerText = "Watch Now"
    card2LoadingButton.innerText = "Watch Now"

}, 3000)