{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}


<span id="prereqs"></span>
<span id="outcomes">Able to write full Git commit messages.</span>
<span id="title">{{ trail.fineTuningHistory.lessons.commitMessage.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Detailed and well-written **commit messages can increase the value of Git revision history**.
{% endcall %}

**Every commit you make in Git also includes a {{ show_git_term("commit message") }} that explains the change.** While one-line messages are fine for small or obvious changes, as your revision history grows, good commit messages become an important source of information — for example, to understand the rationale behind a specific change made in the past.

**A commit message is meant to explain the intent behind the changes, not just what was changed.** The code (or diff) already shows what changed. Well-written commit messages make collaboration, code reviews, debugging, and future maintenance easier by helping you and others quickly understand the project’s history without digging into the code of every commit.

**A complete commit message can include a short summary line (the {{ show_git_term("subject") }}) followed by a more detailed {{ show_git_term("body") }} if needed.** The subject line should be a concise description of the change, while the body can elaborate on the context, rationale, side effects, or other details if the change is more complex.

**A commit message has the following structure** (note how the subject and the body are separated by a blank line):
```bash{highlight-lines="2"}
Subject line
<blank line>
Body

# lines starting with '#' are ignored (they will not be included in the commit message)
```

Here is an example commit message:

```
Find command: make matching case-insensitive

Find command is case-sensitive.

A case-insensitive find is more user-friendly because users cannot be
expected to remember the exact case of the keywords.

Let's,
* update the search algorithm to use case-insensitive matching
* add a script to migrate stress tests to the new format
```
<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Add a full commit message")  %}

**Do some changes** to a repo you have.<br>
**Commit the changes while writing a full commit message** (i.e., subject + body).

{% set cli %} <!-- ------ start: Git Tabs --------------->
When you are ready to commit, use the `git commit` command (without specifying a commit message).
```bash
git commit
```
This will open your default text editor (like Vim, Nano, or VS Code). Write the commit message inside the editor.

Save and close the editor to create the commit.

{% endset %}
{% set sourcetree %}

You can write your full commit message in the textbox you have been using to write commit messages already.

<pic src="images/sourcetreeCommitDialog.png" />
{% endset %}
{{ show_git_tabs_from_text(cli, sourcetree) }}
<!-- ------ end: Git Tabs -------------------------------->


{% endcall %}<!-- ===== end: HANDS-ON ============================ -->

**Following a style guide makes your commit messages more consistent and fit-for-purpose.** Many teams adopt established guidelines. These style guides typically contain common conventions that Git users follow when writing commit messages. For example:
* Keep the subject line (the first line) under 50–72 characters.
* Write the subject in the imperative mood (e.g., `Fix typo in README` rather than `Fixed typo` or `Fixes typo`).
* Leave a blank line between the subject and the body, if you include a body.
* Wrap the body at around 72 characters per line for readability.

{% call show_protip("Configure Git to use your preferred text editor") %}

**Git will use the default text editor when it needs you to write a commit message.** However, Git can be configured to use a different text editor of your choice.

<div class="non-printable">

You can use the following command to set the Git's default text editor:

```bash
git config --global core.editor "<editor command>"
```

Some examples for `<editor command>`

| Editor       | Command to use
|--------------|---------------------------
| Vim (default) | `vim`
| Nano         | `nano`
| VS Code      | `code --wait` e.g., `git config --global core.editor "code --wait"`
| Sublime Text | `subl -n -w`
| Atom         | `atom --wait`
| Notepad++    | `notepad++.exe` (Windows only)
| Notepad      | `notepad` (Windows built-in)

{{ icon_info }} **Why use `--wait` or `-w`?** Graphical editors (like VS Code or Sublime) start a separate process, which can take a few seconds. Without `--wait`, Git may think editing is done before you actually write the message. `--wait` makes Git pause until the editor window is closed.
</div>
{% endcall %}
</div>

<div id="extras">
{% call show_resources() %}
* Recommended style guide for Git commit messages: **[Git Conventions @se-edu/guides ](https://se-education.org/guides/conventions/git.html)**
{% endcall %}
</div>
