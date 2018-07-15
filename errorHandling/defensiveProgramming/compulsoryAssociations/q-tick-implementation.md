<panel header="{{ icon_Q_A }} Is this defensive?">
<question>

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/countryCity.png" height="45" />
<p/>

```java
class City{
    Country country;
    
    void setCountry(Country country){
        this.country = country;
    }
}
```
This is a defensive implementation of the association.

- ( ) True
- ( ) False

<div slot="answer">

False

Explanation: While the design requires a City to be connected to exactly one Country, the code allows it to be connected to zero Country objects (by passing null to the setCountry() method).

</div>
</question>
</panel>
