<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Refactoring → </div>

<div id="title">

#### What :one:

</div>

<div id="body">

The first version of the code you write may not be of production quality. It is OK to first concentrate on making the code work, rather than worry over the quality of the code, as long as you improve the quality later. This process of **improving a program's internal structure in small steps without modifying its external behavior is called _refactoring_.**

* **Refactoring is not rewriting**: Discarding poorly-written code entirely and re-writing it from scratch is not refactoring because refactoring needs to be done in small steps.
* **Refactoring is not bug fixing**: By definition, refactoring is different from bug fixing or any other modifications that alter the external behavior (e.g. adding a feature) of the component in concern.

<tip-box>

:bulb: Improving code structure can have many secondary benefits: e.g.
 * hidden bugs become easier to spot
 * improve performance (sometimes, simpler code runs faster than complex code because simpler code is easier for the compiler to optimize). 

</tip-box>

Given below are two common refactorings (<trigger trigger="click" for="modal:refactoring-catalog-what">more</trigger>).

<modal title="**Refactoring Catalogs**" id="modal:refactoring-catalog-what">
  <include src="../../common/references.md#refactoring-catalog"/>
</modal>

<tip-box>

Refactoring Name: **Consolidate Duplicate Conditional Fragments**

Situation:  The same fragment of code is in all branches of a conditional expression.

Method: Move it outside of the expression.

:package: Example:

<tabs> 
  <tab header="Java">

<include src="example-consolidate-java.md" />

  </tab>
  <tab header="Python">

<include src="example-consolidate-python.md" />

</tab>
</tabs><hr>

</tip-box>

<tip-box>

Refactoring Name:  **Extract Method**

Situation:  You have a code fragment that can be grouped together.

Method: Turn the fragment into a method whose name explains the purpose of the method.

:package: Example:

<tabs> 
  <tab header="Java">

<include src="example-extract-java.md" />

  </tab>
  <tab header="Python">

<include src="example-extract-python.md" />

</tab>
</tabs><hr>



</tip-box>

<tip-box>

:bulb: Some IDEs have built in support for basic refactorings such as automatically renaming a variable/method/class in all places it has been used.

</tip-box>

<tip-box type="important">

Important: Refactoring, even if done with the aid of an IDE, may still result in regressions. Therefore, each small refactoring should be followed by regression testing.

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
