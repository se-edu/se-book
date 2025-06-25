{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.workingWithRemotes.lessons.clone.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
  ...
{% endcall %}


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
