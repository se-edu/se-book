<panel header="{{ icon_Q_A }} Exhaustive testing in Minesweeper">

Explain why exhaustive testing is not practical using the example of testing the `newGame()` operation in the `Logic` class of a Minesweeper game.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

Consider this sequence of test cases:

* Test case 1. Start Minesweeper. Activate `newGame()` and see if it works.
* Test case 2. Start Minesweeper. Activate `newGame()`. Activate `newGame()` again and see if it works.
* Test case 3. Start Minesweeper. Activate `newGame()` three times consecutively and see if it works.
* …
* Test case 267. Start Minesweeper. Activate `newGame()` 267 times consecutively and see if it works.

Well, you get the idea. Exhaustive testing of `newGame()` is not practical.

</panel>
</panel>
