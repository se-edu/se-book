{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can create a remote repo on GitHub</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.remoteRepos.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
To back up your Git repo on the cloud, **you’ll need to use a _remote repository_ service, such as GitHub**.

{% endcall %}

**A repo you have on your computer is called a {{ show_git_term('local repo') }}. A {{ show_git_term('remote repo') }} is a repo hosted on a remote computer** and allows remote access. Some use cases for remote repositories:

* as a back of your local repo { texts="['a)', 'b)', 'c)']" }
* as an intermediary repo to work on the same files from multiple computers
* for sharing the revision history of a codebase among team members of a multi-person project

**It is possible to set up a Git remote repo on your own server**, but an easier option is to use a remote repo hosting service such as GitHub, GitLab, or BitBucket. In our case, we will be using GitHub.


</div>

<div id="extras">
</div>
