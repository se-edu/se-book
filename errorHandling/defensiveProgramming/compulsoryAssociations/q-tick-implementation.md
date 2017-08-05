<panel header=":lock::key: Defensive Implementation">
<question>

This is a defensive implementation of the association.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/countryCity.png" height="150" />
<p/>

- [ ] a. True
- [ ] b. False

<div slot="answer">

- [ ] a. True
- [x] b. False

Explanation: While the design requires a City to be connected to exactly one Country, the code allows it to be connected to zero Country objects (by passing null to the setCountry() method).

</div>
</question>
</panel>
