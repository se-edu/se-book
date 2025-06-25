{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.workingWithRemotes.lessons.fork.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
  ...
{% endcall %}


Given below is a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubForking-rcsForking">fork</trigger> a repo:.

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubForking-rcsForking">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-forking"/>
</modal>

**0. Create a GitHub account if you don't have one yet.**

**1. Go to the GitHub repo you want to fork** e.g., [samplerepo-things](https://github.com/se-edu/samplerepo-things)

**2. Click on the <pic eager src="images/fork.png" height="30" /> button** on the top-right corner. In the next step,
  * choose to fork to your own account or to another GitHub organization that you are an admin of.
  * ==Un-tick the `[ ] Copy the master branch only` option==, so that you get copies of other branches (if any) in the repo.

<box type="important" seamless>

As you might have guessed from the above, **forking is not a Git feature**, but a feature provided by remote Git hosting services such as Github.
</box>


<box type="info" seamless>

GitHub does not allow you to fork the same repo more than once to the same destination. If you want to re-fork, you need to delete the previous fork.
</box>

</div>

<div id="extras">
</div>
