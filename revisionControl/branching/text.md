<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain branching</span>

<div id="title">

#### Branching

</div>

<div id="body">

**==_Branching_== is the process of evolving multiple versions of the software in parallel.** For example, one team member can create a new branch and add an experimental feature to it while the rest of the team keeps working on another branch. Branches can be given names e.g. `master`, `release`, `dev`.

**A branch can be ==_merged_== into another branch.** Merging usually result in a new commit that represents the changes done in the branch being merged.

<pic src="{{baseUrl}}/revisionControl/branching/images/diagram.png" height="180">
  <strong>Branching and merging</strong>
</pic>

**==_Merge conflicts_== happen when you try to merge two branches that had changed the same part of the code** and the RCS software cannot decide which changes to keep. In those cases we have to ‘resolve’ those conflicts manually.

</div>

<div id="extras">

<include src="exercises.md" />

</div>