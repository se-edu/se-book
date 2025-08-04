{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can use interactive rebase.</span>
<span id="title">{{ trail.fineTuningHistory.lessons.interactiveRebase.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
When the revision history gets 'messy', **Git has a way to 'tidy up' the recent commits.**
{% endcall %}

**Git has a powerful tool called {{ show_git_term("interactive rebasing") }} which lets you review and reorganise your recent commits.** With it, you can reword commit messages, change their order, delete commits, combine several commits into one (squash), or split a commit into smaller pieces. This feature is useful for tidying up a commit history that has become messy — for example, when some commits are out of order, poorly described, or include changes that would be clearer if split up or combined.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Tidy-up commits")  %}

{{ hp_number(hop_preparation) }} **Run the following commands to create a sample repo** that we'll be using for this hands-on practical:

```bash
mkdir samplerepo-sitcom
cd samplerepo-sitcom
git init

echo "Aspiring actress" >> Penny.txt
git add .
git commit -m "C1: Add Penny.txt"

echo "Scientist" >> Sheldon.txt
git add .
git commit -m "C3: Add Sheldon.txt"

echo "Comic book store owner" >> Stuart.txt
git add .
git commit -m "C2: Add Stuart.txt"

echo "Engineer" >> Stuart.txt
git commit -am "X: Incorrectly update Stuart.txt"

echo "Engineer" >> Howard.txt
git add .
git commit -m "C4: Adddd Howard.txt"
```
{{ hp_number(hop_target) }} Here are the commits that should be in the created repo, and **how each commit needs to be 'tidied up'**.
* `C4: Adddd Howard.txt` -- Fix typo in the commit message `Adddd` → `Add`.
* `X: Incorrectly update Stuart.txt` -- Drop this commit.
* `C2: Add Stuart.txt` -- Swap this commit with the one below.
* `C3: Add Sheldon.txt` -- Swap this commit with the one above.
* `C1: Add Penny.txt` -- No change required.

{{ hp_number("1") }} **Start the interactive rebasing**.

{% set cli %} <!-- ------ start: Git Tabs --------------->

**To start the interactive rebase, use the `git rebase -i <start-commit>` command.** `-i` stands for 'interactive'. In this case, we want to modify the last four commits (hence, `HEAD~4`).
```bash{.no-line-numbers}
git rebase -i HEAD~4
```
{% call show_output() %}
```bash{.no-line-numbers}
pick 97a8c4a C3: Add Sheldon.txt
pick 60bd28d C2: Add Stuart.txt
pick 8b9a36f X: Incorrectly update Stuart.txt
pick 8ab6941 C4: Adddd Howard.txt

# Rebase ee04afe..8ab6941 onto ee04afe (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
#                       updated at the end of the rebase
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```
The command will take you to the text editor, which will present you with a wall of text similar to the above. It has two parts:

1. **At the top, the list of commits and the action to take on each**, oldest commit first, with the action `pick` indicated by default (`pick` means 'use this commit in the result') for each.
1. **At the bottom, instructions on how to edit those lines**.
{% endcall %}

{{ hp_number("2") }} **Edit the commit list to specify the rebase actions**, as follows:
```bash{.no-line-numbers}
pick 60bd28d C2: Add Stuart.txt
pick 97a8c4a C3: Add Sheldon.txt
drop 8b9a36f X: Incorrectly update Stuart.txt
reword 8ab6941 C4: Addddd Howard.txt
```
{{ hp_number("4") }} **Once you save edits and exit the text editor, Git will perform the rebase** based on the actions you specified, from top to bottom.

**At some steps, Git will pause the rebase and ask for your inputs.** In this case, it will ask you to specify the new commit message when it is processing the following line.
```bash{.no-line-numbers}
reword 8ab6941 C4: Addddd Howard.txt
```

{% endset %}
{% set sourcetree %}
**To go to the interactive rebase mode**, right-click the parent commit of the earliest commit you want to reorganise (in this case, it is `C1: Add Penny.txt`) and choose `Rebase children of <SHA> interactively...`<br>
<pic src="images/sourcetreeRightClickToRebase.png" width="500" />

{{ hp_number("2") }} **To indicate what action you want to perform on each commit**, select the commit in the list and click on the button for the action you want to do on it:<br>
<pic src="images/sourcetreeIndicateModifications.png" width="700" />

{{ hp_number("3") }} **To execute the rebase**, after indicating the action for all commits (the dialog will look like the below), click `OK`.<br>
<pic src="images/sourcetreeExecuteModifications.png" width="700" />

{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->

**The final result** should be something like the following, 'tidied up' exactly as we wanted:
```{.no-line-numbers}
* 727d877 C4: Add Howard.txt
* 764fc29 C3: Add Sheldon.txt
* 08a965a C2: Add Stuart.txt
* 6436598 C1: Add Penny.txt
```
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

<box type="warning" seamless>

**Rebasing rewrites history.** It is not recommended to rebase commits you have already shared with others.
</box>

</div>
<div id="extras">
{{ show_detour('updateLastCommit') }}
</div>
