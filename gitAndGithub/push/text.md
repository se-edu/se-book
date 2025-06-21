{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.push.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Now, you can **update the remote repo with the revision history of the local repo**.
{% endcall %}


**Pushing a repo** to the remote for the first time:

{{ show_git_tabs('_4') }}


<div id="simple-push">

Given below is a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubPushing-rcsPushing">push</trigger> commits to a remote repo hosted on GitHub:

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubPushing-rcsPushing">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-pushing"/>
</modal>


**1. Commit** some changes in your local repo.

**2. Push** the new commits to your fork on GitHub

{{ show_git_tabs('_1') }}


**5. Add a few more commits, and <trigger trigger="click" for="modal:push-tag">tag</trigger> some of them.**

<modal large header="Tools → Git and GitHub → `tag`: Naming commits" id="modal:push-tag">
  <include src="../tag/text.md"/>
</modal>

**6. Push the new commits ==_and_ the tags==.**

{{ show_git_tabs('_2') }}

</div>

<box>

****You can push to repos other than the one you cloned from****, as long as the target repo and your repo have a shared history.
1. <trigger trigger="click" for="modal:push-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger>, if you haven't done so already.
1. Push to the target repo.

<modal large header="Git & GitHub → Pull →" id="modal:push-addRemoteForNormalPushing">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

{{ show_git_tabs('_3') }}
</box>

</div>

<div id="extras">
</div>
