<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Use Nouns for Things and Verbs for Actions

</div>

<div id="body">

**Use nouns for classes/variables and verbs for methods/functions.**

<tip-box>

Examples:

Name for a | ![][Bad]        | ![][Good]
-----------|-----------------|----------------
Class      |`CheckLimit`     | `LimitChecker`           
method     |`result()`       | `calculate()`  

</tip-box>


**Distinguish clearly between single-valued and multivalued variables.**

<tip-box>

:package: Examples:

<tabs> 
  <tab header="Java">

![][Good]
```java
Person student;
ArrayList<Person> students;
```
  </tab>
  <tab header="Python">

![][Good]
```python
student = Person('Jim')
students = [Person('Jim'), Person('Alice')]
```
</tab>
</tabs><hr>



</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
