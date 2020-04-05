<span id="title">SLAP Hard</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: SLAP hard </span>

<div id="body">

Avoid varying the level of <trigger trigger="click" for="modal:slap-abstraction">abstraction</trigger> within a code fragment.
Note: The _Productive Programmer_ (by Neal Ford) calls this the _SLAP principle_ i.e. Single Level of Abstraction Per method.

<box>

Example:

{{bad}} (`readData();` and `salary = basic*rise+1000;` are at different levels of abstraction)
```java
readData();
salary = basic*rise+1000;
tax = (taxable?salary*0.07:0);
displayResult();
```

{{good}} (all statements are at the same level of abstraction)
```java
readData();
processData();
displayResult();
```

</box>

<modal title="" id="modal:slap-abstraction">
  <include src="../../../designFundamentals/abstraction/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>


</div>

<div id="extras">

<include src="exercises.md" />

</div>