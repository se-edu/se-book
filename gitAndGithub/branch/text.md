<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github :arrow_right: </div>

<div id="title">

#### Branch :two:

</div>

<div id="body">

<dynamic-panel src="../../revisionControl/branching/embed.md" header="Revision Control: Branching" is-open></dynamic-panel>
<p/>

Take any repo you have on your computer. Observe that you are in the branch called `master`.

1. Start branch named `feature1` and switch to the new branch.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  </tab>
</tabs>

2. Create some commits in the new branch.

3. Switch to master and note how the changes you did in the `feature1` branch are no longer in the working directory.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  </tab>
</tabs>

4. Add a commit to the master branch. Let’s imagine it’s a bug fix.

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_4.png" height="100" />
<p/>

5. Switch back to the branch `feature1`

6. To get the bug fix in the `master` branch to the `feature1` branch, merge the `master` branch to the `feature1` branch, be like this:

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" />
<p/>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_3.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_3.md" />
  </tab>
</tabs>

7. Add another commit to the `feature1` branch

8. Switch to the `master` branch and add one more commit.

9. Merge `feature1` to the master branch.

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_6.png" height="150" />
<p/>

{show a more intuitive version of the graph}

{mention fastforwarding}

</div>

</div>
