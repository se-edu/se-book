<panel header="{{ icon_Q_A }} Matric numbers">
<question has-input="true">

Assume students are given matriculation number according to the following format:

[Faculty Alphabet] [Gender Alphabet] [Serial Number] [Check Alphabet]

E.g. CF1234X

The valid value(s) for each part of the matriculation number is given below:

**Faculty Alphabet:**

* Single capital alphabet
* Only 'C' to 'G' are valid

**Gender Alphabet:**

* Single capital alphabet
* Either 'F' or 'M' only

**Serial Number:**

* 4-digits number
* From 1000 to 9999 only

**Check Alphabet:**

* Single capital alphabet
* Only 'K', 'H', 'S', 'X' and 'Z' are valid

Assume you are testing the operation isValidMatric(String matric):boolen. Identify equivalence partitions and boundary values for the matriculation number.

<div slot="answer">

String length: (less than 7 characters), (7 characters), (more than 7 characters)

For those with 7 characters,

* [Faculty Alphabet]: (‘C’, ‘G’), (‘c’, ‘g’), (any other character)
* [Gender Alphabet]: (‘F’, ‘M’), (‘f’, ‘m’), (any other character)
* [Serial Number]: (1000-9999), (0000-0999), (any other 4- characters string)
* [Check Alphabet]: ('K', 'H', 'S', ‘X’, 'Z'), ('k', 'h', ’s’, ‘x’, 'z'), (any other character)

</div>
</question>
</panel>
