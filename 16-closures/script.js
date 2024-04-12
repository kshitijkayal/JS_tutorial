// refer mdn docs for closure examples and use-cases

// function adder(num){
//     function add(b){
//         console.log(num+b);
//     }
//     return add;
// }

// const addTo5 = adder(5);
// const addTo10 adder(10);

// addTo5(2);
// addTo10(5);

const  myName = document.getElementById("my-name");
const btn = document.getElementById("button");

// function makeTextSizer(size){
//     function changeSize(){
//         myName.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }

// const size12 = makeTextSizer(12);
// const size50 = makeTextSizer(50);
// const size200 = makeTextSizer(200);

// btn.addEventListener("click",size12);


function counter(){
    let count = 1;
    function inc(){
        console.log(count++);
    }
    return inc;
}

const count1 = counter();

count1();
count1();
count1();
count1();
count1();
count1();