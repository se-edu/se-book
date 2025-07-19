{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise,show_folder_columns, show_folder_contents, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} Can stage files</span>
<span id="title">{{ trail.recordingFolderHistory.lessons.stage.title }}</span>

<div id="body">

{% call show_lesson_intro() %}

To save a snapshot, **you start by specifying what to include in it, also called _staging_**.
{% endcall %}

**Git considers new files that you add to the working directory as {{ show_git_term("'untracked'") }}** i.e., Git is aware of them, but they are not yet under Git's control. The same applies to files that existed in the working folder at the time you initialised the repo.

**A Git repo has an internal space called the {{ show_git_term('staging area') }} which it uses to build the next snapshot**. Another name for the staging area is the {{ show_git_term('index') }}).

**We can {{ show_git_term('stage', 'stage') }}) an untracked file** to tell Git that we want its current version to be included in the next snapshot. Once you stage an untracked file, it becomes {{ show_git_term("'tracked'") }} (i.e., under Git's control).

{{ show_git_term_tip('stage', 'stage') }}

In the example below, you can see how staging files change the status of the repo as you from (a) to (c).

{{ show_folder_columns('folder-staging-after-init-fragment.md') }}

{% call show_hands_on_practical("Adding untracked files") %}

{{ hp_number(1) }} **First, add a file** (e.g., `fruits.txt`) to the `things` folder.

<box type="tip" seamless>

Here is an easy way to do that with a single terminal command.

```bash {.no-line-numbers }
echo "apples\nbananas\ncherries\n" > fruits.txt
```
{% call show_output() %}
```txt {heading="things/fruits.txt"}
apples
bananas
cherries
```
{% endcall %}
</box>

{{ hp_number(2) }} **Stage the new file**.

{{ show_git_tabs('-stage-new-file-fragment') }}

{% endcall %}


**If you modify a staged file, it goes into the {{ show_git_term("'modified'") }} state** i.e., the file contains modifications that are not present in the copy that is waiting (in the staging area) to be included in the next snapshot. If you wish to include these new changes in the next snapshot, you need to stage the file again, which will overwrite the copy of the file that was previously in the staging area.<br>
The example below shows how the status of a file changes when it is modified _after_ it was staged.

{{ show_folder_columns('folder-change-after-staging-fragment.md') }}

{% call show_hands_on_practical("Re-staging 'modified' files") %}

{{ hp_number('1') }} **First, add another line to `fruits.txt`**, to make it 'modified'.
<div class="indented-level1">

<box type="tip" seamless>

Here is a way to do that with a single terminal command.

```bash {.no-line-numbers }
echo "dragon fruits" >> fruits.txt
```
{% call show_output() %}

```txt {heading="things/fruits.txt" highlight-lines="4"}
apples
bananas
cherries
dragon fruits
```
{% endcall %}
   </box>
</div>

{{ hp_number('2') }} **Now, verify that Git sees that file as 'modified'.**

{{ show_git_tabs('-verify-file-modified-fragment', indent_level=1) }}

{{ hp_number('3') }} **Stage the file again**, the same way you added/staged it earlier.

{{ hp_number('4') }} **Verify that Git no longer sees it as 'modified'**, similar to step 2.

{% endcall %}


**Git does not track empty folders**. You can test this by adding an empty subfolder inside the `things` folder (e.g., `things/more-things` and checking if it shows up as 'untracked' (it will not). If you add a file to that folder (e.g., `things/more-things/food.txt`) and then staged that file (e.g., `git add more-things/food.txt`), the folder will now be included in the next snapshot.

</div>

<div id="extras">
{% call show_exercise("stage-fright") %}
The `attendance` repo has three unstaged files. Stage them.
{% endcall %}

<include src="detour-stage-file-deletions-fragment.md" />
<include src="detour-undo-staging-fragment.md" />
</div>
