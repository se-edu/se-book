<div id="title">

#### Association Classes

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of association classes</span>

<div id="body">

**An _association class_ represents additional information about an association.** It is a normal class but plays a special role from a design point of view.
 
<tip-box> 

{{ icon_example }} A `Man` class and a `Woman` class is linked with a ‘married to’ association and there is a need to store the date of marriage. However, that data is related to the association rather than specifically owned by either the `Man` object or the `Woman` object. In such situations, an additional association class can be introduced, e.g. a `Marriage` class, to store such information. 

</tip-box>

<panel type="seamless" src="../../../uml/classDiagrams/associationClasses/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Association Classes → What" alt="{{ icon_prereq }} UML/AssociationClasses" />

##### Implementing association classes

There is no special way to implement an association class. It can be implemented as a normal class that has variables to represent the endpoint of the association it represents. 

<tip-box>

{{ icon_example }} In the code below, the `Transaction` class is an association class that represent a transaction between a `Person` who is the seller and another `Person` who is the buyer. 

```java
class Transaction{
    
    //all fields are compulsory
    Person seller;
    Person buyer;
    Date date;
    String receiptNumber;
    
    Transaction (Person seller, Person buyer, Date date, String receiptNumber){
        //set fields
    }
}
```

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>