const n = [1, 4, 11, 2, 37, -4,];
let large = n[0]; 
let small = n[0]; 

for (i = 0; i < n.length; i++){ 
    if(n[i] > large){
        large = n[i];
        console.log(large);
    }
}

for (i = 0; i < n.length; i++){
    if(n[i] < small){
        small = n[i];
        console.log(small);
    }
}    

