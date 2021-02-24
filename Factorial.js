const factorial = (n) => {
    n = Math.floor(n);
    if(!isFinite(n) || n < 0){
     return false;
}
    if(n === 0){
     return 1;
}
return n * factorial(n - 1);
}

  factorial(4)