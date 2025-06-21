{% from "common/macros.njk" import trail, show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.tag.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}


**Each Git commit is uniquely identified by a hash** e.g., `d670460b4b4aece5915caf5c68d12f560a9fe3e4`. As you can imagine, using such an identifier is not very convenient for our day-to-day use. As a solution, Git allows adding a more human-readable _tag_ to a commit e.g., `v1.0-beta`.

Here's how you can tag a commit in a local repo:

{{ show_git_tabs() }}

After adding a tag to a commit, you can use the tag to refer to that commit, as an alternative to using the hash.

<box type="info" seamless>

**Annotated vs Lightweight Tags**: The Git tags explained above are known as _lightweight_ tags. There is another type of Git tags called _annotated_ tags. See [git-scm.com/book](https://git-scm.com/book/en/v2/Git-Basics-Tagging) for more info.
</box>
<box type="warning" seamless>

**Tags are different from commit messages**, in purpose and in form. A commit message is a description of the commit that is _part of_ the commit itself. A tags is a short name for a commit, which exists as a separate entity that _points to_ a commit.
</box>
</div>

<div id="extras">
</div>
