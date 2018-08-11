<div id="title">

#### Work Breakdown Structure

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain work breakdown structures</span>

<div id="body">

**A _Work Breakdown Structure (WBS)_ depicts information about tasks and their details in terms of subtasks.** When managing projects it is useful to divide the total work into smaller, well-defined units. Relatively complex tasks can be further split into subtasks.  In complex projects a WBS can also include prerequisite tasks and effort estimates for each task.

<tip-box> 

{{ icon_example }} The high level tasks for a single iteration of a small project could look like the following:

| Task ID | Task                         | Estimated Effort       | Prerequisite Task |
| ------- | ---------------------------- | ---------------------- | ----------------- |
| A       | Analysis                     | 1 man day              | -                 |
| B       | Design                       | 2 man day              | A                 |
| C       | Implementation               | 4.5 man day            | B                 |
| D       | Testing                      | 1 man day              | C                 |
| E       | Planning for next version    | 1 man day              | D                 |

</tip-box>


**The effort is traditionally measured in _man hour/day/month_** i.e. work that can be done by one person in one hour/day/month. The _Task ID_ is a label for easy reference to a task. Simple labeling is suitable for a small project, while a more informative labeling system can be adopted for bigger projects.

<tip-box> 

{{ icon_example }} An example WBS for a project for developing a game.
 
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

</tip-box>


**All tasks should be well-defined.** In particular, it should be clear as to when the task will be considered _done_. 

<tip-box> 

{{ icon_example }} Some examples of ill-defined tasks and their better-defined counterparts:

| {{ bad }} | <span class="text-success">{{ icon_like }} Better </span>
| ------- | ----------------------------
| more coding | implement component X
| do research on UI testing | find a suitable tool for testing the UI

</tip-box>


</div>

<div id="extras">

<include src="exercises.md" />

</div>