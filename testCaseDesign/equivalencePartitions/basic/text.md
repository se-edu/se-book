<div id="title">

#### Basic

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply EP for pure functions</span>

<div id="body">

**Equivalence partitions (EPs) are usually derived from the specifications of the SUT.**  

<tip-box> 

{{ icon_example }} These could be EPs for the <trigger for="pop:epBasic-isValidMonth">isValidMonth</trigger> example:

* [MIN_INT ... 0] : **below** the range that produces `true` (produces `false`)
* [1 … 12] : the range that produces `true`
* [13 … MAX_INT] : **above** the range that produces `true` (produces `false`)

</tip-box>

<popover id="pop:epBasic-isValidMonth" title="`isValidMonth`" placement="top">
  <div slot="content">
    <include src="../what/text.md#isValidMonth" />
  </div>
</popover>

When the SUT has multiple inputs, you should identify EPs for each input. 

<tip-box> 

{{ icon_example }} Consider the method `duplicate(String s, int n): String` which returns a `String` that contains `s` repeated `n` times.

Example EPs for `s`:
* zero-length strings
* string containing whitespaces
* ...

Example EPs for `n`:
* `0`
* negative values
* ...

</tip-box>

An EP may not have adjacent values.

<tip-box> 

{{ icon_example }} Consider the method `isPrime(int i): boolean` that returns true if `i` is a prime number.

EPs for `i`:
* prime numbers
* non-prime numbers 

</tip-box>

Some inputs have only a small number of possible values and a potentially unique behavior for each value. In those cases we have to consider each value as a partition by itself.

<tip-box> 

{{ icon_example }} Consider the method `showStatusMessage(GameStatus s): String` that returns a unique `String` for each of the possible value of s (`GameStatus` is an `enum`). In this case, each possible value for `s` will have to be considered as a partition. 

</tip-box>

Note that the EP technique is merely a heuristic and not an exact science, especially when applied manually (as opposed to using an automated program analysis tool to derive EPs). The partitions derived depend on how one ‘speculates’ the SUT to behave internally. Applying EP under a glass-box or gray-box approach can yield more precise partitions.

<tip-box> 

{{ icon_example }} Consider the method EPs given above for the `isValidMonth`. A different tester might use these EPs instead:
* [1 … 12] : the range that produces `true`
* [all other integers] : the range that produces `false`

</tip-box>

<tip-box> 

{{ icon_example }} Some more examples:

<table class="table">
  <tr>
    <th>Specification</th>
    <th>Equivalence partitions</th>
  </tr>
  <tr>
  <td>
      
`isValidFlag(String s): boolean`<br>
Returns `true` if s is one of [`"F"`, `"T"`, `"D"`]. The comparison is case-sensitive.
      
  </td>
  <td>
      
[`"F"`] [`"T"`] [`"D"`] [`"f"`, `"t"`, `"d"`] [any other string][null]
      
  </td>
  </tr>
  <tr>
  <td>
      
`squareRoot(String s): int`<br>
Pre-conditions: s represents a positive integer<br>
Returns the square root of `s` if the square root is an integer; returns `0` otherwise.
      
  </td>
  <td>
      
[`s` is not a valid number] [`s` is a negative integer] [`s` has an integer square root] [`s` does not have an integer square root]
      
  </td>
  </tr>
</table>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>