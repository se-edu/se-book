<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Overriding :one:

</div>

<div id="body">

**Method _overriding_ is when a sub-class changes the behavior inherited from the parent class** by re-implementing the method. Overridden methods have the same name, same type signature, and same return type.

<tip-box>

:package: In the diagram below, 
* `Report#print()` method is overridden by `EvaluationReport#print()` method.
* `Report#write(String)` method is overridden by `EvaluationReport#write(String)` method.
* `Report#read():String` method is **NOT** overridden by `EvaluationReport#read(int):String` method. %%&nbsp;Reason: the two methods have different signatures; `EvaluationReport#read(int):String` <trigger trigger="click" for="modal:overriding-overloading"> _overloads_ </trigger> (rather than overrides) the `Report#read():String` method.%%
 
<modal title="**Overloading**" id="modal:overriding-overloading">
  <include src="../overloading/full.md"/>
</modal>

<img src="{{baseUrl}}/oopDesign/inheritance/overriding/images/report.png" height="150" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
