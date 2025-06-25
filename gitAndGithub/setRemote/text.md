{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can link a local repo with a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.setRemote.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The second step of backing up a local repo on GitHub: **link the _local_ repo with the _remote_ repo** on GitHub.

{% endcall %}

**A Git {{ show_git_term('remote') }} is a reference to a repository hosted elsewhere**, usually on a server like GitHub, GitLab, or Bitbucket. It allows your local Git repo to communicate with another remote copy — for example, to upload to commits that you created locally but missing in the remote copy.

**By _adding a remote_, you are informing the local repo details of a remote repo it can communicate with**, for example, where the repo exists, what name to use to refer to the remote, and which network protocol to use to communicate with it (e.g., HTTPS vs SSH).

{% call show_hands_on_practical('Creating an empty repo on GitHub')  %}

Add the empty remote repo you created on GitHub as a remote of a local repo you have.

{{ show_git_tabs('-add-remote-fragment') }}
{% endcall %}

</div>

<div id="extras">
</div>
