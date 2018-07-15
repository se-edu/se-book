<div id="title">

#### Unified Process

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Unified Process</span>

<div id="body">

The _unified process_ is developed by the Three Amigos - Ivar Jacobson, Grady Booch and James Rumbaugh (the creators of UML).

The unified process consists of four phases: _inception, elaboration, construction and transition_. The main purpose of each phase can be summarized as follows:

<table class="table">
  <tr>
    <th>Phase</th>
    <th>Activities</th>
    <th>Typical Artifacts</th>
  </tr>
  <tr>
    <td>Inception</td>
    <td>
      <ul>
        <li>Understand the problem and requirements</li>
        <li>Communicate with customer</li>
        <li>Plan the development effort</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Basic use case model</li>
        <li>Rough project plan</li>
        <li>Project vision and scope</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Elaboration</td>
    <td>
      <ul>
        <li>Refines and expands requirements</li>
        <li>Determine a high-level design e.g. system architecture</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>System architecture</li>
        <li>Various design models</li>
        <li>Prototype</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Construction</td>
    <td>
      <ul>
        <li>Major implementation effort to support the use cases identified</li>
        <li>Design models are refined and fleshed out</li>
        <li>Testing of all levels are carried out</li>
        <li>Multiple releases of the system</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Test cases of all levels</li>
        <li>System release</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Transition</td>
    <td>
      <ul>
        <li>Ready the system for actual production use</li>
        <li>Familiarize end users with the system</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Final system release</li>
        <li>Instruction manual</li>
      </ul>
    </td>
  </tr>
</table>

<img src="{{baseUrl}}/processModels/exampleProcessModels/unifiedProcess/images/diagram.png" height="280" />
<p/>

Given above is a visualization of a project done using the Unified process (source: Wikipedia). As the diagram shows, a phase can consist of several iterations. Each vertical column (labeled “I1” “E1”, “E2”, “C1”, etc.) represents a single iteration. Each of the iterations consists of a set of ‘workflows’ such as ‘Business modeling’, ‘Requirements’, ‘Analysis & Design’ etc. The shaded region indicates the amount of resource and effort spent on a particular workflow in a particular iteration.

**Unified process is a flexible and customizable process model framework rather than a single fixed process.** For example, the number of iterations in each phase, definition of workflows, and the intensity of a given workflow in a given iteration can be adjusted according to the nature of the project. Take the Construction Phase, to develop a simple system, one or two iterations would be sufficient. For a more complicated system, multiple iterations will be more helpful. Therefore, the diagram above simply records a particular application of the UP rather than prescribe how the UP is to be applied. However, this record can be refined and reused for similar future projects.

</div>

<div id="extras">
  <include src="exercises.md" />
</div>