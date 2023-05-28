<span id="prereqs"><panel src="../pull/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Pull%%" popup-url="{{ baseUrl }}/gitAndGithub/pull" /></span>

<span id="outcomes">{{ icon_outcome }} Can fork a repo</span>

<span id="title">Fork: Creating a remote copy</span>

<div id="body">

Given below is a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubForking-rcsForking">fork</trigger> a repo:.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubForking-rcsForking">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-forking"/>
</modal>

**0. Create a GitHub account if you don't have one yet.**

**1. Go to the GitHub repo you want to fork** e.g., [samplerepo-things](https://github.com/se-edu/samplerepo-things)

**2. Click on the <pic src="images/fork.png" height="30" /> button** on the top-right corner. In the next step,
  * choose to fork to your own account or to another GitHub organization that you are an admin of.
  * ==Un-tick the `[ ] Copy the master branch only` option==.

{{ icon_info }} GitHub does not allow you to fork the same repo more than once to the same destination. If you want to re-fork, you need to delete the previous fork.

</div>

<div id="extras">
</div>
