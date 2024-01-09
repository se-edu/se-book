<span id="title">Basic</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret sequence diagrams with basic notation</span>

<div id="body">

Notation:

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/notation.png" width="603"/>
<p/>

<box>

{{ icon_example }} This sequence diagram shows some interactions between a human user and the Text UI of a <tooltip content="Command Line Interface">CLI</tooltip> Minesweeper game.

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/playerText.png" width="250" />
<p/>

The player runs the `newgame` action on the `TextUi` object which results in the `TextUi` showing the minefield to the player. Then, the player runs the `clear x y` command; in response, the `TextUi` object shows the updated minefield.

</box>

The `:TextUi` in the above example denotes _an unnamed instance of the class TextUi_. If there were two instances of `TextUi` in the diagram, they can be distinguished by naming them e.g. `TextUi1:TextUi` and `TextUi2:TextUi`.

**Arrows representing method calls should be solid arrows while those representing method returns should be dashed arrows**.

Note that unlike in object diagrams, the **class/object name is not underlined in sequence diagrams**.

**The arrowhead style depends on the type of method call.** Arrows showing _synchronous_ (i.e., the caller method is blocked from doing anything else until the called method returns) should use _filled_ arrowheads (e.g., <img src="images\filled-arrowhead.png" width="40">). Most method calls (e.g., normal Java method calls) are synchronous.  _Asynchronous_ method calls (i.e., the caller method does not have to wait till the called method returns) are shown using _lined_ arrowheads (e.g., <img src="images\lined-arrowhead.png" width="40">). As the latter is out of scope for this textbook, all sequence diagram arrow heads you encournter in this textbook will be of the first type.
<box>

{{ icon_x_red }} **[Common notation error] Activation bar too long:** The activation bar of a method cannot start before the method call arrives and a method cannot remain active after the method has returned. %%In the two sequence diagrams below, the one on the left commits this error because the activation bar starts _before_ the method `Foo#xyz()` is called and remains active _after_ the method returns.%%

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/commonError-activationBarTooLong.png" height="120" />

{{ icon_x_red }} **[Common notation error] Broken activation bar:** The activation bar should remain unbroken while the method is being executed, from the point the method is called until the method returns. %%In the two sequence diagrams below, the one on the left commits this error because the activation bar for the method `Foo#abc()` is broken in the middle.%%

<pic eager src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/commonError-brokenActivationBar.png" height="120" />


</box>

</div>

<div id="extras">
</div>
