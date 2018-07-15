<panel header="{{ icon_Q_A }} Immutable `Account` class">
<question has-input="true">

Give a suitable defensive implementation to the `Account` class in the following class diagram. Note that “{immutable}” means once the association is formed, it cannot be changed.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/accountGuarantorImmutable.png" height="80" />
<p/>

<div slot="answer">

```java
class Account {
    private Guarantor myGuarantor; // should not be public

    public Account(Guarantor g){
        if (g==null) {
            haltWithErrorMessage(“Account must have a guarantor”);
        }
        myGuarantor = g;
    }
    // there should not be a setGuarantor method
}
```

</div>
</question>
</panel>
