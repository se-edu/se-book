<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### SLAP Hard

</div>

<div id="body">

Avoid varying the level of abstraction within a code fragment.
Note: The _Productive Programmer_ (by Neal Ford) calls this the _SLAP principle_ i.e. Single Level of Abstraction Per method.

<tip-box>

Example:

![][Bad]
```java
readData();
salary = basic*rise+1000;
tax = (taxable?salary*0.07:0);
displayResult();
```

![][Good]
```java
readData();
processData();
displayResult();
```

</tip-box>

<tip-box type="primary">
<include src="../../../common/definitions.md#def-abstraction" />
</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
