<panel header="{{ icon_Q_A }} What did this interpretation assume?">

A requirements document for a library system contains this requirement:

`Members should be able to renew a borrowed book.`

Someone hands it over and gets back a confident, working implementation, described like this:

>Renewal extends the due date by another loan period. A member can renew a book any number of times, from the member's account page, at any point before the due date.

Name the decisions this interpretation made that the requirement never stated, and write one acceptance criterion that would have prevented each of them.

<panel type="seamless" header="Hint" minimized>

Ask what a librarian would object to, rather than what a programmer would.

</panel>
<panel type="seamless" header="{{ icon_A }} Answer" minimized>

At least three decisions were made silently:

* **Renewals are unlimited.** Most libraries cap them. `A book may be renewed at most twice in a row.`
* **A book can be renewed even if someone else is waiting for it.** `A book with an outstanding reservation cannot be renewed.`
* **Renewal is not possible after the due date.** That may be right, or overdue books may be renewable with a fine. `An overdue book cannot be renewed until the outstanding fine is paid.`

Note what fixing this is not: no amount of thinking harder about the requirement produces these answers, because they are not in it. They are decisions the library has to make, and the only way to settle them is to ask.

</panel>
</panel>
