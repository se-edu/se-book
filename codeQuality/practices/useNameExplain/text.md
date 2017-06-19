<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Use Name to Explain

</div>

<div id="body">

A name is not just for differentiation; it should explain the named entity to the reader in an accurately and at a sufficient level of detail.

For example, `processStuff()` is a bad choice for a method; what 'stuff' and what 'process'?. On the other hand, `removeWhiteSpaceFromInput()` is a better choice. Other bad examples include `flag`, `temp`, `i` (unless used as a conventional control variable for a loop).

If the name has multiple words, they should be in a sensible order.

Imagine going to the doctor's and saying "My eye1 is swollen"! Don’t use numbers or case to distinguish names (`value1` vs `value2`, `Value` vs `value`) unless there is a strong justification.

<tip-box>

Example:

| ![][Bad]          | ![][Bad]          | ![][Good]                     |
| ----------------- | ----------------- | ----------------------------- |
|`value1`, `value2` | `value`, `Value`  | `originalValue`, `finalValue` |

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
