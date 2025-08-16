{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="title">Creating PRs</span>
<span id="outcomes">{{ icon_outcome }} Can create PRs on GitHub</span>

{% macro dropdown(text) %}<span class="btn btn-light border">{{ text }} :octicon-triangle-down:</span>{% endmacro %}
{% macro button_green(text) %}<span class="btn btn-success ps-1 pe-1 pb-0 pt-0">{{ text }}</span>{% endmacro %}
{% macro button_light(text) %}<span class="btn btn-light ps-1 pe-1 pb-0 pt-0 border">{{ text }}</span>{% endmacro %}

<div id="body">

**A {{ show_git_term("pull request") }} ({{ show_git_term("PR") }} for short) is a mechanism for contributing code to a remote repo** i.e., "I'm _requesting_ you to _pull_ my proposed changes to your repo". It's feature provided by RCS platforms such as GitHub. For this to work, the two repos must have a shared history. The most common case is sending PRs from a fork to its <tooltip content="_upstream_ repo is a repo you forked from">upstream</tooltip> repo.

Suppose you want to propose some changes to a GitHub repo (e.g., [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice)) as a pull request (PR).

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("<md>Create a PR from the `master` branch</md>")  %}

{{ hp_number("preparation") }} [samplerepo-pr-practice](https://github.com/se-edu/samplerepo-pr-practice) is an unmonitored repo that we have created for you to practice working with PRs.

* **Fork** that repo onto your GitHub account.{{ numbers_roman }}
* **Clone** it onto your computer.
* **Commit** some changes (e.g., add a new file with some contents) onto the `master` branch.
* **Push** the branch you updated (i.e., `master` branch or the new branch) to your fork, as explained <trigger trigger="click" for="modal:createPr-pushBranch">here</trigger>.

<modal large header="Git & GitHub → Updating the Remote Repo →" id="modal:createPr-pushBranch">
  <include src="../push/text.md#body"/>
</modal>

{{ hp_number("1") }} **Go to your fork** on GitHub.

{{ hp_number("2") }} **Click on the** <span class="tab">%%:octicon-git-pull-request:%% Pull requests</span> **tab** followed by the {{ button_green("New pull request") }} **button**. This will bring you to the `Compare changes` page.

{{ hp_number("3") }} **Specify the target repo and the branch that should receive your PR**, using the `base repository` and `base` dropdowns. e.g.,<br>
   {{ dropdown("base repository: **se-edu/samplerepo-pr-practice**") }} {{ dropdown("base: **master**") }}<br>

<box type="info" seamless>

Normally, the default value shown in the dropdown is what you want but in case your fork has <popover content="e.g., the repo you forked from is also a fork of a another repo, which means both of those are considered upstream repos of your fork">multiple upstream repos</popover>, the default may not be what you want.

</box>

{{ hp_number("4") }} **Indicate which repo:branch contains your proposed code**, using the `head repository` and `compare` dropdowns. e.g.,<br>
  {{ dropdown("head repository: **myrepo/samplerepo-pr-practice**") }} {{ dropdown("compare: **master**") }}

{{ hp_number("5") }} **Verify the proposed code**: Verify that the diff view in the page shows the exact change you intend to propose. If it doesn't, <tooltip content="commit the new code and push to the branch">update the branch</tooltip> as necessary.

{{ hp_number("6") }} **Submit the PR:**

<span id="submit-the-pr">

* Click the {{ button_green("Create pull request") }} button.{texts="['6.1)', '6.2)']"}
* Fill in the PR name and description e.g.,<br>
   Name: `Add an introduction to the README.md`<br>
   Description:
   ```{.no-line-numbers}
   Add some paragraph to the README.md to explain ...
   Also add a heading ...
   ```
* If you want to indicate that the PR you are about to create is 'still work in progress, not yet ready', click on the dropdown arrow in the {{ button_green(" Create pull request :octicon-triangle-down:") }} button and choose `Create draft pull request` option.
* Click the {{ button_green(" Create pull request :octicon-triangle-down:") }} button to create the PR.
* Go to the receiving repo to verify that your PR appears there in the `Pull requests` tab.
</span>

{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**The next step of the PR lifecycle is the PR _review_.** The members of the repo that received your PR can now review your proposed changes.
* If they like the changes, they can _merge_ the changes to their repo, which also closes the PR automatically.
* If they don't like it at all, they can simply close the PR too i.e., they reject your proposed change.
* In most cases, they will add comments to the PR to suggest further changes. When that happens, GitHub will notify you.

**You can update the PR along the way too.** Suppose PR reviewers suggested a certain improvement to your proposed code. To update your PR as per the suggestion, you can simply modify the code in your local repo, commit the updated code to the same branch as before, and push to your fork as you did earlier. The PR will auto-update accordingly.

**Sending PRs using the `master` branch is less common** than sending PRs using separate branches. For example, suppose you wanted to propose two bug fixes that are not related to each other. In that case, it is more appropriate to send two separate PRs so that each fix can be reviewed, refined, and merged independently. But if you send PRs using the `master` branch only, both fixes (and any other change you do in the `master` branch) will appear in the PRs you create from it.

**It is possible to create PRs within the same repo too** e.g., you can create a PR from branch `feature-x` to the `master` branch, within the same repo. Doing so will allow the code to be reviewed by other developers (using PR review mechanism) before it is merged.

</div>

<div id="extras">
{% call show_resources() %}
* [GitHub's own documentation on creating a PR](https://help.github.com/articles/creating-a-pull-request/)
{% endcall %}
{{ show_detour("prFromOtherBranches", detour_title="Creating PRs from Other Branches", detour_path="detour-prFromOtherBranches-fragment.md") }}
{{ show_detour("resolvePrConflict", detour_title="Resolving Merge Conflicts in PRs", detour_path="detour-resolvePrConflict-fragment.md") }}
</div>
