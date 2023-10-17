// start assing variable
var bookMarkName = document.getElementById("siteName");
var siteUlr = document.getElementById("siteUrl");
var productContainer = [];

// end assing variable



// start reverse data from local storage
if(localStorage.getItem("productContainer")!=null){
    productContainer=JSON.parse(localStorage.getItem("productContainer"));
    displayProduct(productContainer);
}
// end reverse data from local storage


// start add product
function addProduct(){
    if(checkRegex1()==true && checkRegex2()==true){
        product={
            bookMark:bookMarkName.value,
            url:siteUlr.value,
        }
        productContainer.push(product);
        localStorage.setItem("productContainer",JSON.stringify(productContainer));
        displayProduct(productContainer);
        clearForm();

    }
    else{
        alert("Bookmark Name or Website url is not a valid");
    }
     
}
// end add product


// start display product
function displayProduct(productContainer){
    var cartoona = "";
    for(var i= 0 ; i<productContainer.length;i++){
        cartoona+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${productContainer[i].bookMark}</td>
            <td ><a target="_blank" href="${productContainer[i].url}" onclick="vistWeb(${i})"  class="btn btn-primary">Visit</a></td>
            <td><button id="visit" onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("addForTbody").innerHTML =cartoona ;
}
// end display product



// start clear form
function clearForm(){
    bookMarkName.value="";
    siteUlr.value="";
    
}
// end clear form

// start delete product
function deleteProduct(index){
    productContainer.splice(productContainer[index],1);
    localStorage.setItem("productContainer",JSON.stringify(productContainer));
    displayProduct(productContainer);
}
// end delete product


// start regex
function checkRegex1(){
 var regex=/^https:\/\/(www){0,1}[a-zA-Z0-9.-]{1,20}(\.)com[\/]{0,1}$/;
 return regex.test(siteUlr.value);
 
}

function checkRegex2(){
 var regex=/^[A-Z][a-z]{1,10}$/;
 return regex.test(bookMarkName.value);
 
}
// end regex


