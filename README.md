# JS_academic_throw_exception

Manejo de excepciones en JS
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
    -   Case 4: Input has some value out of range allowed.
        For the Input: 'academicNotes({2.9: 40, 3.1: 'e'})'
        Expected Output: 'Some value is Not a Number'
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
