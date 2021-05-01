<span id="title">Feature branch flow</span>

<span id="prereqs"><panel src="../forkingWorkflow/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Revision Control → Forking Workflow%%" popup-url="{{ baseUrl }}/revisionControl/forkingWorkflow" /></span>

<span id="outcomes">{{ icon_outcome }} Can explain feature branch flow</span>

<div id="body">

**_Feature branch_ workflow is similar to forking workflow except there are no forks.** Everyone is pushing/pulling from the same remote repo. The phrase _feature branch_ is used because each new feature (or bug fix, or any other modification) is done in a separate branch and merged to the `master` branch when ready. Pull requests can still be created within the central repository, from the feature branch to the main branch.

As this workflow require all team members to have write access to the repository,
  * it is better to _protect_ the main branch using some mechanism, to reduce the risk of accidental undesirable changes to it.
  * it is not suitable for situations where the code contributors are not 'trusted' enough to be given write permission.

<img src="{{baseUrl}}/revisionControl/featureBranchFlow/images/diagram.png" height="330" />
<p/>

</div>

<div id="extras">
  <include src="resources.md" />
</div>
