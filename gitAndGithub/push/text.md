<span id="prereqs"><panel src="../pull/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Pull%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<div id="title">

#### Push

</div>

<div id="body">

1. Create a GitHub account if you don't have one yet.
1. Fork the [samplerepo-things](https://github.com/se-edu/samplerepo-things) to your GitHub account:

   <panel type="seamless" header="%%How to fork a repo?%%">
    
    Navigate to the  on GitHub and click on the <img src="{{baseUrl}}/gitAndGithub/push/images/fork.png" height="30" /> button on the top-right corner.
    
   </panel><p/>

2. Clone the fork (not the original) to your computer.
3. Create some commits in your repo.
4. Push the new commits to your fork on GitHub

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli.md" />
  <hr></tab>
</tabs>

**To push an existing local repo into a new remote repo on GitHub**, first you need to create an empty remote repo on GitHub.

1. Login to your GitHub account and choose to create a new Repo. <br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/createNewRemoteRepo.png" width="150" />

1. In the next screen, provide a name for your repo but keep the `Initialize this repo ...` tick box unchecked.<br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/fillNewRepoInfo.png" width="600" />

1. Note the URL of the repo. It will be of the form `https://github.com/{your_user_name}/{repo_name}.git`<br>
   e.g., `https://github.com/johndoe/foobar.git`<br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/newRepoUrl.png" width="450" />

Next, you can push the existing local repo to the new remote repo as follows:

<tabs>
  <tab header="SourceTree">

1. Open the local repo in SourceTree.
1. Choose `Repository` → `Repository Settings` menu option.
1. Add a new _remote_ to the repo with the following values.
   * `Remote name`: the name you want to assign to the remote repo. Recommended `origin`
   * `URL/path`: the URL of your repo (ending in `.git`) that you collected earlier.
   * `Username`: your GitHub username<br>
     <img src="{{baseUrl}}/gitAndGithub/push/images/fillRemoteInfoForSourceTree.png" width="450" />
1. Now you can push your repo to the new remote the usual way.<br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/pushToRemote.png" width="470" />

  <hr></tab>
  <tab header="CLI">

1. Navigate to the folder containing the local repo.
1. Set the new remote repo as a _remote_ of the local repo.<br>
   command: `git remote add {remote_name} {remote_repo_url}`<br>
   e.g., `git remote add origin https://github.com/johndoe/foobar.git`
1. Push to the new remote the usual way. You can use the `-u` flag to inform Git that you wish to <tooltip content="i.e., remember which branch in the remote repo corresponds to which branch in the local repo">track</tooltip> the branch.<br>
   e.g., `git push -u origin master`

  <hr></tab>
</tabs>

</div>

<div id="extras">
</div>