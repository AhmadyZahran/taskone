// main color white #ffffff
//footer color #0e533d
//background #edeced

//Start create navbar element for header
let divHeader = document.createElement("div");
divHeader.className = "header"

// Start create logo element
let logoHeader = document.createElement("p")
logoHeader.className = "logo"
let logoHeaderText = document.createTextNode("Elzero")
logoHeader.appendChild(logoHeaderText)
// style css  logo 
document.styleSheets[0].insertRule(".logo{}", 0)
document.styleSheets[0].cssRules[0].style.setProperty("color", "green")
document.styleSheets[0].cssRules[0].style.setProperty("font-size", "25px")
document.styleSheets[0].cssRules[0].style.setProperty("line-height", "0.1px")
document.styleSheets[0].cssRules[0].style.setProperty("font-weight", "900")
divHeader.appendChild(logoHeader)
// End create logo element

// Start create ul element
let ulHeader = document.createElement("ul")
ulHeader.className = "ulHeader"
let oneLiHeader = document.createElement("li")
let oneLiHeaderText = document.createTextNode("Home")
let twoLiHeader = document.createElement("li")
let twoLiHeaderText = document.createTextNode("About")
let threeLiHeader = document.createElement("li")
let threeLiHeaderText = document.createTextNode("Service")
let fourLiHeader = document.createElement("li")
let fourLiHeaderText = document.createTextNode("Contact")
oneLiHeader.appendChild(oneLiHeaderText)
twoLiHeader.appendChild(twoLiHeaderText)
threeLiHeader.appendChild(threeLiHeaderText)
fourLiHeader.appendChild(fourLiHeaderText)
//
ulHeader.appendChild(oneLiHeader)
ulHeader.appendChild(twoLiHeader)
ulHeader.appendChild(threeLiHeader)
ulHeader.appendChild(fourLiHeader)
document.styleSheets[0].insertRule(".ulHeader{}", 1)
document.styleSheets[0].cssRules[1].style.setProperty("color", "grey")
document.styleSheets[0].cssRules[1].style.setProperty("display", "flex")
document.styleSheets[0].cssRules[1].style.setProperty("list-style", "none")
document.styleSheets[0].cssRules[1].style.setProperty("font-size", "20px")
document.styleSheets[0].cssRules[1].style.setProperty("line-height", "8px")
// style main div header
document.styleSheets[0].insertRule(".header{}", 2)
document.styleSheets[0].cssRules[2].style.setProperty("display", "flex")
document.styleSheets[0].cssRules[2].style.setProperty("justify-content", "space-between")
document.styleSheets[0].cssRules[2].style.setProperty("background-color", "#ffffff")
document.styleSheets[0].insertRule("ul li{}", 3)
document.styleSheets[0].cssRules[3].style.setProperty("margin-right", "10px")
divHeader.appendChild(ulHeader)
// End create ul element
document.body.appendChild(divHeader)
//End create navbar element for header


//Start contain work
///tart create div contain (parent)
let divContain = document.createElement("div");
divContain.className = "divContain";
document.styleSheets[0].insertRule(".divContain{}", 4);
document.styleSheets[0].cssRules[4].style.setProperty("background-color", "#edeced");
//End create div contain

//Start create div container (child)
let divContainer = document.createElement("div");
divContainer.className = "divContainer";

//End create div conianer
//Start create contain element of container element
for (let i = 1; i <= 15; i++) {
    let allOfThem = document.createElement("div");
    allOfThem.className = "allOfThem";
    let containSpan = document.createElement("span");
    containSpan.className = "containSpan"
    containSpan.innerHTML = `${i}`
    let containProduct = document.createElement("p");
    containProduct.className = "containProduct";
    let containText = document.createTextNode("Product");
    containText.className = "containText";
    containProduct.appendChild(containText);


    allOfThem.appendChild(containSpan);
    allOfThem.appendChild(containProduct);
    divContainer.appendChild(allOfThem)
    divContain.appendChild(divContainer)

}
document.body.appendChild(divContain);

document.styleSheets[0].insertRule(".containSpan{}", 5);
document.styleSheets[0].cssRules[5].style.setProperty("height", "45px");
document.styleSheets[0].cssRules[5].style.setProperty("font-weight", "550");
document.styleSheets[0].cssRules[5].style.setProperty("margin-top", "10px");
document.styleSheets[0].cssRules[5].style.setProperty("font-size", "30px");

document.styleSheets[0].insertRule(".allOfThem{}", 6); //allOfthem
document.styleSheets[0].cssRules[6].style.setProperty("margin-top", "20px")
document.styleSheets[0].cssRules[6].style.setProperty("display", "flex")
document.styleSheets[0].cssRules[6].style.setProperty("flex-direction", "column")
document.styleSheets[0].cssRules[6].style.setProperty("justify-content", "cebter")
document.styleSheets[0].cssRules[6].style.setProperty("align-items", "center")
document.styleSheets[0].cssRules[6].style.setProperty("background-color", "white");
document.styleSheets[0].insertRule(".divContainer{}", 7);
document.styleSheets[0].cssRules[7].style.setProperty("background-color", "#edeced");
document.styleSheets[0].cssRules[7].style.setProperty("display", "grid")
document.styleSheets[0].cssRules[7].style.setProperty("grid-template-columns", "380px 380px 380px")
document.styleSheets[0].cssRules[7].style.setProperty("gap", "5px 20px")
document.styleSheets[0].cssRules[7].style.setProperty("margin-bottom", "15px")
document.styleSheets[0].cssRules[7].style.setProperty("margin-left", "50px")

//    height: 45px;
///style for divContainer
///End style for divContainer
//End create contain element of container element











//End contain work


//start create footer and style
let footer = document.createElement("div");
footer.className = "footer"
let footerChild = document.createElement("div");
footerChild.className = "footerChild"
let footerText = document.createTextNode("Copyright 2021");
//start style footer
document.styleSheets[0].insertRule(".footer{}", 4);
document.styleSheets[0].cssRules[4].style.setProperty("background-color", "#0e533d");
document.styleSheets[0].cssRules[4].style.setProperty("color", "white");
//End style footer

//start style footerChild
document.styleSheets[0].insertRule(".footerChild{}", 7)
document.styleSheets[0].cssRules[7].style.setProperty("height", "70px")
document.styleSheets[0].cssRules[7].style.setProperty("font-size", "20px")
document.styleSheets[0].cssRules[7].style.setProperty("display", "flex")
document.styleSheets[0].cssRules[7].style.setProperty("justify-content", "center")
document.styleSheets[0].cssRules[7].style.setProperty("align-items", "center")

// end style footerchild
footerChild.appendChild(footerText)
footer.appendChild(footerChild)
document.body.appendChild(footer)
// console.log(footer);





//End create footer and style

