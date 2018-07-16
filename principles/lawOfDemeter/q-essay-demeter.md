<panel header="{{ icon_Q_A }} Examples for LoD">
<question has-input="true">

Explain the Law of Demeter using code examples. You are to make up your own code examples. Take Minesweeper as the basis for your code examples.

<div slot="answer">

Let us take the `Logic` class as an example.  Assume that it has the following operation.

`setMinefield(Minefiled mf):void`

Consider the following that can happen inside this operation.

* `mf.init();`: this does not violate LoD since LoD allows calling operations of parameters received.
* `mf.getCell(1,3).clear();`: //this violates LoD because `Logic` is handling `Cell` objects deep inside `Minefield`. Instead, it should be `mf.clearCellAt(1,3);`
* `timer.start();`: //this does not violate LoD because `timer` appears to be an internal component (i.e. a variable) of `Logic` itself.
* `Cell c = new Cell();` `c.init();`: // this does not violate LoD because `c` was created inside the operation.

</div>
</question>
</panel>
