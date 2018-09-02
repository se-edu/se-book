<div id="title">

#### Branch

</div>

<span id="prereqs"><panel src="../../revisionControl/branching/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Project Management → Revision Control → Branching%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use Git branching</span>

<div id="body">

**0. Observe that you are normally in the branch called `master`.** For this, you can take any repo you have on your computer (e.g. a clone of the [samplerepo-things](https://github.com/se-edu/samplerepo-things)). 

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_0.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_0.md" />
  <hr></tab>
</tabs>

**1. Start a branch named `feature1` and switch to the new branch.**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  <hr></tab>
</tabs>

**2. Create some commits in the new branch.** %%Just commit as per normal. Commits you add while on a certain branch will become part of that branch.%%

**3. Switch to the `master` branch.** Note how the changes you did in the `feature1` branch are no longer in the working directory.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  <hr></tab>
</tabs>

**4. Add a commit to the master branch.** Let’s imagine it’s a bug fix.

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_4.png" height="100" />
<p/>

**5. Switch back to the `feature1` branch** %%(similar to step 3)%%.

**6. Merge the `master` branch to the `feature1` branch**, giving an end-result like the below. Also note how Git has created a _merge commit_.

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_5.png" height="120" />
<p/>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_3.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_3.md" />
  <hr></tab>
</tabs>

Observe how the changes you did in the `master` branch (i.e. the imaginary bug fix) is now available even when you are in the `feature1` branch.

**7. Add another commit to the `feature1` branch.**

**8. Switch to the `master` branch and add one more commit.**

**9. Merge `feature1` to the master branch**, giving and end-result like this:

<img src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_6.png" height="150" />
<p/>

<tabs>
  <tab header="SourceTree">
  
Right-click on the `feature1` branch and choose `Merge...`. 
    
  <hr></tab>
  <tab header="CLI">
  
```
git merge feature1
```
    
  <hr></tab>
</tabs>

**10. Create a new branch called `add-countries`, switch to it, and add some commits to it** %%(similar to steps 1-2 above)%%. You should have something like this now:

<img src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchBeforeMerging.png" height="80" />
<p/>

**11. Go back to the `master` branch and merge the `add-countries` branch onto the `master` branch** %%(similar to steps 8-9 above)%%. While you might expect to see something like the below,

<img src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchNoFastForward.png" height="100" />
<p/>

... you are likely to see something like this instead:

<img src="{{baseUrl}}/gitAndGithub/branch/images/addCountriesBranchAfterMerging.png" height="80" />
<p/>

That is because **Git does a ==_fast forward_ merge== if possible**. Seeing that the `master` branch has not changed since you started the `add-countries` branch, Git has decided it is simpler to just put the commits of the `add-countries` branch in front of the `master` branch, without going into the trouble of creating an extra merge commit. 

**It is possible to force Git to create a merge commit even if fast forwarding is possible.**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_4.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_4.md" />
  <hr></tab>
</tabs>

</div>

<div id="extras">
</div>