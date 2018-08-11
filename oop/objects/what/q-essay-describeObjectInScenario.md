<panel header="{{ icon_Q_A }} Describe objects in the given scenario">
<question has-input="true">

Consider the following real-world scenario.

<tip-box>

Tom read a Software Engineering textbook (he has been assigned to read the book) and highlighted some of the text in it.
  
</tip-box>

Explain the following statements about OOP using the above scenario as an example.

1. Object Oriented Programming (OOP) views the world as a network of interacting objects.
2. Every object has both state (data) and behavior (operations on data).
3. Every object has an interface and an implementation.
4. Objects interact by sending messages.
5. OOP does not demand that the virtual world object network follow the real world exactly.



<div slot="answer">

>[1] Object Oriented Programming (OOP) views the world as a network of interacting objects.

Interacting objects in the scenario: `Tom`, `SE Textbook` (`Book` for short), `Text`, (possibly) `Highlighter`
 
:bulb: objects usually match nouns in the description

>[2]Every object has both state (data) and behavior (operations on data).

Object | Examples of state | Examples of behavior
------ | ----------------- | --------------------
`Tom` | memory of the text read | read
`Book` | title | show text
`Text` | font size | get highlighted

>[3] Every object has an interface and an implementation.

* Interface of an object consists of how other objects interact with it i.e., what other objects can do to that object
* Implementation consist of internals of the object that facilitate the interactions but not visible to other objects.

Object | Examples of interface | Examples of implementation
------ | ----------------- | --------------------
`Tom` | receive reading assignment | understand/memorize the text read, remember the reading assignment
`Book` | show text, turn page | how pages are bound to the spine
`Text` | read | how characters/words are connected together or fixed to the book

>[4] Objects interact by sending messages.

Examples:

* `Tom` sends message `turn page` to the `Book`
* `Tom` sends message `show text` to the `Book`. When the `Book` shows the `Text`, `Tom` sends the message `read` to the `Text` which returns the text content to `Tom`.
* `Tom` sends message `highlight` to the `Highlighter` while specifying which `Text` to highlight. Then the `Highlighter` sends the message `highlight` to the specified `Text`.

>[5] OOP does not demand that the virtual world object network follow the real world exactly.

Examples:

* A virtual world simulation of the above scenario can omit the `Highlighter` object. Instead, we can teach `Text` to highlight themselves when requested.

</div>

</question>
</panel>
