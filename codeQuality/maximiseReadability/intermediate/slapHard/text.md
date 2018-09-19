<div id="title">

#### SLAP Hard

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: SLAP hard </span>

<div id="body">

Avoid varying the level of <trigger trigger="click" for="modal:slap-abstraction">abstraction</trigger> within a code fragment.
Note: The _Productive Programmer_ (by Neal Ford) calls this the _SLAP principle_ i.e. Single Level of Abstraction Per method.

<tip-box>

Example:

{{bad}}
```java
readData();
salary = basic*rise+1000;
tax = (taxable?salary*0.07:0);
displayResult();
```

{{good}}
```java
readData();
processData();
displayResult();
```

</tip-box>

<modal title="" id="modal:slap-abstraction">
  <include src="../../../../designFundamentals/abstraction/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>


</div>

<div id="extras">
</div>