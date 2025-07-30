{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can control what changes goes into a commit.</span>
<span id="title">{{ trail.fineTuningHistory.lessons.selectiveStage.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
To create well-crafted commits, you need to know **how to control which precise changes go into a commit**.
{% endcall %}

**Crafting a commit involves two aspects:**

1. **What changes to include in it**: deciding what changes belong together in a single commit — this is about *commit granularity*, ensuring each commit represents a meaningful, self-contained change.
1. **How to include those changes**: carefully staging just those changes — this is about using Git’s tools to precisely control what ends up in the commit.

{% call show_sidebar('Guidelines on what to include in a commit') %}

**A good commit represents a single, logical unit of change** — something that can be described clearly in one sentence. For example, fixing a specific bug, adding a specific feature, or refactoring a specific function. If each commit tells a clear story about why the change was made and what it achieves, your repository history becomes a valuable narrative of the project’s development. Here are some (non-exhaustive) guidelines:

* **No more than one change per commit**: Avoid lumping unrelated changes into one commit, as this makes the history harder to understand, review, or revert %%(if each commit contains one standalone change, to reverse that change can be done by deleting or reverting that specific commit entirely, without affecting any other changes)%%.
* **Make the commit standalone**: Don’t split a single logical change across multiple commits unnecessarily, as this can clutter the history and make it harder to follow the evolution of an idea or feature.
* **Small enough to review easily, but large enough to stand on its own**: For example, fixing the same typo in five files can be one commit — splitting it into five separate commits is excessive. Conversely, implementing a big feature may be too much for one commit — instead, break it down into a series of commits, each containing a meaningful yet standalone step towards the final goal.
{% endcall %}


**Git can let you choose not just which files, but which specific changes within those files, to include in a commit.** Most Git tools — including the command line and many GUIs — let you interactively select which "hunks" or even individual lines of a file to stage. This allows you to separate unrelated changes and avoid committing unnecessary edits. If you make multiple changes in the same file, you can selectively stage only the parts that belong to the current logical change.

This level of control is particularly useful when:

* You noticed and fixed a small, unrelated issue while working on something else.
* You experimented with multiple approaches in the same file and now want to commit only the final, clean solution.
* You want your commit history to clearly separate concerns, even when the edits touch the same files.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Stage changes selectively")  %}

You can use any repo for this.

{{ hp_number("1") }} **Do several changes to some tracked files.** Change multiple files. Also change multiple locations in the same file.

{{ hp_number("2") }} **Stage some changes in some files while keeping other changes in the same files unstaged.**

{% set cli %} <!-- ------ start: Git Tabs --------------->
As you know, you can use `git add <filename>` to stage changes to an entire file.

**To select which hunks to stage, you can use the `git add -p`** command instead (`-p` stands for 'by patch'):

```bash{.no-line-numbers}
git add -p
```
This command will take you to an interactive mode in which you can go through each hunk and decide if you want to stage it. The video below contains a demonstration of how this feature works:

@[youtube](blbzIgM-aOU)

{% endset %}
{% set sourcetree %}
To stage a hunk, you can click the `Stage` button above the hunk in question:<br>
<pic src="images/sourcetreeStageHunk.png" width="600" />
<p/>
To stage specific lines, select the lines first before clicking the `Stage` button above the hunk in question:<br>
<pic src="images/sourcetreeStageLine.png" width="600" />
<p/>
Unstaging can be done similarly:<br>
<pic src="images/sourcetreeStageHunk.png" width="600" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

<box type="tip" seamless>

**Most git operations can be done faster through the CLI than equivalent Git GUI clients**, once you are familiar enough with the CLI commands.

However, **selective staging is one exception where a good GUI can do better than the CLI**, _if_ you need to do many fine-grained staging operations (e.g., frequently staging only parts of hunks).
</box>
<!-- ------ end: Git Tabs -------------------------------->
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

</div>
<div id="extras">
</div>
