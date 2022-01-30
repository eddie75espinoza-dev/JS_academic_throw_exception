/*
Date> 29/1/2022
Dev: Eddie Espinoza


Write a function that recieves a key-value pair (for example: {3.5: 40})
where the key(in this case: 3.5) is the note and the value (in this case: 40)
is the percentage of the respective note.
The function returns an objects with two properties: 

- the total accumulated percentage that is the sum of the value, and
- the definitive accumulated academic note that is the sum of each
    product between key (the note) and value (percentage of the respective note).

Make sure that the input entered is fully correct with the validations needed.

Hints

Since the notes and percentages are entered in an object, the notes (keys)
must be all different.

Requirements

    -   Enter only an objetc (arrays are not allowed); the object is not
        permitted to be empty.
    -   Keys or values that are null, undefined or empty are not allowed.
    -   Keys must be a number in the range (0 <= value <= 5).
    -   Values must be integer numbers in the range (0 <= key <= 100).
    -   The total sum of percentage values must be a maximun of 100.
    -   Output is an object that contains 'accumulatedPercentage' and
        'accumulatedNote' properties.

Examples

    -   Case 1: Input is not an object (arrays are not allowed).
        For the input: 'academicNotes([{ 2.9: 40 }])'
        expected output: 'Not an Object'
    -   Case 2: Input is an empty object. For the Input:
        'academicNotes({})' Expected Output: 'Object is Empty'
    -   Case 3: Input has some null, undefined, empty or not a number as key.
        For the Input: 'academicNotes({2.9: 40, null: 30})' or 
        'academicNotes({undefined: 40, 3.1: 30})' or
        'academicNotes({2.9: 40, '': 30})' or 
        'academicNotes({'2.9x': 40, 3.1: 30})'
        Expected Output: 'Some key is Not a Number'
    -   Case 4: Input has some key out of range allowed.
        For the Input: 

input ->
let academicInput = { 
    4 : 40,
    3.8 : 40,
    2.2 : 20
};

Output ->
Initial solution - academicNotes
4 3.8 2.2
40 40 20
10
100
{accumulatedPercentage: 100, accumulatedNote: 3.56}

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


function UserException(message, name_error) {
    // permite controlar la excepcion de errores
    this.message = message;
    this.name = name_error;
}

/* Tanto 'typeof' como 'instanceof' no ofrecen un control riguroso y fiable sobre los tipos que podríamos necesitar durante un desarrollo. Para tratar de solucionar esta carencia, usamos algunas de las peculiaridades del lenguaje como el valor [[Class]], para conseguir un resultado mucho más preciso. */
const toType = (obj) => {return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()}

function academicNotes(objectNotes) {
    try {
        console.log('Initial solution - academicNotes')
        // Implement function
        if (Object.entries(objectNotes).length === 0) {
            // verifica si el objeto esta vacio
            throw new UserException('Object is Empty','Error')
        }
        if (toType(objectNotes) !== 'object') {
            // verifica si es distinto de un objeto, usar typeof no es preciso
            throw new UserException('Not an Object','Error')
        }

        if (typeof(objectNotes) == 'object') {
            const accumulatedNote = obj => Object.keys(obj).reduce((a, b) => parseFloat(a) + parseFloat(b));
            const accumulatedPercentage = obj => Object.values(obj).reduce((a, b) => a + b);
            const arrKeys = obj => Object.keys(obj);
            const arrValues = obj => Object.values(obj);
            
            // Una forma de validar el campo value del objeto
            for (const val in objectNotes) {
                if (Object.hasOwnProperty.call(objectNotes, val)) {
                    const element = objectNotes[val];
                    if (element <= 0 || element >= 100) {
                        throw new UserException('Some value is Out of Range allowed','Error')
                    }
                }
            } 
            
            // otra forma de validar el campo key del objeto
            arrKeys(objectNotes).forEach(element => {
                if (element <= 0 || element >= 5 || isNaN(element)) {
                    throw new UserException('Some key is Out of Range allowed','Error')
                } 
            });

            const totalKeysAcad = arrKeys(objectNotes).join(' ');  
            const totalValuesAcad = arrValues(objectNotes).join(' ');

            // Total Note Accumulated
            const totalNoteAcc = accumulatedNote(objectNotes);
            if (isNaN(totalNoteAcc)) {
                throw new UserException('Some key is Not a Number','Error')
            } 

            // Total Percentage
            const totalPercentage = accumulatedPercentage(objectNotes);
            if (isNaN(totalPercentage)) {
                throw new UserException('Some value is Not an Integer','Error')
            } else {
                if (totalPercentage > 100){
                    throw new UserException('Total sum of percentage values exceed the maximum allowed')
                }
            }

            console.log();
            console.log(totalKeysAcad );    // typeof string
            console.log(totalValuesAcad);   // typeof string
            console.log(totalNoteAcc);      // typeof number
            console.log(totalPercentage);   // typeof number

            // Final Note
            const note = Object.entries(objectNotes);
            let product = []            
            note.forEach(element => {
                product.push(parseFloat(element[0]) * (parseFloat(element[1])/100));
            });
            const finalProdNote = product.reduce((a, b) => parseFloat(a) + parseFloat(b));
            
            const res = {
                'accumulatedPercentage' : totalPercentage,
                'accumulatedNote' : finalProdNote
            }
        
        return res; // { accumulatedPercentage: 70, accumulatedNote: 2.09 } (Object as example)
        }
    } catch (error) {
        // throw new Error
        // 'Not an Object' ||         
        // 'Object is Empty' ||
        // 'Some key is Not a Number' ||    <!-null, undefined, empty, not a number-->
        // 'Some key is Out of Range allowed' ||
        // 'Some value is Not an Integer' ||    <!-null, undefined, empty, not a number, not an integer-->
        // 'Some value is Out of Range allowed' ||
        // 'Total sum of percentage values exceed the maximum allowed'
        console.log('error -> ', error.message);        
    }
}

export {
    academicNotes
};