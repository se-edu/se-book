{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.workingWithRemotes.lessons.pushTag.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}
**5. Add a few more commits, and <trigger trigger="click" for="modal:push-tag">tag</trigger> some of them.**

<modal large header="Tools → Git and GitHub → `tag`: Naming commits" id="modal:push-tag">
  <include src="../tag/text.md"/>
</modal>

**6. Push the new commits ==_and_ the tags==.**

{{ show_git_tabs('-push-tags-fragment') }}

</div>

<div id="extras">
</div>
