<div id="title">

#### Alternate Paths

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret alternate paths in activity diagrams</span>

<div id="body">

**A _branch node_ shows the start of alternate paths.** Each control flow exiting a branch node has a _guard condition_ : a boolean condition that should be true for execution to take that path. Only one of the guard condition can be true at any time.
 
**A _merge node_ shows the end of alternate paths.** 

Both branch nodes and merge nodes are ==diamond shapes==. Guard conditions must be in ==square brackets==.

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/notation.png" height="180" />

<tip-box>

{{ icon_example }} The AD below shows alternate paths involved in the workflow of the activity _shop for product_:

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/example.png" height="240" />
<p/>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>