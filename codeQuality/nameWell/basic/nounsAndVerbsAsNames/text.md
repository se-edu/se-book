<div id="title">

#### Use Nouns for Things and Verbs for Actions

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: use nouns for things and verbs for actions </span>

<div id="body">

>{{ fas_quote_left }} Every system is built from a domain-specific language designed by the programmers to describe that system. Functions are the verbs of that language, and classes are the nouns. <sub>― Robert C. Martin, _Clean Code: A Handbook of Agile Software Craftsmanship_</sub>

**Use nouns for classes/variables and verbs for methods/functions.**

<tip-box>

Examples:

Name for a | {{bad}}        | {{good}}
-----------|-----------------|----------------
Class      |`CheckLimit`     | `LimitChecker`           
method     |`result()`       | `calculate()`  

</tip-box>


**Distinguish clearly between single-valued and multivalued variables.**

<tip-box>

{{ icon_example }} Examples:

<div class="alt-java">

{{good}}
```java
Person student;
ArrayList<Person> students;
```
</div>
<div class="alt-python">

{{good}}
```python
student = Person('Jim')
students = [Person('Jim'), Person('Alice')]
```
</div>

</tip-box>

</div>

<div id="extras">
</div>