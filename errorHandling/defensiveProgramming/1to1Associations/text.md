<div id="title">

#### Enforcing 1-to-1 Associations

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Error Handling → Defensive Programming → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use defensive coding to enforce 1-to-1 associations</span>

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