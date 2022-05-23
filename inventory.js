

var productArr=JSON.parse(localStorage.getItem("products")) ; 

displayData(productArr)
function displayData(data){
data.forEach(function (ele,i){
// console.log(ele,i) ;

var div = document.createElement("div") ;
div.setAttribute("class", "box")
div.style.boxShadow = "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"

var image= document.createElement("img") ;
image.src = ele.image ;
image.style.height = "200px" ;
image.style.width = "100%"

var p1 =document.createElement("p") ;
p1.innerText = ele.type ;

var p2 =document.createElement("p") ;
p2.innerText = ele.desc ;

var p3 =document.createElement("p") ;
p3.innerText ="Rs."+ele.price ;

var btn = document.createElement("button") ;
btn.innerText = "Remove" ;
btn.setAttribute("id", "remove_product")
btn.style.cursor= "pointer" ;

btn.addEventListener("click", function (){
    deleteFunction(ele,i) ;
})

div.append(image ,p1,p2,p3,btn) ;
document.querySelector("#all_products").append(div) ;
})
}
// var forDeleteArr = []
function deleteFunction(ele ,i){
productArr.splice(i,1) ;
localStorage.setItem("products" ,JSON.stringify(productArr)) ;
window.location.reload() ;
}