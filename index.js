function fizzbuzz(angka) {
    if (angka % 3 == 0 && angka % 5 == 0) {
        console.log("fizzbuzz")
    } else if (angka % 3 == 0) {
        console.log("fizz");
    } else if (angka % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(angka);
    }
}

for (i = 1; i <= 15; i++) {
    fizzbuzz(i);
}