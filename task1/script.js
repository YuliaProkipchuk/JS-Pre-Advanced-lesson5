function sums(){
    let count = 0;
    return function s(step){
        count+=step;
        console.log(count);
    }
}
let sum = sums();
sum(3);
sum(5);
sum(228);
