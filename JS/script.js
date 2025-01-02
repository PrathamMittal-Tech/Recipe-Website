const toggleBtn1 = document.querySelector(".toggle-btn1");
const cardText1 = document.querySelector(".toggle-card-text1");

const toggleBtn2 = document.querySelector(".toggle-btn2");
const cardText2 = document.querySelector(".toggle-card-text2");

const toggleBtn3 = document.querySelector(".toggle-btn3");
const cardText3 = document.querySelector(".toggle-card-text3");

const toggleBtn4 = document.querySelector(".toggle-btn4");
const cardText4 = document.querySelector(".toggle-card-text4");


toggleFunc = (toggleBtn, cardText) => {
    let myEvent = "hidden";
    toggleBtn.onclick = () => {
        if (myEvent === "hidden") {
        cardText.style.display = "flex";
        myEvent = "visible";
        } else {
            cardText.style.display = "none";
            myEvent = "hidden";
        }
    }
}

toggleFunc(toggleBtn1, cardText1);
toggleFunc(toggleBtn2, cardText2);
toggleFunc(toggleBtn3, cardText3);
toggleFunc(toggleBtn4, cardText4);