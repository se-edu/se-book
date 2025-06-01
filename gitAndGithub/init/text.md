{% from "common/macros.njk" import show_git_tabs, show_hands_on_practical, show_lesson_overview with context %}

<span id="outcomes">{{ icon_outcome }} Can create a local Git repo</span>

<span id="title">`init`: Getting started</span>

<div id="body">
{% call show_lesson_overview() %}
To be able to save snapshots of a folder using Git, we must first initialise a Git _repository_ (short name: _repo_) in that folder.
{% endcall %}

You can follow the hands-on practical below to learn how to initialise a repo in a folder.

{% call show_hands_on_practical("Initialise a Git repo in a folder") %}

**1. First, choose a folder.** The folder may or may not have any files in it already. For this practical, let us create a folder named `things` for this purpose.

```bash {.no-line-numbers}
$ cd my-projects
$ mkdir things
```

**2. Then CD into it.**

```bash {.no-line-numbers}
cd things
```

**3. Run the `git status` command** to check the status of the folder.

```bash {.no-line-numbers}
$ git status
```
{{ icon_output }}
```{.no-line-numbers}
fatal: not a git repository (or any of the parent directories): .git
```
Don't panic. The error message is expected. It confirms that the folder currently does not have a Git repo.

**4. Now, initialise a repository** in that folder.

{{ show_git_tabs() }}

{% endcall %}

**The `init` command that you ran resulted in two things:**

**a) First, Git now recognises this folder as a Git repository**, which means it can now help you track the version history of files inside this folder. To confirm, you can run the `git status` command. It should respond with something like the following:

```{.no-line-numbers}
$ git status
```
{{ icon_output }}
```{.no-line-numbers}
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
{{ icon_info }} Don't worry if you don't understand the output (we will learn about them in another lesson); all you need to notice is that it no longer gives an error message as it before.

**b) Second, Git created a hidden subfolder named `.git`** inside the `things` folder. This folder will be used by Git to store meta-data about this repository. Feel free to verify it exists, as given below.

<tabs>
  <tab header=":fas-terminal: Terminal">

You can use the _list all_ command `ls -a` to view all files, which should show the `.git` folder that was created by the `init` command.

```{.no-line-numbers highlight-lines="1['-a']"}
$ ls -a
```
{{ icon_output }}
```{.no-line-numbers highlight-lines="1['.git']"}
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

**A Git-controlled folder is divided into two main parts:**

1. **The repository** – stored in the hidden `.git` subfolder, which contains all the metadata and history.
2. **The working folder** – everything else in that folder, where you create and edit files.

</div>
<div id="extras">
</div>
