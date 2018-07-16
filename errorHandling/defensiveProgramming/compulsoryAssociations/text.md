<div id="title">

#### Enforcing Compulsory Associations

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Error Handling → Defensive Programming → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use defensive coding to enforce compulsory associations</span>

<div id="body">

Consider two classes, `Account` and `Guarantor`, with an association as shown in the following diagram:

<tip-box>

Example:

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/accountGuarantor.png" height="50" />
<p/>

Here, the association is compulsory i.e. an `Account` object should always be linked to a `Guarantor`. One way to implement this is to simply use a reference variable, like this:

```java
class Account {
    Guarantor guarantor;

    void setGuarantor(Guarantor g) {
        guarantor = g;
    }
}
```

However, what if someone else used the `Account` class like this?

```java
Account a = new Account();
a.setGuarantor(null);
```

This results in an `Account` without a `Guarantor`! In a real banking system, this could have serious consequences! The code here did not try to prevent such a thing from happening. We can make the code more defensive by proactively enforcing the multiplicity constraint, like this:

```java
class Account {
    private Guarantor guarantor;

    public Account(Guarantor g){
        if (g == null) {
            stopSystemWithMessage("multiplicity violated. Null Guarantor");
        }
        guarantor = g;
    }
    public void setGuarantor (Guarantor g){
        if (g == null) {
            stopSystemWithMessage("multiplicity violated. Null Guarantor");
        }
        guarantor = g;
    }
    …
}
```

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>