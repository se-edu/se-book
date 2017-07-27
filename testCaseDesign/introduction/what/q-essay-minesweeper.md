<panel header=":lock::key: Explain the why exhaustive testing is not possible using the newGame operation of the Logic class in the Minesweeper case study as an example.">
<question has-input="true">

Explain the why exhaustive testing is not possible using the newGame operation of the Logic class in the Minesweeper case study as an example.

<div slot="answer">

Consider this sequence of test cases:

* Test case 1. Start Minesweeper. Activate newGame() and see if it works.
* Test case 2. Start Minesweeper. Activate newGame(). Activate newGame() again and see if it works.
* Test case 3. Start Minesweeper. Activate newGame() three times consecutively and see if it works.
* …
* Test case 267. Start Minesweeper. Activate newGame() 267 times consecutively and see if it works.

Well, you get the idea. Exhaustive testing of newGame() is not possible.

</div>
</question>
</panel>
