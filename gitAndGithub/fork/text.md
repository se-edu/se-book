{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">Can fork a repo on GitHub.</span>
<span id="title">{{ trail.workingWithRemotes.lessons.fork.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
GitHub allows you to **create a remote copy of another remote repo, called _forking_**.
{% endcall %}

**A {{ show_git_term("fork") }} is a copy of a remote repository** created on the same hosting service such as GitHub, GitLab, or Bitbucket. On GitHub, you can fork a repository from another user or organisation into your own space (i.e., your user account or an organisation you have sufficient access to). {{ show_git_term("Forking") }} is particularly useful if you want to experiment with a repo but don’t have write permissions to the original -- you can fork it and work on your own remote copy without affecting the original repository.

<!-- ================== start: HANDS-ON =========================== -->
{% call show_hands_on_practical("Forking a repo on GitHub")  %}

{{ hp_number(hop_preparation) }} **Create a GitHub account if you don't have one yet.**

{{ hp_number('1') }}  **Go to the GitHub repo you want to fork** e.g., [samplerepo-things](https://github.com/se-edu/samplerepo-things)

{{ hp_number('2') }} **Click on the <pic eager src="images/fork.png" height="30" /> button** in the top-right corner. In the next step,
  * choose to fork to your own account or to another GitHub organization that you are an admin of.
  * ==un-tick the <code>[ ] Copy the master branch only</code> option==, so that you get copies of other branches (if any) in the repo.
{% endcall %}<!-- ===== end: HANDS-ON ============================ -->


<box type="important" seamless>

**Forking is not a Git feature**, but a feature provided by hosted Git services like GitHub, GitLab, or Bitbucket.
</box>
<box type="info" seamless>

GitHub does not allow you to fork the same repo more than once to the same destination. If you want to re-fork, you need to delete the previous fork.
</box>

</div>

<div id="extras">
{% call show_exercise("fork-repo") %}
Fork the repo https://github.com/git-mastery/gm-shapes to your GitHub account, while retaining the original repo name `gm-shapes`.
{% endcall %}
</div>
