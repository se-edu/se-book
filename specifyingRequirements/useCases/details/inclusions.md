<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**A use case can ==include== another use case.** ++Underlined text++ is commonly used to show an inclusion of a use case.

<box>

{{ icon_example }} This use case includes two other use cases, one in step 1 and one in step 2.

<div class="text-monospace">

* **Software System**: LearnSys
* **Use case**:  UC01 - Conduct Survey
* **Actors**: Staff, Student
* **MSS**:
  1. Staff ++creates the survey **(UC44)**++.
  1. Student ++completes the survey **(UC50)**++.
  1. Staff views the survey results.<br>
     Use case ends.
</div>
</box>

Inclusions are useful,
* when you don't want to clutter a use case with too many low-level steps.
* when a set of steps is repeated in multiple use cases.

We use a dotted arrow and a `<<include>>` annotation to show use case inclusions in a use case diagram. Note how the arrow direction is different from the `<<extend>>` arrows.

<img src="{{baseUrl}}/specifyingRequirements/useCases/details/images/inclusion.png" height="250" /><p/>