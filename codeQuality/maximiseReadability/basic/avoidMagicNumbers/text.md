<div id="title">

#### Avoid Magic Numbers

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: avoid magic numbers </span>

<div id="body">

When the code has a number that does not explain the meaning of the number, we call that a magic number (as in “the number appears as if by magic”). Using a <tooltip content="e.g., `PI`">_named constant_</tooltip> makes the code easier to understand because the name tells us more about the meaning of the number.

<tip-box>

{{ icon_example }} Example:

<div class="alt-java">

<include src="example-java.md" />

</div>
<div class="alt-python">

<include src="example-python.md" />

</div>

</tip-box>

Similarly, we can have ‘magic’ values of other data types.

<tip-box>

{{bad}}
```java
"Error 1432"  // A magic string!
```

</tip-box>


</div>

<div id="extras">
</div>