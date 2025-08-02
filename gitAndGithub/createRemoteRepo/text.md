{% from "common/macros.njk" import trail, bold_number, button_green, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

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
   <pic eager src="images/createNewRemoteRepo.png" width="250" />

{{ hp_number ('2') }} **In the next screen, provide a name for your repo**. Refer the screenshot below on some guidance on how to provide the required information.<br>
   <pic eager src="images/fillNewRepoInfo.png" width="650" /><br>
   **Click {{ button_green("Create repository") }} button** to create the new repository.

<box type="warning" seamless>

If you enable any of the three `Add _____` options shown above, GitHub will not only create a repo, but will also initialise it with some initial content. That is not what we want here. To create an empty remote repo, keep those options disabled.
</box>

{{ hp_number ('3') }} **Note the URL of the repo.** It will be of the form<br> `https://github.com/{your_user_name}/{repo_name}.git`.<br>
   e.g., `https://github.com/johndoe/foobar.git` (note the `.git` at the end)<br>
   <pic eager src="images/newRepoUrl.png" width="600" />
{% endcall %}

</div>

<div id="extras">
{% call show_exercise("remote-control", has_verify=0) %}
1. Run `gitmastery verify`.
1. Take note of the repo name provided by Git-Mastery app (in its response).
1. Create a new public GitHub repository using the repo name given.
1. Provide the URL of that remote (without the `.git` at the end) when prompted<br>
 e.g., `https://github.com/johndoe/gitmastery-johndoe-remote-control`

{% endcall %}
</div>
