const handleClick = () => {
    console.log("clicking")
}
// 2nd method
const el = document.getElementById("click")
el.onclick = ()=>{
    console.log("haha");
}

const temp = document.getElementById("name");
el.addEventListener("click", ()=>{    //addEventListener doesnt override the previous onclick function.
    if(temp.style.color==="red"){
        temp.style.color="blue";
    }
    else{
        temp.style.color = "red";
    }
    
})
// for deleting the children on clicking each of them

// const allChildren = document.querySelector("body").children;
// console.log(allChildren);
// for(let i=0;i<allChildren.length;i++){
//     allChildren.item(i).addEventListener("click",()=>{
//         allChildren.item(i).remove();
//     })
// }

