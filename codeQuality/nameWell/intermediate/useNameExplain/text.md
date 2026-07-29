{% from "common/macros.njk" import show_example with context %}
<span id="title">Use name to explain</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: use name to explain </span>

<div id="body">

**A name is not just for differentiation; it should explain the named entity to the reader accurately and at a sufficient level of detail.**

{% call show_example() %}
Names that explain, at a sufficient level of detail:

| {{bad}}          |  {{good}}                     |
| ----------------- |  ----------------------------- |
|`processInput()`  (what 'process'?) |  `removeWhiteSpaceFromInput()` |
|`flag`   |  `isValidInput` |
|`temp`   |   |
{% endcall %}

**If a name has multiple words, they should be in a sensible order.**

{% call show_example() %}
Word order within a name:

| {{bad}}        |  {{good}}       |
| --------------- |  --------------- |
|`bySizeOrder()`  |  `orderBySize()` |
{% endcall %}

Imagine going to the doctor's and saying "My eye1 is swollen"! Don’t use numbers or case to distinguish names.

{% call show_example() %}
Names distinguished only by a number or by case:

| {{bad}}          | {{bad}}          | {{good}}                     |
| ----------------- | ----------------- | ----------------------------- |
|`value1`, `value2` | `value`, `Value`  | `originalValue`, `finalValue` |
{% endcall %}


</div>

<div id="extras">
</div>
