{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can clone a remote repo</span>

<span id="title">`clone`: Copying a repo</span>

<div id="body">

Given below is an example scenario you can try yourself to learn Git <trigger trigger="click" for="modal:gitCloning-rcsCloning">cloning</trigger>.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:gitCloning-rcsCloning">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-cloning"/>
</modal>

Suppose you want to clone the sample repo [samplerepo-things](https://github.com/se-edu/samplerepo-things) to your computer.

<box type="warning" seamless>

Note that the URL of the GitHub project is different from the URL you need to clone a repo in that GitHub project.
e.g.

GitHub project URL: `https://github.com/se-edu/samplerepo-things` <br>
Git repo URL: `https://github.com/se-edu/samplerepo-things.git` (note the `.git` at the end)

</box>

{{ show_git_tabs() }}

</div>

<div id="extras">
</div>
