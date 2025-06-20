{% from "common/macros.njk" import trail, show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can push to a remote repo</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.push.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Now, you can **update the remote repo with the revision history of the local repo**.
{% endcall %}

<div id="simple-push">

Given below is a scenario you can try in order to learn how to <trigger trigger="click" for="modal:githubPushing-rcsPushing">push</trigger> commits to a remote repo hosted on GitHub:

<modal large header="Project Management → Revision Control → Remote Repositories →" id="modal:githubPushing-rcsPushing">
  <include src="..\..\revisionControl\remoteRepositories\text.md#section-pushing"/>
</modal>

**1. Fork** an existing GitHub repo (e.g., [samplerepo-things](https://github.com/se-edu/samplerepo-things)) to your GitHub account.

**2. Clone the fork** (not the original) to your computer.

**3. Commit** some changes in your local repo.

**4. Push** the new commits to your fork on GitHub

{{ show_git_tabs('_1') }}


**5. Add a few more commits, and <trigger trigger="click" for="modal:push-tag">tag</trigger> some of them.**

<modal large header="Tools → Git and GitHub → `tag`: Naming commits" id="modal:push-tag">
  <include src="../tag/text.md"/>
</modal>

**6. Push the new commits ==_and_ the tags==.**

{{ show_git_tabs('_2') }}

</div>

<box>

****You can push to repos other than the one you cloned from****, as long as the target repo and your repo have a shared history.
1. <trigger trigger="click" for="modal:push-addRemoteForNormalPushing">Add the GitHub repo URL as a remote</trigger>, if you haven't done so already.
1. Push to the target repo.

<modal large header="Git & GitHub → Pull →" id="modal:push-addRemoteForNormalPushing">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

{{ show_git_tabs('_3') }}
</box>

<box>

****You can even push an entire local repository to GitHub****, to form an entirely new remote repository. For example, you created a local repo and worked with it for a while but now you want to upload it onto GitHub (as a backup or to share it with others). The steps are given below.

**1. Create an ==empty== remote repo on GitHub.**

1. Login to your GitHub account and choose to create a new Repo. <br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/createNewRemoteRepo.png" width="150" />

1. In the next screen, provide a name for your repo but keep the `Initialize this repo ...` tick box unchecked.<br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/fillNewRepoInfo.png" width="600" />

1. Note the URL of the repo. It will be of the form `https://github.com/{your_user_name}/{repo_name}.git`.<br>
   e.g., `https://github.com/johndoe/foobar.git` (note the `.git` at the end)<br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/newRepoUrl.png" width="450" />

**2. <trigger trigger="click" for="modal:push-addRemote">Add the GitHub repo URL as a remote</trigger>** of the local repo. You can give it the name `origin` (or any other name).

<modal large header="Git & GitHub → Pull →" id="modal:push-addRemote">
  <include src="../pull/text.md#section-working-with-multiple-remotes"/>
</modal>

**3. Push the repo** to the remote.

{{ show_git_tabs('_4') }}

</box>
</div>

<div id="extras">
</div>
