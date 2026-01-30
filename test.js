function sumMultiple(f,m){
  let total=0;
  for(let num of m){
    for (let fact of f){
      if (num % fact === 0) {
        total += num;
        break;
      }
    }
  }
  return total;
}
function calculate() {
  let fText=document.getElementById("fInput").value;
  let mText=document.getElementById("mInput").value;
  let f=fText.split(",").map(Number);
  let m=mText.split(",").map(Number);
  let result=sumMultiples(f,m);
  document.getElementById("output").innerHTML="Sum = " +result;
}
let f =[2,3];
let m =[1,2,3,4,5,6,7,8,9];
let result= sumMultiple(f,m);
console.log(result);


