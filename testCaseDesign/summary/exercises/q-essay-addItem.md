<panel header="{{ icon_Q_A }} add(Item)">
<question has-input="true">

Assume you are testing the add(Item) method specified below.

<img src="{{baseUrl}}/testCaseDesign/summary/exercises/images/itemList.png" height="100" />
<p/>

Assume i to be the Item being added.

**Preconditions:**

* i != null [throws InvalidItemException if i == null ]
* contains(i) == false [throws DuplicateItemException if contains(i) == true]
* count() < 10 [throws ListFullException if count() == 10]

**Postconditions:**

* contains(i) == true;
* new count() == old count()+1

**Invariants:** (an “invariant” is true before and after the method invocation).

* 0 < = count() < = 10

(a) What are the equivalence partitions relevant to testing the add(Item) method?

(b) What are the boundary and non-boundary values you will use to test the add(Item) method?

(c) Design a set of test cases to test the add(Item) method by considering the equivalence partitions and boundary values from your answers to (a) and (b) above.  

<div slot="answer">

(a)

i: i != null, i == null
list: contains(i)==true, contains(i)==false, count() < 10, count() == 10
list == null should NOT be considered.

(b)

list: count() == 0, count() == 9, count() == 10; count() == [1|2|3|4|5|6|7|8] (1 preferred)

(c)

<img src="{{baseUrl}}/testCaseDesign/summary/exercises/images/count.png" height="250" />
<p/>

</div>
</question>
</panel>
