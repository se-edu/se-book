<span id="title">Use name to explain</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: use name to explain </span>

<div id="body">

**A name is not just for differentiation; it should explain the named entity to the reader accurately and at a sufficient level of detail.**

<box>

| {{bad}}          |  {{good}}                     |
| ----------------- |  ----------------------------- |
|`processInput()`  (what 'process'?) |  `removeWhiteSpaceFromInput()` |
|`flag`   |  `isValidInput` |
|`temp`   |   |

</box>

**If a name has multiple words, they should be in a sensible order.**

<box>

| {{bad}}        |  {{good}}       |
| --------------- |  --------------- |
|`bySizeOrder()`  |  `orderBySize()` |

</box>

Imagine going to the doctor's and saying "My eye1 is swollen"! Don’t use numbers or case to distinguish names.

<box>

| {{bad}}          | {{bad}}          | {{good}}                     |
| ----------------- | ----------------- | ----------------------------- |
|`value1`, `value2` | `value`, `Value`  | `originalValue`, `finalValue` |

</box>


</div>

<div id="extras">
</div>
