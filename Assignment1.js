let a = - 56
if(a>0){
    console.log(a,"is a Positive Number");
}
else{
    console.log(a,"is a Negative Number");
}

let a = 26
if(a%2==0){
    console.log(a,"is a Even Number")
}
else{
    console.log(a,"is a Odd Number")
}


for(i=0;i<101;i++){
    console.log(i);
}


for(i=2;i<101;i+=2){
    console.log(i);
}


for(i=100;i>=1;i--){
    console.log(i);
}


let a = 0;
for(i=0;i<5;i++){
    a=a+i;
}
console.log(a);


let a = 3;
let b = 7;
let c = 1;
if(a>b){
    if(a>c){
        console.log(a);
    }
}
else if(b>a){
    if(b>c){
        console.log(b);
    }
}
else{
    console.log(c);
}