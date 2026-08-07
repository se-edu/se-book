{% from "common/macros.njk" import show_term with context %}
<span id="title">Unified process</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Unified Process</span>

<div id="body">

The {{ show_term("unified process") }} was developed by the Three Amigos - Ivar Jacobson, Grady Booch and James Rumbaugh (the creators of UML).

The unified process consists of four phases: _inception, elaboration, construction and transition_. The main purpose of each phase can be summarized as follows:

<table class="table">
<tbody>
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
        <li>Refine and expand requirements</li>
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
        <li>Testing of all levels is carried out</li>
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
</tbody>
</table>

<pic eager src="{{baseUrl}}/processModels/exampleProcessModels/unifiedProcess/images/diagram.png" height="280" />
<p/>

Given above is a visualization of a project done using the Unified process (source: Wikipedia). The four phases run from left to right and each vertical column is a single iteration; the shading shows how much effort a given workflow, such as ‘Requirements’ or ‘Analysis & Design’, takes up in that iteration.

**Phases and iterations are two different things, which is why a project can be phased and iterative at the same time**: a phase says where the project is in its overall arc, while an iteration is one pass of work through several workflows.

**Unified process is a flexible and customizable process model framework rather than a single fixed process.** For example, the number of iterations in each phase, definition of workflows, and the intensity of a given workflow in a given iteration can be adjusted according to the nature of the project. Therefore, the diagram above simply records a particular application of the UP rather than prescribes how the UP is to be applied. However, this record can be refined and reused for similar future projects.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
