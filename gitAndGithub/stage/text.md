{% from "common/macros.njk" import show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="outcomes">{{ icon_outcome }} Can stage files</span>
<span id="title">Specifying What to include in a Snapshot</span>

<div id="body">

{% call show_lesson_intro() %}

To save a snapshot, **you start by specifying what to include in it, also called _staging_**.
{% endcall %}

**Git considers new files that you add to the working folder as 'untracked'** i.e., Git is aware of them, but they are not yet under Git's control. The same applies to files that existed in the working folder at the time you initialised the repo.

**We can 'add' (also called _staging_) untracked files to tell Git that we want them to be 'tracked' by Git** (i.e., to be under Git's control), as shown in the following hands-on practical.

{% call show_hands_on_practical("Adding untracked files") %}

First, let us add a file (e.g., `fruits.txt`) to the `things` folder.

<box type="tip" seamless>

Here is an easy way to do that with a single terminal command.

```bash {.no-line-numbers }
$ echo "apples\nbananas\ncherries\n" > fruits.txt
```
{{ icon_output }} %%(creates the following file)%%

```txt {heading="things/fruits.txt"}
apples
bananas
cherries
```

</box>

{{ show_git_tabs('_1') }}

{% endcall %}

**Adding/staging a new file results in two things:**

1. **The file is puts under Git's control** i.e., the file is now 'tracked', no longer 'untracked'.
2. **The current version of the file will be included in the next snapshot** of the folder.<br>
   Consequently, **a copy of the current version of the file is put in the _staging area_** (a space that exists inside the `.git` folder).
   <box type="tip" seamless>

   The _staging area_ is also called the _index_.
   </box>

**If you modify a staged file, it goes into the 'modified' state** i.e., the file contains modifications that are not present in the copy that is waiting (in the staging area) to be included in the next snapshot. If you wish to include these new changes in the next snapshot, you need to add/stage the file again, which will overwrite the copy of the file that was previously in the staging area.

{% call show_hands_on_practical("Re-staging 'modified' files") %}

1. **First, add another line to `fruits.txt`**, to make it 'modified'.

   <box type="tip" seamless>

   Here is a way to do that with a single terminal command.

   ```bash {.no-line-numbers }
   $ echo "dragon fruits" >> fruits.txt
   ```
   {{ icon_output }} %%(appends texts to the file as follows)%%

   ```txt {heading="things/fruits.txt" highlight-lines="4"}
   apples
   bananas
   cherries
   dragon fruits
   ```
   </box>

2\. **Now, verify that Git sees that file as 'modified'.**

{{ show_git_tabs('_2', indent_level=1) }}

3. **Stage the file again**, the same way you added/staged it earlier.
4. **Verify that Git no longer sees it as 'modified'**, similar to step 2.

{% endcall %}


**Git does not empty track folders**. You can test this by adding an empty subfolder inside the `things` folder (e.g., `things/more-things` and checking if it shows up as 'untracked' (it will not). If you add a file to that folder (e.g., `things/more-things/food.txt`) and then staged that file (e.g., `git add more-things/food.txt`), the folder will now be included in the next snapshot.

</div>

<div id="extras">
</div>
