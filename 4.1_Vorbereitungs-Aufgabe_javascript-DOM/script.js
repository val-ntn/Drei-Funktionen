// String umkehren
function aufgabe1(str) {
    let strReversed = '';
    for (let i=str.length-1; i>=0; i--) {
        strReversed += str[i];
    }
    return strReversed;
}

// Schaltjahr
function aufgabe2(year) {
    if( year % 4 === 0) {
        if(year % 100 !== 0 || year % 400 === 0 ){
            return true;
        }
    }
    return false;
}

//Pangramm
function aufgabe3(str) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (letterAlphabet in alphabet) {
        if (str.toLocaleLowerCase().indexOf(alphabet[letterAlphabet]) === -1) {
            return false;
            }
        }
    return true;
    }

