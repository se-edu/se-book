<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github &rarr; </div>

<div id="title">

#### Merge Conflicts :three:

</div>

<div id="body">

1. Start a branch named `fix1` in a local repo. Create a commit that adds a line with some text to one of the files.

2. Switch back to `master` branch. Create a commit that adds a line with some different text in the exact location the previous line was added.

<img src="{{baseUrl}}/gitAndGithub/mergeConflicts/images/sourcetree_1.png" height="350" />
<p/>

3. Try to merge the branch. Git will report a merge conflict. If you open the conflicted file, you will see something like this:

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
white```
The conflicted part is marked between a line starting with `<<<<<<< ` and a line starting with `>>>>>>>`. Let us assume you want to keep both lines in the merged version. You can modify the file like this.
```txt
COLORS
------
blue
black
green
red
white
```

Now, stage the changes, and commit.

</div>

<div id="extras">
<div>

</div>
