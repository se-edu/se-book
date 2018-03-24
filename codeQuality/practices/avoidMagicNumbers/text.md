<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Avoid Magic Numbers

</div>

<div id="body">

When the code has a number that does not explain the meaning of the number, we call that a magic number (as in “the number appears as if by magic”). Using a <tooltip content="e.g., `PI`">_named constant_</tooltip> makes the code easier to understand because the name tells us more about the meaning of the number.

<tip-box>

:package: Example:

<tabs> 
  <tab header="Java">

<include src="example-java.md" />

  </tab>
  <tab header="Python">

<include src="example-python.md" />

</tab>
</tabs><hr>

</tip-box>

Similarly, we can have ‘magic’ values of other data types.

<tip-box>

![][Bad]
```java
"Error 1432"  // A magic string!
```

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
