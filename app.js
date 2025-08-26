let flavorprice;
let sizeprice;
let sugarprice;

let flavor= prompt("ENTER YOUR FLAVOR:Orange,Mango,Apple")
let noOfGlasses= prompt("Enter NO OF GLASSES")
let sizeOfGlass= prompt("SELECT:small,medium,large")
let Extrasugar=prompt("EXTRA SUGAR:yes,no")


if(flavor == "orange"){
    flavorprice=150
}else if(flavor == "mango"){
    flavorprice=100
}else if(flavor == "apple"){
    flavorprice=120
}

if(sizeOfGlass == "small"){
    sizeprice=50
}else if(sizeOfGlass == "medium"){
    sizeprice=100
}else if(sizeOfGlass == "large"){
    sizeprice=150
}

if(Extrasugar == "yes"){
    sugarprice=20
}else{sugarprice=0}

let totalOfFlavor=flavorprice*noOfGlasses
let totalOfSize=sizeprice*noOfGlasses

let totalprice=totalOfFlavor+totalOfSize+sugarprice

console.log("SELECTED JUICE:",flavor)
/*console.log("FLAVOR PRICE:",flavorprice)
console.log("NO OF GLASSES:",noOfGlasses)*/
console.log("SIZE:",sizeOfGlass)
console.log("Extra Sugar:", Extrasugar)
console.log("TOTAL BILL:",totalprice)