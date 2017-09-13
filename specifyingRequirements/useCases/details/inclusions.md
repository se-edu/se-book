<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**A use case can ==include== another use case.** Underlined text is commonly used to show an inclusion of a use case. 

<tip-box>

:package: This use case includes two other use cases, one in step 1 and one in step 2.

<ul>
  <li>Software System: LearnSys</li>
  <li>Use case:  UC01 - Conduct Survey</li>
  <li>Actors: Staff, Student</li>
  <li>MSS:
    <ol>
      <li>Staff <span class="underline">creates the survey <b>(UC44).</b></span></li>
      <li>Student <span class="underline">completes the survey <b>(UC50).</b></span></li>
      <li>Staff views the survey results.</li>
      <li class="custom-bullet-point">Use case ends.</li>
    </ol>
  </li>
</ul>

</tip-box>

Inclusions are useful,
* when you don't want to clutter a use case with too many low-level steps.
* when a set of steps is repeated in multiple use cases.

We use a dotted arrow and a `<< include >>` annotation to show use case inclusions in a use case diagram. Note how the arrow direction is different from the `<< extend >>` arrows.

<img src="{{baseUrl}}/specifyingRequirements/useCases/details/images/inclusion.png" height="250" />

<p/>
