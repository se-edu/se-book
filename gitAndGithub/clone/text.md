<span id="prereqs"><panel src="../../revisionControl/remoteRepositories/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Project Management → Revision Control → Remote Respositories%%" popup-url="{{ baseUrl }}/revisionControl/remoteRepositories" /></span>

<span id="outcomes">{{ icon_outcome }} Can clone a remote repo</span>

<span id="title">`clone`: Copying a repo</span>

<div id="body">

Given below is an example scenario you can try yourself to learn Git <trigger trigger="click" for="modal:gitCloning-rcsCloning">cloning</trigger>.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:gitCloning-rcsCloning">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-cloning"/>
</modal>

Suppose you want to clone the sample repo [samplerepo-things](https://github.com/se-edu/samplerepo-things) to your computer.

<box type="warning">

Note that the URL of the Github project is different from the URL you need to clone a repo in that Github project.
e.g.

Github project URL: `https://github.com/se-edu/samplerepo-things` <br>
Git repo URL: `https://github.com/se-edu/samplerepo-things.git` (note the `.git` at the end)

</box>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>

</div>

<div id="extras">
</div>