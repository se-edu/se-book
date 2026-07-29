{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">SLAP hard</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: SLAP hard </span>

<div id="body">

**Avoid having multiple levels of <trigger trigger="click" for="modal:slap-abstraction">abstraction</trigger> within a code fragment.**
Note: The book _The Productive Programmer_ (by Neal Ford) calls this the {{ show_term("Single Level of Abstraction Principle") }} (SLAP) %%while the book _Clean Code_ (by Robert C. Martin) calls this _One Level of Abstraction per Function_%%.

{% call show_example() %}
Two levels of abstraction mixed within one code fragment:

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
{% endcall %}

<modal large header="" id="modal:slap-abstraction">
  <include src="../../../../designFundamentals/abstraction/what/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

**Also ensure that the code is written at the highest level of abstraction possible**.
{% call show_example() %}
The same logic written at a low level of abstraction, and at a higher one:

{{bad}} (all statements are at low levels of abstraction)
```java
low-level statement A1
low-level statement A2
low-level statement A3
low-level statement B1
low-level statement B2
if condition X :
    low-level statement C1
    low-level statement C2
```

{{good}} (all statements are at the same high level of abstraction)
```java
high-level step A
high-level step B
if condition X:
  high-level step C
```
{% endcall %}

**That said, it is sometimes possible to pack _two_ levels of abstraction into the code** without affecting readability that much, provided each step in the higher-level logic is clearly marked using comments and separated (e.g., using a blank line) from adjacent steps.

{% call show_example() %}
The following pseudocode packs two levels of abstraction, with each higher-level step marked by a comment and separated by a blank line.

```{.java highlight-lines="1,6,11"}
//high-level step A
low-level statement A1
low-level statement A2
low-level statement A3

//high-level step B
low-level statement B1
low-level statement B2

if condition X :
    //high-level step C
    low-level statement C1
    low-level statement C2
```
{% endcall %}
</div>

<div id="extras">
</div>
