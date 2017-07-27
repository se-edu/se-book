<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Project Planning :arrow_right: </div>

<div id="title">

#### Work Breakdown Structure :one:

</div>

<div id="body">

When managing projects it is useful to divide the total work into smaller, well-defined units. Relatively complex tasks can be further split into subtasks. A structure that depicts the above information about tasks and their details in terms of subtasks is known as a Work Breakdown Structure (WBS). In complex projects a WBS can also include prerequisite tasks and effort estimates for each task.

For the Minesweeper example, the high level tasks for a single iteration could look like the following:

| Task ID | Task                         | Estimated Effort       | Prerequisite Task |
| ------- | ---------------------------- | ---------------------- | ----------------- |
| A       | Analysis                     | 1 man day              | -                 |
| B       | Design                       | 2 man day              | A                 |
| C       | Implementation               | 4.5 man day            | B                 |
| D       | Testing                      | 1 man day              | C                 |
| E       | Planning for next version    | 1 man day              | D                 |

The effort is traditionally measured in _man hour/day/month_ i.e. work that can be done by one person in one hour/day/month. The _Task ID_ is a label for easy reference to a task. Simple labeling is suitable for a small project, while a more informative labeling system can be adopted for bigger projects.

The high level tasks structure can be further refined into subtasks.

<table class="table">
  <tr>
    <th>Task ID</th>
    <th>Task</th>
    <th>Estimated Effort</th>
    <th>Prerequisite Task</th>
  </tr>
  <tr>
    <td>A</td>
    <td>High level design</td>
    <td>1 man day</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B</td>
    <td>
      Detail design
      <ol>
        <li>User Interface</li>
        <li>Game Logic</li>
        <li>Persistency Support</li>
      </ol>
    </td>
    <td>
      2 man day
      <ul>
        <li>0.5 man day</li>
        <li>1 man day</li>
        <li>0.5 man day</li>
      </ul>
    </td>
    <td>A</td>
  </tr>
  <tr>
    <td>C</td>
    <td>
      Implementation
      <ol>
        <li>User Interface</li>
        <li>Game Logic</li>
        <li>Persistency Support</li>
      </ol>
    </td>
    <td>
      4.5 man day
      <ul>
        <li>1.5 man day</li>
        <li>2 man day</li>
        <li>1 man day</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>B.1</li>
        <li>B.2</li>
        <li>B.3</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>D</td>
    <td>System Testing</td>
    <td>1 man day</td>
    <td>C</td>
  </tr>
  <tr>
    <td>E</td>
    <td>Planning for next version</td>
    <td>1 man day</td>
    <td>D</td>
  </tr>
</table>

**All tasks should be well-defined.** In particular, it should be clear as to when the task will be considered “done”. E.g.

* Not good: more coding | better: implement component X
* Not good: do research on UI testing | better: find a suitable tool for testing the UI

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
