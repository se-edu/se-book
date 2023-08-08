<span id="title">SLAP hard</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: SLAP hard </span>

<div id="body">

**Avoid having multiple levels of <trigger trigger="click" for="modal:slap-abstraction">abstraction</trigger> within a code fragment.**
Note: The book _The Productive Programmer_ (by Neal Ford) calls this the _Single Level of Abstraction Principle_ (SLAP) %%while the book _Clean Code_ (by Robert C. Martin) calls this _One Level of Abstraction per Function_%%.

<box>

{{bad}} (`readData();` and `salary = basic * rise + 1000;` are at different levels of abstraction)
```java
readData();
salary = basic * rise + 1000;
tax = (taxable ? salary * 0.07 : 0);
displayResult();
```

{{good}} (all statements are at the same level of abstraction)
```java
readData();
processData();
displayResult();
```

</box>

<modal large header="" id="modal:slap-abstraction">
  <include src="../../../../designFundamentals/abstraction/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

**That said, it is sometimes possible to pack _two_ levels of abstraction into the code** without affecting readability that much, provided each step in the higher-level logic is clearly marked using comments and separated (e.g., using a blank line) from adjacent steps.

<box>

{{ icon_example }} Example: The following pseudocode has two levels of abstraction.
```{.java highlight-lines="1,6,10"}
//high-level step A
low-level statement A1
low-level statement A2
low-level statement A3

//high-level step B
low-level statement B1
low-level statement B2

//high-level step C
low-level statement C1
low-level statement C2
```
</box>
</div>

<div id="extras">
</div>
