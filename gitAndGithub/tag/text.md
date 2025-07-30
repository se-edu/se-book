{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Able to tag a commit.</span>
<span id="title">{{ trail.usingRevisionHistory.lessons.tag.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When working with many commits, it helps to **tag specific commits with custom names** so they’re easier to refer to later.
{% endcall %}

**Git lets you {{ show_git_term('tag') }} commits with names, making them easy to reference later.** This is useful when you want to mark specific commits -- such as releases or key milestones (e.g., `v1.0` or `v2.1`). Using tags to refer to commits is much more convenient than using SHA hashes. In the diagram below, {{ show_tag('v1.0') }} and {{ show_tag('interim') }} are tags.

{{ show_commit('C3', desc=show_ref('master') + show_head() + show_tag('interim'), msg='Update list') }}
{{ show_commit('C2', desc=show_tag('v1.0'), msg='Populate list') }}
{{ show_commit('C1', edge='', msg="Add empty list") }}
<p/>


**A tag stays fixed to the commit.** Unlike branch refs or `HEAD`, tags do not move automatically as new commits are made. As you see below, after adding a new commit, tags stay in the previous commits while {{ show_ref('master')  + show_head() }} have moved to the new commit.

{{ show_commit('C4', desc=show_ref('master') + show_head(), msg='Trim the list') }}
{{ show_commit('C3', desc=show_tag('interim'), msg='Update list') }}
{{ show_commit('C2', desc=show_tag('v1.0'), msg='Populate list') }}
{{ show_commit('C1', edge='', msg="Add empty list") }}
<p/>

**Git supports two kinds of tags:**

1. **A {{ show_git_term("lightweight tag") }}** is just a ref that points directly to a commit, like a branch that doesn’t move.
2. **An {{ show_git_term("annotated tag") }}** is a full Git object that stores a reference to a commit along with metadata such as the tagger’s name, date, and a message.

**Annotated tags are generally preferred for versioning and public releases,** while lightweight tags are often used for less formal purposes, such as marking a commit for your own reference.

{% call show_hands_on_practical('Adding tags')  %}

{{ hp_number(hop_target) }} **Add a few tags to a repository.**

{{ hp_number (hop_preparation) }} **Fork and clone the [samplerepo-preferences](https://github.com/se-edu/samplerepo-preferences).** Use the cloned repo on your computer for the following steps.

{% set cli %}

{{ hp_number ('1') }} **Add a lightweight tag to the current commit** as `v1.0`:

```bash{.no-line-numbers}
git tag v1.0
```
{{ hp_number ('2') }} **Verify the tag was added.**
To view tags:
```bash{.no-line-numbers}
git tag
```
{% call show_output() %}
```bash{.no-line-numbers}
v1.0
```
{% endcall %}
To view tags in the context of the revision graph:
```bash{.no-line-numbers}
git log --oneline --decorate
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1['tag: v1.0']"}
507bb74 (HEAD -> master, tag: v1.0, origin/master, origin/HEAD) Add donuts
de97f08 Add cake
5e6733a Add bananas
3398df7 Add food.txt
```
{% endcall %}

{{ hp_number ('3') }} **Use the tag to refer to the commit** e.g., `git show v1.0` should show the changes in the tagged commit.

{{ hp_number ('4') }} **Add an annotated tag to an earlier commit**. The example below adds a tag `v0.9` to the commit `HEAD~2` with the message `First beta release`. The `-a` switch tells Git this is an annotated tag.

```bash{.no-line-numbers}
git tag -a v0.9  HEAD~2 -m "First beta release"
```
{{ hp_number ('5') }} **Check the new annotated tag**. While both types of tags appear similarly in the revision graph, the `show` command on an annotated tag will show the details of the tag and the details of the commit it points to.
```bash{.no-line-numbers}
git show v0.9
```
{% call show_output() %}
```bash{.no-line-numbers highlight-lines="1-5"}
tag v0.9
Tagger: ... <...@...>
Date:   Sun Jun ...

First beta release

commit ....999087124af... (tag: v0.9)
Author: ... <...@...>
Date:   Sat Jun ...

    Add figs to fruits.txt

diff --git a/fruits.txt b/fruits.txt
index a8a0a01..7d0a594 100644
# rest of the diff goes here
```
{% endcall %}
{% endset %}
{% set sourcetree %}
Right-click on the commit (in the graphical revision graph) you want to tag and choose `Tag…`.

Specify the tag name e.g., `v1.0` and click `Add Tag`.

Configure tag properties in the next dialog and press `Add`. For example, you can choose whether to make it a lightweight tag or an annotated tag (default).

<pic eager src="images/sourcetreeAddTag.png" width="400" />
<p/>

Tags will appear as labels in the revision graph, as seen below. To see the details of an annotated tag, you need to use the menu indicated in the screenshot.

<pic eager src="images/sourcetreeSeeTagDetails.png" width="500" />
<p/>

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

{% endcall %}

**If you need to change what a tag points to, you must delete the old one and create a new tag with the same name.** This is because tags are designed to be fixed references to a specific commit, and there is no built-in mechanism to 'move' a tag.

{% call show_hands_on_practical('Deleting/moving tags')  %}

{{ hp_number(hop_preparation) }} Continue with the same repo you used for the previous hands-on practical.

**Move the `v1.0` tag to the commit `HEAD~1`**, by deleting it first and creating it again at the destination commit.

{% set cli %}

**Delete the previous `v1.0` tag** by using the `-d` switch. Add it again to the other commit, as before.
```bash{.no-line-numbers}
git tag -d v1.0
git tag v1.0 HEAD~1
```
{% endset %}
{% set sourcetree %}

The same dialog used to add a tag can be used to delete and even move a tag. Note that the 'moving' here translates to deleting and re-adding behind the scene.

<pic src="images/sourcetreeMoveTag.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}

{% endcall %}

<box type="warning" seamless>

**Tags are different from commit messages**, in purpose and in form. A commit message is a description of the commit that is _part of_ the commit itself. A tag is a short name for a commit, which you can use to address a commit.
</box>

**Pushing commits to a remote does not push tags automatically.** You need to push tags specifically.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Pushing tags to a remote")  %}

{{ hp_number(hop_target) }} **Push tags you created earlier to the remote.**

{{ hp_number(hop_preparation) }} Continue with the same repo you used for the previous hands-on practical.

<box type="info" seamless>

You can go to your remote on GitHub link `https://github.com/{USER}/{REPO}/tags` (e.g., `https://github.com/johndoe/samplerepo-preferences/tags`) to verify the tag is present there.

<pic src="images/githubListTags.png" width="300" />

Note how GitHub assumes these tags are meant as releases, and automatically provides zip and tar.gz archives of the repo (as at that tag).
</box>

{% set cli %} <!-- ------ start: Git Tabs --------------->

{{ hp_number ('1') }} **Push a specific tag in the local repo to the remote** (e.g., `v1.0`) using the `git push <origin> <tag-name>` command.
```bash{.no-line-numbers}
git push origin v1.0
```
<box type="tip" seamless>

In addition to verifying the tag's presence via GitHub, you can also use the following command to list the tags presently in the remote.
```bash{.no-line-numbers}
git ls-remote --tags origin
```
</box>

{{ hp_number ('2') }} **Delete a tag in the remote**, using the `git push --delete <remote> <tag-name>` command.

```bash{.no-line-numbers}
git push --delete origin v1.0
```
{{ hp_number ('3') }} **Push all tags to the remote repo**, using the `git push <remote> --tags` command.

```bash{.no-line-numbers}
git push origin --tags
```

{% endset %}
{% set sourcetree %}

To push a specific tag, use the following menu:

<pic src="images/sourcetreePushTag.png" width="400" />

To push all tags, you can tick the `Push all tags` option when pushing commits:

<pic src="images/sourcetreePushAllTags.png" width="500" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->
</div>

<div id="extras">
</div>
