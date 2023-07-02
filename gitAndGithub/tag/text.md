{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can tag commits using Git</span>

<span id="title">`tag`: Naming commits</span>

<div id="body">

**Each Git commit is uniquely identified by a hash** e.g., `d670460b4b4aece5915caf5c68d12f560a9fe3e4`. As you can imagine, using such an identifier is not very convenient for our day-to-day use. As a solution, Git allows adding a more human-readable _tag_ to a commit e.g., `v1.0-beta`.

Here's how you can tag a commit in a local repo:

{{ show_git_tabs() }}

After adding a tag to a commit, you can use the tag to refer to that commit, as an alternative to using the hash.

<box type="warning" seamless>

**Tags are different from commit messages**, in purpose and in form. A commit message is a description of the commit that is _part of_ the commit itself. A tags is a short name for a commit, which exists as a separate entity that _points to_ a commit.
</box>
</div>

<div id="extras">
</div>
