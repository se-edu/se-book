<div id="title">

#### Overriding

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} OOP → Inheritance → What%%" /></span>

<span id="outcomes">{{glyphicon_flag}} Can explain method overriding</span>

<div id="body">

**Method _overriding_ is when a sub-class changes the behavior inherited from the parent class** by re-implementing the method. Overridden methods have the same name, same type signature, and same return type.

<tip-box>

{{ icon_example }} In a case where `EvaluationReport` class inherits the `Report` class, 
* `Report#print()` method is overridden by `EvaluationReport#print()` method.
* `Report#write(String)` method is overridden by `EvaluationReport#write(String)` method.
* `Report#read():String` method is **NOT** overridden by `EvaluationReport#read(int):String` method. %%&nbsp;Reason: the two methods have different signatures; `EvaluationReport#read(int):String` <trigger trigger="click" for="modal:overriding-overloading"> _overloads_ </trigger> (rather than overrides) the `Report#read():String` method.%%
 
<modal title="**Overloading**" id="modal:overriding-overloading">
  <include src="../overloading/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

</tip-box>

##### <big>Implementing overriding</big>

**To override a method inherited from an ancestor class, simply re-implement the method in the target class.** 

<tabs> 
  <tab header="Java">

<include src="text-java.fr" />

  </tab>
  <tab header="Python">

<include src="text-python.fr" />

</tab>
</tabs><hr>
</div>

<div id="extras">
  <include src="exercises.fr" />
</div>