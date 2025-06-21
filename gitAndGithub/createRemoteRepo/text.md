{% from "common/macros.njk" import trail, show_git_tabs, show_hands_on_practical, show_lesson_intro with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can create a remote repo on GitHub</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.createRemoteRepo.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
One way to get started is by **creating an empty repository on GitHub**.

{% endcall %}

****You can push an entire local repository to GitHub****, to form an entirely new remote repository. For example, you created a local repo and worked with it for a while but now you want to upload it onto GitHub (as a backup or to share it with others). The steps are given below.

**1. Create an ==empty== remote repo on GitHub.**

1. Login to your GitHub account and choose to create a new Repo. <br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/createNewRemoteRepo.png" width="150" />

1. In the next screen, provide a name for your repo but keep the `Initialize this repo ...` tick box unchecked.<br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/fillNewRepoInfo.png" width="600" />

1. Note the URL of the repo. It will be of the form `https://github.com/{your_user_name}/{repo_name}.git`.<br>
   e.g., `https://github.com/johndoe/foobar.git` (note the `.git` at the end)<br>
   <pic eager src="{{baseUrl}}/gitAndGithub/push/images/newRepoUrl.png" width="450" />




</div>

<div id="extras">
</div>
