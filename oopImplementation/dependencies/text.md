<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming →</div>

<div id="title">

#### Dependencies :two:

</div>

<div id="body">

Dependencies result from interactions between objects that do not result in a long-term link between the said objects.

<tip-box>

Example:

```java
class TaxProcessor{
    double rate;

    void addTax(Taxable t){
        t.addTax(rate);
    }
}
```

The code above results in this dependency.

<img src="{{baseUrl}}/oopImplementation/dependencies/images/taxProcessorTaxable.png" height="40" />
<p/>

The code does not indicate an association between the two classes because the `TaxProcessor` object does not keep the `Taxable` object (i.e. it’s only a short-term interaction)

</tip-box>

</div>

<div id="extras">
</div>

</div>
