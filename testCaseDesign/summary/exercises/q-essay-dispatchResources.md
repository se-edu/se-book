<panel header="{{ icon_Q_A }} Dispatch resources">
<question has-input="true">

Given below is the overview of the method dispatch(Resource, Task), from an emergency management system (e.g. a system used by those who handle emergency calls from the public about incidents such as fires, possible burglaries, domestic disturbances, etc.). A task might need multiple resources of multiple types. For example, the task ‘fire at Clementi MRT’ might need two fire engines and one ambulance.

* dispatch(Resource r, Task t):void
* Overview: This method dispatches the Resource r to the Task t. Since this can dispatch only one resource, it needs to be used multiple times should the task need multiple resources.

Imagine you are designing test cases to test the method dispatch(Resource,Task). Taking into account equivalence partitions and boundary values, which different inputs will you combine to test the method?

<div slot="answer">

<table class="table">
  <tr>
    <th>Test input for r</th>
    <th>Test input for t</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>A resource required by the task</li>
        <li>A resource not required by the task</li>
        <li>A resource already dispatched for another task</li>
        <li>null</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>A fully dispatched task</li>
        <li>A task requiring one more resource</li>
        <li>A task with no resource dispatched</li>
      </ul>
      Considering the resource types required
      <ul>
        <li>A task requiring only one type of resources</li>
        <li>A task requiring multiple types of resource</li>
        <li>null</li>
      </ul>
    </td>
  </tr>
</table>

</div>
</question>
</panel>
