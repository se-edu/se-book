{% from "common/macros.njk" import trail, show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.checkout.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

**Git can load a specific version of the history to the working directory.** Note that if you have uncommitted changes in the working directory, you need to <trigger trigger="click" for="modal:checkout-stash">stash</trigger> them first to prevent them from being overwritten.

<modal large header="Git & GitHub → Stash" id="modal:checkout-stash">
  <include src="../stash/unit-inElsewhere-asPanelBody.md" boilerplate />
</modal>

{{ show_git_tabs('_1') }}

</div>

<div id="extras">
</div>
