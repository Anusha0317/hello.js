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
  let result=sumMultiple(f,m);
  document.getElementById("output").innerHTML="Sum = " +result;
}



