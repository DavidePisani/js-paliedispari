// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedere una parola all'utente 

    let userWord = prompt('Dimmi una parola e ti dirò se è palindroma o meno');
    console.log(userWord)
    
   let result = palindromWord(userWord);
    console.log (result)

    if(result === true){
        alert('La parola è PALINDROMA')
    }else{
        alert('La parola non è PALINDROMA')
    }


    // creo la funzione per capire se è palindroma
    
    function palindromWord (checkWord) {
        let word = false
        // creo una flag dove inserisco la parola al contrario 
        let backWord = '';
    // scorro la parola data dall'utente al contrario
        for(let i = checkWord.length - 1; i >= 0; i--) {
        //inserisco la parola al contrario 
            backWord += checkWord[i]
        }
        // controllo se le due parole sono uguali 
        if( checkWord == backWord) {   
            word = true;
        }

        console.log(backWord)

        return(word)
    }

    
