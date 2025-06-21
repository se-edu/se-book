{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can link a local repo with a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.setRemote.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Next, you need to **link the _local_ repo (i.e., the one on your computer) with the _remote_ repo** on GitHub.


{% endcall %}

**To communicate with another remote repo, you can first add it as a _remote_ of your repo**. Here is an example scenario you can follow to learn how to pull from another repo:

{{ show_git_tabs('_3') }}




</div>

<div id="extras">
</div>
