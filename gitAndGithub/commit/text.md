{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can commit using Git</span>

<span id="title">`commit`: Saving changes to history</span>

<div id="body">

**After initializing a repository, Git can help you with revision controlling files inside the _working directory_. However, it is not automatic.** It is up to you to tell Git which of your changes (aka _revisions_) should be _committed_ to its memory for later use. Saving changes into Git's memory in that way is often called _committing_ and a change saved to the revision history is called a _commit_.

Here are the steps you can follow to learn how to work with Git commits:

**1. Do some changes to the content inside the _working directory_** e.g., create a file named `fruits.txt` in the `things` directory and add some dummy text to it.

**2. Observe how the file is detected by Git.**

{{ show_git_tabs('_1') }}

**3. Stage the changes to commit**: Although Git has detected the file in the working directory, it will not do anything with the file unless you tell it to. Suppose you want to commit the current changes to the file. First, you should _stage_ the file.

{{ show_git_tabs('_2') }}

**4. Commit** the staged version of `fruits.txt`.

{{ show_git_tabs('_3') }}

**Note the existence of something called the `master` branch.** Git allows you to have multiple branches (i.e. it is a way to evolve the content in parallel) and Git auto-creates a branch named `master` on which the commits go on by default.

{{ show_git_tabs('_4') }}

**5. Do a few more commits**.

1. Make some changes to `fruits.txt` (e.g. add some text and delete some text). Stage the changes, and commit the changes using the same steps you followed before. You should end up with something like this.

   <pic src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_6.png" height="180" />
   <p/>

1. Next, add two more files `colors.txt` and `shapes.txt` to the same working directory. Add a third commit to record the current state of the working directory.

   <pic src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_7.png" height="150" />
   <p/>

   <box type="tip" seamless>

    **You can decide what to stage and what to leave unstaged.** When staging changes to commit, you can leave some files unstaged, if you wish to not include them in the next commit. In fact, Git even allows some changes in a file to be staged, while others changes in the same file to be unstaged. This flexibility is particularly useful when you want to put all related changes into a commit while leaving out unrelated changes.
   </box>

**6. See the revision graph:**  Note how commits form a path-like structure aka the _revision tree/graph_. In the revision graph, each commit is shown as linked to its 'parent' commit (i.e., the commit before it).

{{ show_git_tabs('_5') }}

</div>

<div id="extras">
</div>
