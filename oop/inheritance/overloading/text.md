<div id="title">

#### Overloading

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain method overloading</span>

<div id="body">

**Method overloading is when there are multiple methods with the same name but different type signatures.** Overloading is used to indicate that multiple operations do similar things but take different parameters. 

<tip-box type="primary">

<include src="../../../common/definitions.md#def-type-signature" />

</tip-box>

<tip-box>

{{ icon_example }} In the case below, the `calculate` method is overloaded because the two methods have the same name but different type signatures `(String)` and `(int)`

* `calculate(String): void`
* `calculate(int): void`


</tip-box>

##### <big>Implementing overloading</big>

An operation can be overloaded inside the same class or in sub/super classes.
<div class="alt-java">
  <include src="text-java.fr" />
</div>
<div class="alt-python">
  <include src="text-python.fr" />
</div>

</div>

<div id="extras">
</div>