<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Avoid Complicated Expressions

</div>

<div id="body">

Avoid complicated expressions, especially those having many negations and nested parentheses. If you must evaluate complicated expressions, have it done in steps (i.e. calculate some intermediate values first and use them to calculate the final value).

<tip-box>

Example: 

![][Bad]
```java
return ((length < MAX_LENGTH) || (previousSize != length)) && (typeCode == URGENT);
```

![][Good]
```java

boolean isWithinSizeLimit = length < MAX_LENGTH;
boolean isSameSize = previousSize != length;
boolean isValidCode = isWithinSizeLimit || isSameSize;

boolean isUrgent = typeCode == URGENT;

return isValidCode && isUrgent;
```

</tip-box>

> The competent programmer is fully aware of the strictly limited size of his own skull; therefore he approaches the programming task in full humility, and among other things he avoids clever tricks like the plague. <sub>-- Edsger Dijkstra</sub>


</div>

</div>
