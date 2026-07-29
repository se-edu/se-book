{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Avoid magic numbers</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: avoid magic numbers </span>

<div id="body">

**Avoid {{ show_term("magic numbers") }}** in your code. When the code has a number that does not explain the meaning of the number, it is called a "magic number" (as in "the number appears as if by magic"). Using a {{ show_term("named constant", "e.g., `PI`") }} makes the code easier to understand because the name tells us more about the meaning of the number.

{% call show_example() %}
Replacing magic numbers with named constants:

<div class="alt-java">

<include src="example-java.md" />

</div>
<div class="alt-python">

<include src="example-python.md" />

</div>
{% endcall %}

Similarly, you can have ‘magic’ values of other data types.

{% call show_example() %}
A magic string:

{{bad}}

<div class="alt-java">

```java{.no-line-numbers}
return "Error 1432"; // A magic string!
```

</div>
<div class="alt-python">

```python{.no-line-numbers}
return "Error 1432" # A magic string!
```

</div>
{% endcall %}

**Avoid any _magic literals_** in general, not just magic numbers.
</div>

<div id="extras">
</div>
