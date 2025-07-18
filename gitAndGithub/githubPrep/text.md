{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_prep, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can the computer to work with a GitHub account</span>

<span id="title">{{ trail.backingUpOnCloud.lessons.githubPrep.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
To use GitHub, **you need to sign up for an account, and configure related tools/settings** first.
{% endcall %}

**GitHub is a web-based services that host Git repositories and add collaboration features** on top of Git. Two other similar platforms are GitLab or Bitbucket. While Git manages version control locally, these platforms make it easier for individuals and teams to work together by providing shared access to repositories, issue tracking, pull requests, and permission controls. They are widely used in both open-source and commercial software development. Here we'll be GitHub.

**On GitHub, a Git repo can be put in one of two spaces:**

* **A {{ show_git_term("GitHub user acccount") }} represents an individual user.** It is created when you sign up for GitHub and includes a username, profile page, and personal settings. With a user account, you can create your own repositories, contribute to others’ projects, and manage collaboration settings for any repositories you own.
* **A {{ show_git_term("GitHub organisation") }} ({{ show_git_term("org") }} for short) is a shared account used by a group** such as a team, company, or open-source project. Organisations can own repositories and manage access to them through teams, roles, and permissions. Organisations are especially useful when managing repositories with shared ownership or when working at scale.

**Every GitHub user must have a user account**, even if they primarily work within an organisation.

{% call show_prep("Create a GitHub account") %}
**Create a personal GitHub account** as described in [GitHub Docs → Creating an account on GitHub](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github), if you don't have one yet.

<box type="tip" seamless>

**Choose a sensible GitHub username** as you are likely to use it for years to come in professional contexts e.g., in job applications.
</box>

**[Optional, but recommended] Set up your GitHub profile**, as explained in [GitHub Docs → Setting up your profile](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile).
{% endcall %}<!-- show_prep GitHub account -->

**Before you can interact with GitHub from your local Git client, you need to set up authentication.**  In the past, you could simply enter your GitHub username and password, but GitHub no longer accepts passwords for Git operations. Instead, you’ll use a more secure method — such as a Personal Access Token (PAT) or SSH keys — to prove your identity.

<box type="info" seamless>

A {{ show_git_term("Personal Access Token (PAT)") }} is essentially a long, random string that acts like a password, but it can be scoped to specific permissions (e.g., read-only or full access) and revoked at any time. This makes it more secure and flexible than a traditional password.
</box>

**Git supports two main protocols for communicating with GitHub: HTTPS and SSH.**

* **With HTTPS, you connect over the web** and authenticate using your GitHub username and a Personal Access Token.
* **With SSH, you connect using a cryptographic key pair** you generate on your machine. Once you add your public key to your GitHub account, GitHub recognises your machine and lets you authenticate without typing anything further.

{% call show_prep("Set up authentication with GitHub") %}

Set up your computer's GitHub authentication, as described in the se-edu guide [Setting up GitHub Authentication](https://se-education.org/guides/tutorials/githubAuthentication.html).

{% endcall %}<!-- show_prep GitHub authentication -->


**GitHub associates a commit to a user based on the email address in the commit metadata.** When you push a commit, GitHub checks if the email matches a verified email on a GitHub account. If it does, the commit is shown as authored by that user. If the email doesn’t match any account, the commit is still accepted but won’t be linked to any profile.

**GitHub provides a no-reply email** (e.g., `12345678+username@users.noreply.github.com`) that you can use as your Git `user.email` to hide your real email while still associating commits with your GitHub account.

{% call show_prep("[Optional] Configure `user.email` to use the no-reply email from GitHub") %}

**If you prefer not to include your real email address in commits,** you can do the following:

1. **Find your no-reply email provided by GitHub:**  Navigate to the email settings of your GitHub account and select the option to `Keep my email address private`. The no-reply address will then be displayed, typically in the format `ID+USERNAME@users.noreply.github.com`.<br>
   <pic src="images/seeNoReplyEmail.png"/>

1. **Update your `user.email`** with that email address e.g.,
   ```bash{.no-line-numbers}
   git config --global user.email "12345678+username@users.noreply.github.com"
   ```
{% endcall %}<!-- show_prep use a no-reply email -->

**If you are using Git-Mastery exercises** (strongly recommended), you need to install and configure GitHub CLI** because it is needed by Git-Mastery exercises involving GitHub.

**GitHub offers its own clients to make working with GitHub more convenient.**

* **The {{ show_git_term("GitHub Desktop") }} app provides a GUI for performing GitHub operations** from your desktop, without needing to visit the GitHub web UI.
* **The {{ show_git_term("GitHub CLI (`gh`)") }} brings GitHub-specific commands to your terminal**, letting you perform operations on GitHub from your commandline.

{% call show_prep("Set up GitHub CLI") %}

<tabs>
  <tab header=":fab-windows: Windows">

**1. Download and run the .msi installer** from the [GitHub CLI releases page](https://github.com/cli/cli/releases).
  </tab>
  <tab header=":fab-apple: MacOS">

**1. Installx GitHub CLI using Homebrew**:

```bash{.no-line-numbers}
brew install gh
```
  </tab>
  <tab header=":fab-linux: Linux">

**1. Install GitHub CLI**, as explained in the [GitHub CLI Linux installation guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for your distribution.
...
  </tab>
</tabs>



**2. Authenticate yourself to GitHub account:**
```bash{.no-line-numbers}
gh auth login
```

When prompted, choose the protocol (i.e., `HTTPS` or `SSH`) you used previously to set up your GitHub authentication.

**3. Verify the setup** by checking the status of your GitHub CLI with your GitHub account.

```bash{.no-line-numbers}
gh auth status
```
You should see confirmation that you’re logged in.

**4. Verify that Github and Github CLI is setup for Git-Mastery:**

```bash{.no-line-numbers}
gitmastery check github
```

**5. [Optional, Recommended] Ask Git-Mastery to switch on the 'progress sync' feature.**

```bash{.no-line-numbers}
gitmastery progress sync on
```

<box type="info" seamless>

**What happens when you switch on the Git-Mastery 'progress sync' feature?**

* You Git-Mastery exercises progress will be backed up to your GitHub account. If you wipe out your local progress data by mistake, the remote copy will still be preserved.
* Git-Mastery will create a repo in your GitHub account, to back up your progress data. This repo will be publicly visible. 

</box>
{% endcall %}<!-- show_prep GitHub CLI -->

</div>

<div id="extras">
</div>
