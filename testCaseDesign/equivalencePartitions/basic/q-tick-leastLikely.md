<panel header="{{ icon_Q_A }} EPs for `isValidName` method">
<question>

Consider this SUT:

<tip-box>

`isValidName (String s): boolean`

Description: returns true if `s` is not `null` and not longer than 50 characters.

</tip-box>

A. Which one of these is least likely to be an equivalence partition for the parameter s of the isValidName method given below?

- ( ) a. null.
- ( ) b. strings having more than 50 characters.
- ( ) c. strings having 50 or fewer characters.
- ( ) d. strings consisting of numbers instead of letters.

B. If you had to choose 3 test cases from the 4 given below, which one will you leave out based on the EP technique?

- ( ) a. A string that is 50 characters long
- ( ) b. A string that is 51 characters long
- ( ) c. A string that is 40 characters long
- ( ) d. null

<div slot="answer">

A. (d)

Explanation: The description does not mention anything about the content of the string. Therefore, the method is unlikely to behave differently for strings consisting of numbers.

B. (a) or (c)

Explanation: both belong to the same EP

</div>
</question>
</panel>
