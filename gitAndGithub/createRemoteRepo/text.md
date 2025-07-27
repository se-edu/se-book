{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can create a remote repo on GitHub</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.createRemoteRepo.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
The first step of backing up a local repo on GitHub: **create an empty repository on GitHub**.

{% endcall %}

**You can create a remote repository based on an existing local repository**, to serve as a remote copy of your local repo. For example, suppose you created a local repo and worked with it for a while, but now you want to upload it onto GitHub. The first step is to create an empty repository on GitHub.

{% call show_hands_on_practical('Creating an empty remote repo') %}

{{ hp_number ('1') }} **Login to your GitHub account and choose to create a new repo.** <br>
   <pic eager src="images/createNewRemoteRepo.png" width="150" />

{{ hp_number ('2') }} **In the next screen, provide a name for your repo** but #r#keep the `Initialize this repo ...` tick box unchecked##.<br>
   <pic eager src="images/fillNewRepoInfo.png" width="600" />

{{ hp_number ('3') }} **Note the URL of the repo.** It will be of the form<br> `https://github.com/{your_user_name}/{repo_name}.git`.<br>
   e.g., `https://github.com/johndoe/foobar.git` (note the `.git` at the end)<br>
   <pic eager src="images/newRepoUrl.png" width="450" />
{% endcall %}

</div>

<div id="extras">
{% call show_exercise("remote-control") %}
Run `gitmastery verify` and follow the prompted name to create a new public GitHub repository. Then, provide the URL of that remote (without the `.git` at the end) when prompted<br>
 e.g., `https://github.com/johndoe/gitmastery-johndoe-remote-control`

{% endcall %}
</div>
