<span id="prereqs"><panel src="../pull/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Tools → Git & GitHub → Pull%%" popup-url="{{ baseUrl }}/gitAndGithub/pull" /></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">`push`: Uploading data to other repos</span>

<div id="body">

<div id="simple-push">

Given below is a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubPushing-rcsPushing">push</trigger> commits to a remote repo hosted on GitHub:

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubPushing-rcsPushing">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-pushing"/>
</modal>

**1. Fork** an existing GitHub repo (e.g., [samplerepo-things](https://github.com/se-edu/samplerepo-things)) to your GitHub account.

**2. Clone the fork** (not the original) to your computer.

**3. Commit** some changes in your local repo.

**4. Push** the new commits to your fork on GitHub

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>

<p/>
</div>

**You can push to repos other than the one you cloned from**, as long as the target repo and your repo have a shared history.
1. <trigger trigger="click" for="modal:push-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger>, if you haven't done so already.
1. Push to the target repo.

<modal large header="Git & GitHub → Pull →" id="modal:push-addRemoteForNormalPushing">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

<tabs>
  <tab header="SourceTree">

Push your repo to the new remote the usual way, but select the name of target remote instead of `origin` and remember to select the `Track` checkbox.<br>
<img src="{{baseUrl}}/gitAndGithub/push/images/pushToRemote.png" width="470" />

  </tab>
  <tab header="CLI">

Push to the new remote the usual way  e.g., `git push upstream1 master` (assuming you gave the name `upstream1` to the remote).

  </tab>
</tabs>

<p/>

**You can even push an entire local repository** to GitHub, to form an entirely new remote repository. For example, you created a local repo and worked with it for a while but now you want to upload it onto GitHub (as a backup or to share it with others). The steps are given below.

**1. Create an ==empty== remote repo on GitHub.**

1. Login to your GitHub account and choose to create a new Repo. <br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/createNewRemoteRepo.png" width="150" />

1. In the next screen, provide a name for your repo but keep the `Initialize this repo ...` tick box unchecked.<br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/fillNewRepoInfo.png" width="600" />

1. Note the URL of the repo. It will be of the form `https://github.com/{your_user_name}/{repo_name}.git`.<br>
   e.g., `https://github.com/johndoe/foobar.git` (note the `.git` at the end)<br>
   <img src="{{baseUrl}}/gitAndGithub/push/images/newRepoUrl.png" width="450" />

**2. <trigger trigger="click" for="modal:push-addRemote">Add the GitHub repo URL as a remote</trigger>** of the local repo. You can give it the name `origin` (or any other name).

<modal large header="Git & GitHub → Pull →" id="modal:push-addRemote">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

**3. Push the repo** to the remote.

<tabs>
  <tab header="SourceTree">

<img src="{{baseUrl}}/gitAndGithub/push/images/pushToRemote.png" width="470" />

  </tab>
  <tab header="CLI">

Push each branch to the new remote the usual way ==but use the `-u` flag== to inform Git that you wish to <tooltip content="i.e., remember which branch in the remote repo corresponds to which branch in the local repo">track</tooltip> the branch.<br>
   e.g., `git push -u origin master`

  </tab>
</tabs>

</div>

<div id="extras">
</div>