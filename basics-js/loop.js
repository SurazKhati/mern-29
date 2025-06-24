let i = 1;

console.log(i++)   // 1 i =2



// do_while
do{
    console.log(i++)
} while(i <= 10)


    // for loop
    for(i =1; i <= 10; i++){
        console.log(i)
    }

    i = 1;
    for(; i <= 10;){
        console.log(i++);
    }

    i = 1;
    for(; ;){
        console.log(i++);
        if(i > 10){
            break;     // break xuttai statement ho  jata pani use garna milxa , switch ma matrai ho vanera nasochnu

        }
    }

    // Write a js program using loop to print first 20 even numbers.
    let a = 2;
    for(let b = 1; b<=20; b++){
        console.log(a)
        a += 2; 
    }

    for(a = 2; a <=40; a+=2){
        console.log(a)
    }

// mostly used and widely accepted during interview perspective
    for(a = 1; a <= 40; a++){
        if(a % 2 == 0){
            console.log(a)
        }
    }


    /**
     * 1
     * 1 2
     * 1 2 3
     * 1 2 3 4
     * 1 2 3 4 5
     * 
     * 1 2 3 4 5
     * 1 2 3 4
     * 1 2 3
     * 1 2
     * 1
     */

    for( i = 1; i <= 5; i++){
        let toPrint = ""
        for(let j=1;j <= i; j++ ){
            toPrint += j+'    ';
        }
        console.log(toPrint);
    }

    for (let i = 5; i >= 1; i--) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += j + "    ";
        }
        console.log(line);
    }
    
    //**
    // 
    // P
    // PR
    // PRO
    // PROG
    // PROGR
    // PROGRA
    // PROGRAM
    // PROGRAMM
    // PROGRAMMI
    // PROGRAMMIN
    // PROGRAMMING */



    let word = "PROGRAMMING";

    for (let i = 1; i <= word.length; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += word[j] + " ";
        }
        console.log(line.trim());
    }
    