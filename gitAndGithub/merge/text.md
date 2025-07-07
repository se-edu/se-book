{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.branchingLocally.lessons.merge.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
...
{% endcall %}

...


**5. Switch back to the `feature1` branch** %%(similar to step 3)%%.

**6. Merge the `master` branch to the `feature1` branch**, giving an end-result like the following. Also note how Git has created a _merge commit_.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" />
<p/>

{{ show_git_tabs('_3') }}

The objective of that merge was to _sync_ the `feature1` branch with the `master` branch. Observe how the changes you did in the `master` branch (i.e. the imaginary bug fix) is now available even when you are in the `feature1` branch.

<box>

****To undo a merge****,

1. Ensure you are in the <popover content="If you merged branch `foo` onto branch `bar`, branch `bar` is the _receiving branch_">branch that received the merge</popover>.
1. Do a hard reset (similar to how you delete a commit) of that branch to the commit that would be the tip of that branch had you not done the offending merge.


----{.dotted}

{{ icon_example }} In the example below, you merged `master` to `feature1`.

<annotate src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" >
<a-point x="4%" y="47%" color="yellow" size="18" opacity="0.4" content="Do a hard reset to this commit"/>
</annotate>

If you want to undo that merge,

1. Ensure you are in the `feature1` branch (because that's the branch that _received_ the merge).
1. Reset the `feature1` branch to the commit highlighted (in yellow) in the screenshot above (because that was the tip of the `feature1` branch before you merged the `master` branch to it.

</box>

<box type="info" seamless>

Instead of merging `master` to `feature1`, an alternative is to [_rebase_](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) the `feature1` branch. However, rebasing is an advanced feature that requires modifying past commits. If you modify past commits that have been pushed to a remote repository, you'll have to [_force-push_](https://www.datree.io/resources/git-push-force) the modified commit to the remote repo in order to update the commits in it.
</box>

**7. Add another commit to the `feature1` branch.**

**8. Switch to the `master` branch and add one more commit.**

**9. Merge `feature1` to the master branch**, giving and end-result like this:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_6.png" height="150" />
<p/>

{{ show_git_tabs('_3b') }}

**10. Create a new branch called `add-countries`, switch to it, and add some commits to it** %%(similar to steps 1-2 above)%%. You should have something like this now:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchBeforeMerging.png" height="80" />
<p/>

<box type="wrong" seamless>

**Avoid this rookie mistake!**{.text-danger}

==Always remember to switch back to the `master` branch before creating a new branch.== If not, your new branch will be created on top of the current branch.
</box>

**11. Go back to the `master` branch and merge the `add-countries` branch onto the `master` branch** %%(similar to steps 8-9 above)%%. While you might expect to see something like the following,

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchNoFastForward.png" height="100" />
<p/>

... you are likely to see something like this instead:

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchAfterMerging.png" height="80" />
<p/>

That is because **Git does a _fast forward_ merge if possible**. Seeing that the `master` branch has not changed since you started the `add-countries` branch, Git has decided it is simpler to just put the commits of the `add-countries` branch in front of the `master` branch, without going into the trouble of creating an extra merge commit.

**It is possible to force Git to create a merge commit even if fast forwarding is possible.**

{{ show_git_tabs('_4') }}

</div>

<div id="extras">
</div>
