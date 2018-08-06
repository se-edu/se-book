<div id="title">

#### How

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain how models are used</span>

<div id="body">

**In software development, models are useful in several ways:**

a) **To analyze a complex entity related to software development.**

<tip-box>

{{ icon_example }} Some examples of using models for analysis:

1. Models of the problem domain (i.e. the environment in which the software is expected to solve a problem) can be built to aid the understanding of the problem to be solved.
2. When planning a software solution, models can be created to figure out how the solution is to be built. An architecture diagram is such a model.

</tip-box>

b) **To communicate information among stakeholders.**  Models can be used as a visual aid in discussions and documentations.

<tip-box>

{{ icon_example }} Some examples of using models to communicate:

1. We can use an <trigger trigger="click" for="modal:modelingIntro-archiDiagrams">architecture diagram</trigger> to explain the high-level design of the software to developers.
2. A business analyst can use a use case diagram to explain to the customer the functionality of the system.
3. A class diagram can be reverse-engineered from code so as to help explain the design of a component to a new developer.

</tip-box>

<modal large title="Architecture Diagrams" id="modal:modelingIntro-archiDiagrams">

An _architecture diagram_ depicts the high-level design of a software.

  <include src="../../../../book/architecture/architectureDiagrams/reading/text.md#architecture-diagram-examples"/>
</modal>

c) **As a blueprint for creating software.** Models can be used as instructions for building software.

<tip-box>

{{ icon_example }} Some examples of using models to as blueprints:

1. A senior developer draws a class diagram to propose a design for an OOP software and passes it to a junior programmer to implement.
2. A software tool allows users to draw UML models using its interface and the tool automatically generates the code based on the model.

</tip-box>

<tip-box>

<!-- TODO: make this an independent LO 4* -->

<panel type="seamless">
<span slot="header" class="card-title">Model Driven Development {{ icon_tangential }}</span>

**_Model-driven development (MDD)_, also called _Model-driven engineering_, is an approach to software development that strives to exploit models as blueprints.** MDD uses models as primary engineering artifacts when developing software. That is, the system is first created in the form of models. After that, the models are converted to code using code-generation techniques (usually, automated or semi-automated, but can even involve manual translation from model to code). MDD requires the use of a very expressive modeling notation (graphical or otherwise), often specific to a given problem domain. It also requires sophisticated tools to generate code from models and maintain the link between models and the code. One advantage of MDD is that the same model can be used to create software for different platforms and different languages. MDD has a lot of promise, but it is still an emerging technology

Further reading:
* [Martin Fowler's view on MDD](https://martinfowler.com/bliki/ModelDrivenSoftwareDevelopment.html) - TLDR: he is sceptical
* [5 types of Model Driven Software Development](http://www.theenterprisearchitect.eu/blog/2009/03/31/5-types-of-model-driven-software-development/) - A more optimistic view, although an old article

</panel>

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
