<link rel="stylesheet" href="{{baseUrl}}/css/useCases.css">

A use case can "include" another use case. Underlined text is commonly used to show an inclusion of a use case. Inclusions are useful,

*	When you don't want to clutter a use case with too many low-level steps.
*	When a set of steps is repeated in multiple use cases.

<tip-box>
  <div>
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
  </div>
</tip-box>

We use a dotted arrow and a `<< include >>` annotation to show use case inclusions in a use case diagram.

<img src="{{baseUrl}}/requirements/useCases/details/images/Inclusion.jpg" height="250" />

<p/>
