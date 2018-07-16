<div id="title">

#### Merge Conflicts

</div>

<span id="prereqs"><panel src="../branch/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Branching%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use Git to resolve merge conflicts</span>

<div id="body">

**1. Start a branch named `fix1` in a local repo. Create a commit** that adds a line with some text to one of the files.

**2. Switch back to `master` branch. Create a commit with a conflicting change** i.e. it adds a line with some different text in the exact location the previous line was added.

<img src="{{baseUrl}}/gitAndGithub/mergeConflicts/images/sourcetree_1.png" height="350" />
<p/>

**3. Try to merge the `fix1` branch onto the `master` branch.** Git will pause mid-way during the merge and report a merge conflict. If you open the conflicted file, you will see something like this:

```txt
COLORS
------
blue
<<<<<<< HEAD
black
=======
green
>>>>>>> fix1
red
white
```

**4. Observe how the conflicted part is marked** between a line starting with `<<<<<<< ` and a line starting with `>>>>>>>`, separated by another line starting with `=======`. 

This is the conflicting part that is coming from the `master` branch:

```txt

<<<<<<< HEAD
black
=======

```

This is the conflicting part that is coming from the `fix1` branch:

```txt

=======
green
>>>>>>> fix1

```

**5. Resolve the conflict by editing the file**. Let us assume you want to keep both lines in the merged version. You can modify the file to be like this:

```txt
COLORS
------
blue
black
green
red
white
```

**6. Stage the changes, and commit.**

</div>

<div id="extras">
</div>