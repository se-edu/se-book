{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} Can create a local Git repo</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.init.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
To be able to save snapshots of a folder using Git, **you must first put the folder under Git's control by initialising a Git _repository_** in that folder.
{% endcall %}

**Normally, we use Git to manage a revision history of a specific folder**, which gives us the ability to revision-control any file in that folder and its subfolders.

**To put a folder under the control of Git, we _initialise_ a {{ show_git_term('repository', 'repo', 'init')}} (short name: {{ show_git_term('repo') }})** in that folder. This way, we can initialise repos in different folders, to revision-control different clusters of files independently of each other %%e.g., files belonging to different projects%%.

{{ show_git_term_tip('repo', 'init') }}

You can follow the hands-on practical below to learn how to initialise a repo in a folder.

{% call callout() %}
{{ label('secondary', icon_hands_on + ' HANDS-ON') }} panels contain hands-on activities you can do as you learn Git. If you are new to Git, ==we strongly recommend that you do them yourself== (even if they appear straightforward), as hands-on usage will help you internalise the concepts and operations better.
{% endcall %}

{% call show_hands_on_practical("Initialise a git repo in a folder") %}

{{ hp_number('Preparation') }} **Choose a folder** to put under Git's control. The folder may or may not contain any files. For this practical, let us create a folder named `things` for this purpose.

  ```bash {.no-line-numbers}
  cd my-projects
  mkdir things
  ```

<box type="warning" seamless id="no-mixing-git-with-file-sync-software">

**Avoid putting Git repos inside cloud-synced (e.g., OneDrive, Dropbox) folders.** Reason: Multiple tools trying to detect/sync changes in the same folder can cause conflicts and unexpected behaviors.<br> If you want to access project files from multiple computers, use Git to do that (rather than cloud syncing tools).
</box>

{{ hp_number(1) }} **Then `cd` into it.**

```bash {.no-line-numbers}
cd things
```

{{ hp_number(2) }} **Run the `git status` command** to check the status of the folder.

```bash {.no-line-numbers}
git status
```
{% call show_output() %}
```{.no-line-numbers}
fatal: not a git repository (or any of the parent directories): .git
```
{% endcall %}
Don't panic. The error message is expected. It confirms that the folder currently does not have a Git repo.

{{ hp_number(3) }} **Now, initialise a repository** in that folder.

{{ show_git_tabs() }}

{% endcall %}

**Initialising a repo results in two things:**

* **First, Git now recognises this folder as a Git repository**, which means it can now help you track the version history of files inside this folder. {{ bold_number("a)") }}

{% call show_hands_on_practical('Verifying a folder is a Git repo') %}

To confirm, you can run the `git status` command. It should respond with something like the following:


```{.no-line-numbers}
git status
```
{% call show_output() %}
```{.no-line-numbers}
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
{% endcall %}

{{ icon_info }} Don't worry if you don't understand the output (we will learn about them later); what matters is that it no longer gives an error message as it did before.
{% endcall %}

* **Second, Git created a hidden subfolder named `.git`** inside the `things` folder. This folder will be used by Git to store metadata about this repository.{{ bold_number("b)") }}

<!--
{% call callout() %}
  {{ label('info', icon_under_the_hood + ' UNDER-THE-HOOD') }} panels explain how a certain Git feature works under the hood i.e., some implementation details.<br>
  They can be skipped the first time you are taking a tour. But we recommend that you delve into some of them at some point. Reason: While Git _can_ be used without knowing much about its internal workings, knowing those details will allow you to be more confident when using Git, and harness more of its awesome power.
{% endcall %}

{% call show_under_the_hood('How Git stores meta-data about the repository', indent_level=1) %}
Feel free to verify `.git` folder exists, as given below.
 <tabs>
  <tab header=":fas-terminal: Terminal">

You can use the _list all_ command `ls -a` to view all files, which should show the `.git` folder that was created by the `init` command.

```bash{.no-line-numbers highlight-lines="1['-a']"}
ls -a
```
{{ icon_output }}
```bash{.no-line-numbers highlight-lines="1['.git']"}
.  ..  .git
```
  </tab>
  <tab header=":fab-windows: Windows Explorer">

To see the hidden folders, you might have to [configure Windows Explorer to show hidden files](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5) first.
  </tab>
  <tab header=":fab-apple: MacOS Finder">

Press <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>.</kbd> to get Finder to show hidden folders/files inside the currently-selected folder.
  </tab>
</tabs>

You can even dig around inside that folder -- it is just a bunch of subfolders and files.
{% endcall %}
<p/>
-->

**A Git-controlled folder is divided into two main parts:**

1. **The repository** – stored in the hidden `.git` subfolder, which contains all the metadata and history.
2. **The {{ show_git_term('working directory') }}** – everything else in that folder, where you create and edit files.

</div>
<div id="extras">
<div tags="git-mastery">

{% call callout() %}
  {{ label('danger', icon_exercise + ' EXERCISE') }} panels contain a Git-Mastery exercise that you can download using the Git-Mastery app, and you can use the same app to verify that your solution is correct.
{% endcall %}
</div>

{% call show_exercise('under-control') %}
<box type="info" seamless>

When you download a Git-Mastery exercise, the output will tell you which directory you need to `cd` into, for you to start the exercise:

<pic src="images/gitmasteryDownloadOutput.png" />
<p/>
</box>

**Put the folder `under-control/control-me` under Git's control** (i.e., initialise a repository in the `control-me` folder).
{% endcall %}
<p/>

{% call callout() %}
{{ label('warning', icon_detour + ' DETOUR') }} panels contain related directions you can optionally explore. We recommend that you ==only skim them the first time you are going through a tour== (i.e., just to know _what_ each detour covers); you can revisit them later, to deepen your knowledge further, or when you encounter a use case related to the concepts covered by the detour.
{% endcall %}

{{ show_detour('undoRepoInit') }}

</div>
