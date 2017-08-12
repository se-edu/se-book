<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Use Name to Explain

</div>

<div id="body">

**A name is not just for differentiation; it should explain the named entity to the reader in an accurately and at a sufficient level of detail.**

<tip-box>

Examples:

| ![][Bad]          |  ![][Good]                     |
| ----------------- |  ----------------------------- |
|`processInput()`  (what 'process'?) |  `removeWhiteSpaceFromInput()` |
|`flag`   |  `isValidInput` |
|`temp`   |   |

</tip-box>

**If the name has multiple words, they should be in a sensible order.**

<tip-box>

Examples:

| ![][Bad]        |  ![][Good]       |
| --------------- |  --------------- |
|`bySizeOrder()`  |  `orderBySize()` |

</tip-box>

Imagine going to the doctor's and saying "My eye1 is swollen"! Don’t use numbers or case to distinguish names.

<tip-box>

Examples:

| ![][Bad]          | ![][Bad]          | ![][Good]                     |
| ----------------- | ----------------- | ----------------------------- |
|`value1`, `value2` | `value`, `Value`  | `originalValue`, `finalValue` |

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
