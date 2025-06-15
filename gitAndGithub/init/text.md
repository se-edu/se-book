{% from "common/macros.njk" import bold_number, callout, hp_number, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="outcomes">{{ icon_outcome }} Can create a local Git repo</span>

<span id="title">Putting a Folder Under Git's Control</span>

<div id="body">
{% call show_lesson_intro() %}
To be able to save snapshots of a folder using Git, **you must first put the folder under Git's control by initialising a Git _repository_** in that folder.
{% endcall %}

**Normally, we use Git to manage a version history of a specific folder**, which gives us the ability to version-control any file in that folder and its subfolders.

**To put a folder under the control of Git, we _initialise a repository_ (short name: repo)** in that folder. This way, we can initialise repos in different folders, to version-control different clusters of files independently of each other %%e.g., files belonging to different projects%%.

You can follow the hands-on practical below to learn how to initialise a repo in a folder.

{% call show_hands_on_practical("Initialise a git repo in a folder") %}

{{ hp_number(1) }} **First, choose a folder.** The folder may or may not have any files in it already. For this practical, let us create a folder named `things` for this purpose.

  ```bash {.no-line-numbers}
  cd my-projects
  mkdir things
  ```

{{ hp_number(2) }} **Then CD into it.**

```bash {.no-line-numbers}
cd things
```

{{ hp_number(3) }} **Run the `git status` command** to check the status of the folder.

```bash {.no-line-numbers}
git status
```
{% call show_output() %}
```{.no-line-numbers}
fatal: not a git repository (or any of the parent directories): .git
```
{% endcall %}
Don't panic. The error message is expected. It confirms that the folder currently does not have a Git repo.

{{ hp_number(4) }} **Now, initialise a repository** in that folder.

{{ show_git_tabs() }}

{% endcall %}

**The `init` command that you ran resulted in two things:**

* **First, Git now recognises this folder as a Git repository**, which means it can now help you track the version history of files inside this folder. To confirm, you can run the `git status` command. It should respond with something like the following: {{ bold_number("a)") }}

<div class="indented-level1">

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

{{ icon_info }} Don't worry if you don't understand the output (we will learn about them in another lesson); all you need to notice is that it no longer gives an error message as it before.
</div>

* **Second, Git created a hidden subfolder named `.git`** inside the `things` folder. This folder will be used by Git to store meta-data about this repository.{{ bold_number("b)") }}

{% call callout() %}
  <span class="badge bg-info text-white">:fas-wrench: UNDER-THE-HOOD</span> panels explain how a certain Git feature works under the hood i.e., some implementation details.<br>
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

Press <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>.</kbd> to get Finder to show hidden folders/files.
  </tab>
</tabs>

You can even dig around inside that folder -- it is just a bunch of subfolders and files.
{% endcall %}
<p/>

**A Git-controlled folder is divided into two main parts:**

1. **The repository** – stored in the hidden `.git` subfolder, which contains all the metadata and history.
2. **The working folder** – everything else in that folder, where you create and edit files.

</div>
<div id="extras">

{{ show_exercise('under-control') }}
<p/>

{% call callout() %}
Detours are related directions you can optionally explore. We recommend that you ==only skim them the first time you are going through a tour== (i.e., just to know _what_ each detour covers); you can revisit them later, to deepen your knowledge further, or when you encounter a use case related to the concepts covered by the detour.
{% endcall %}

{% call show_detour('How to undo a repo initialisation') %}
When Git initialises a repo in a folder, it does not touch any files in the folder, other than create the `.git` folder its contents. So, reversing the operation is as simple as deleting the newly-created `.git` folder.

```bash{.no-line-numbers}
git status #run this to confirm a repo exists

rm -rf .git  #delete the .git folder

git status #this should give an error, as the repo no longer exists
```
{% endcall %}
</div>
