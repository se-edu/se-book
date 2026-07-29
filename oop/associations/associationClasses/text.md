{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Association classes</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of association classes</span>

<div id="body">

**An {{ show_term("association class") }} represents additional information about an association.** It is a normal class but plays a special role from a design point of view.<br>
{{ label_example }} %%A `Man` class and a `Woman` class are linked with a ‘married to’ association and there is a need to store the date of marriage. However, that data is related to the association rather than specifically owned by either the `Man` object or the `Woman` object. In such situations, an additional association class can be introduced, e.g., a `Marriage` class, to store such information.%%

##### Implementing association classes

There is no special way to implement an association class. It can be implemented as a normal class that has variables to represent the endpoints of the association it represents.

{% call show_example() %}
In the code below, the `Transaction` class is an association class that represents a transaction between a `Person` who is the seller and another `Person` who is the buyer.

```java
class Transaction {

    //all fields are compulsory
    Person seller;
    Person buyer;
    Date date;
    String receiptNumber;

    Transaction(Person seller, Person buyer, Date date, String receiptNumber) {
        //set fields
    }
}
```
{% endcall %}

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
