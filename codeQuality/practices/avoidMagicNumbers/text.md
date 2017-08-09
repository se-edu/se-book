<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Avoid Magic Numbers

</div>

<div id="body">

When the code has a number that does not explain the meaning of the number, we call that a magic number (as in “the number appears as if by magic”).

<tip-box>

Example:

| ![][Bad]           | ![][Good]              |
| ------------------ |------------------------|
| `return 3.14236;`  |          `return PI`   |     
|   `return 9`       | `return MAX_SIZE-1`    |

</tip-box>

As you can see, using a named constant makes the code easier to understand because the name tells us more about the meaning of the number.
Similarly, we can have ‘magic’ values of other data types.

<tip-box>

![][Bad]
```java
return “Error 1432”;  // A magic string!
```

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
