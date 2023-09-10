<span id="title">Alternate paths</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can interpret alternate paths in activity diagrams</span>

<div id="body">

**A _branch node_ shows the start of alternate paths.** Each control flow exiting a branch node has a _guard condition_: a boolean condition that should be true for execution to take that path. **_Exactly one_ of the guard conditions should be true** at any given branch node.

**A _merge node_ shows the end of alternate paths.**

Both branch nodes and merge nodes are ==diamond shapes==. Guard conditions must be in ==square brackets==.

<pic eager src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/notation.png" height="180" />

<box>

{{ icon_example }} The AD below shows alternate paths involved in the workflow of the activity _shop for product_:

<pic eager src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/example.png" height="240" />
<p/>

</box>

Some acceptable simplifications (by convention):
* Omitting the merge node if it doesn't cause any ambiguities.
* Multiple arrows can starting from the same corner of a branch node.
* Omitting the `[Else]` condition.

<box>

{{ icon_example }} The AD below illustrates the simplifications mentioned above:

<pic eager src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/simplifications.png" width="400" />
<p/>

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
