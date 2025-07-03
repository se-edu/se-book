{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can create a remote repo on GitHub</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.remoteRepos.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
To back up your Git repo on the cloud, **you’ll need to use a _remote repository_ service, such as GitHub**.

{% endcall %}

**A repo you have on your computer is called a {{ show_git_term('local repo') }}. A {{ show_git_term('remote repo') }} is a repo hosted on a remote computer** and allows remote access. Some use cases for remote repositories:

* as a back of your local repo { texts="['a)', 'b)', 'c)']" }
* as an intermediary repo to work on the same files from multiple computers
* for sharing the revision history of a codebase among team members of a multi-person project

**It is possible to set up a Git remote repo on your own server**, but an easier option is to use a remote repo hosting service such as GitHub.

**GitHub is a web-based services that host Git repositories and add collaboration features** on top of Git. Two other similar platforms are GitLab or Bitbucket. While Git manages version control locally, these platforms make it easier for individuals and teams to work together by providing shared access to repositories, issue tracking, pull requests, and permission controls. They are widely used in both open-source and commercial software development. Here we'll be GitHub.

**A Git repo can be put in one of two spaces:**

* **A {{ show_git_term("GitHub user acccount") }} represents an individual user.** It is created when you sign up for GitHub and includes a username, profile page, and personal settings. With a user account, you can create your own repositories, contribute to others’ projects, and manage collaboration settings for any repositories you own.
* **A {{ show_git_term("GitHub organisation") }} ({{ show_git_term("org") }} for short) is a shared account used by a group** such as a team, company, or open-source project. Organisations can own repositories and manage access to them through teams, roles, and permissions. Organisations are especially useful when managing repositories with shared ownership or when working at scale.

Every GitHub user must have a user account, even if they primarily work within an organisation.
</div>

<div id="extras">
</div>
