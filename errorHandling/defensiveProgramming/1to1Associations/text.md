<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Enforcing 1-to-1 Associations :three:

</div>

<div id="body">

Consider the association given below. A defensive implementation requires to ensure a `MinedCell` cannot exist without a `Mine` and vice versa which requires simultaneous object creation. However, Java can only create one object at a time. Given below are two alternatives implementations, both of which violate the multiplicity for a short period of time.


<img src="{{baseUrl}}/errorHandling/defensiveProgramming/1to1Associations/images/minedCell.png" height="50" />
<p/>

Option 1:
```java
class MinedCell {
    private Mine mine;

    public MinedCell(Mine m){
        if (m == null) {
            showError();
        }
        mine = m;
    }
    …
}
```

Option 1 forces us to keep a `Mine` without a `MinedCell` (until the `MinedCell` is created).

Option 2:
```java
class MinedCell {
    private Mine mine;

    public MinedCell(){
        mine = new Mine();
    }
    …
}
```

Option 2 is more defensive because the `Mine` is immediately linked to a `MinedCell`.

</div>

<div id="extras">
</div>

</div>
