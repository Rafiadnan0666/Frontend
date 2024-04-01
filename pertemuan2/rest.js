function sum(...numbers) {
    let hasil  = 0
    for(const number of numbers){
     hasil = hasil + number
    }

    console.log(hasil);
}

sum(3,3,3)