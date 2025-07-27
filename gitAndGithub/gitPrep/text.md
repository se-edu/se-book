{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_lesson_link, show_output, show_prep, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can prepare the computer to use Git locally</span>

<span id="title">{{ trail.recordingFolderHistory.lessons.gitPrep.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Before you start learning Git, **you need to install some tools** on your computer.
{% endcall %}

##### Installing Git

**Git is a free and open source software used for revision control.** To use Git, you need to install Git on your computer.

{% call show_prep("Install Git") %}
<tabs>
  <tab header=":fab-windows: Windows">

**Download the Git installer** from the [official Git website](https://git-scm.com/downloads/win).<br>
**Run the installer** and make sure to **select the option to install Git Bash** when prompted.

<box type="info" seamless>
<panel type="seamless" header="Screenshots given below provide some guidance on the dialogs you might encounter when installing Git. In other cases, go with the default option." peek>
<pic src="images/selectGitBash.png" /><br>
<pic src="images/chooseTextEditor.png" /><br>
<pic src="images/chooseGitCredentialManager.png" /><br>
<pic src="images/chooseCheckoutStyle.png" /><br>
<pic src="images/choosePullBehaviour.png" />
</panel>
</box>

<box type="warning" seamless>

When running Git commands, we recommend Windows users to **use the Git Bash terminal** that comes with Git. To open Git Bash terminal, hit the <kbd>:fab-windows:</kbd> key and type `git-bash`.

{{ icon_tip }} It may be possible that the installation didn't add a shortcut to the Start Menu.
You can navigate to the directory where `git-bash.exe` is (most likely `C:\Program Files\Git\git-bash.exe`), double click `git-bash.exe` to open Git Bash.<br>
You can also right-click it and choose `Pin to Start` or `Pin to taskbar`.
</box>

{% call show_sidebar("Git Bash Terminal") %}
**Git Bash is a terminal application that lets you use Git from the command line on Windows.** Since Git was originally developed for Unix-like systems (like Linux and macOS), Windows does not come with a native shell that supports all the commands and utilities commonly used with Git.

<pic src="images/gitBashWindow.png" />

**Git Bash provides a Unix-like command-line environment on Windows.** It includes:
- A Bash shell (Bash stands for *Bourne Again SHell*), which is a widely used command-line interpreter on Linux and macOS.
- Common Unix tools and commands (like `ls`, `cat`, `ssh`, etc.) that are useful when working with Git and scripting.
{% endcall %} <!-- show_sidebar -->
  </tab>
  <tab header=":fab-apple: MacOS">

**Install [homebrew](https://brew.sh/)** if you don't already have it, and then, **run `brew install git`**
  </tab>
  <tab header=":fab-linux: Linux">

**Use your Linux distribution's package manager to install Git.** Examples:

* Debian/Ubuntu, run `sudo apt-get update` and then `sudo apt-get install git`.
* Fedora: run `sudo dnf update` and then `sudo dnf install git`.

  </tab>
</tabs>

**Verify Git is installed**, by running the following command in a terminal.
```bash{.no-line-numbers}
git --version
```
{% call show_output() %}
```bash{.no-line-numbers}
git version 2._._
```
The output should display the version number.
{% endcall %} <!-- show_output -->
{% endcall %} <!-- show_prep -->

##### Configuring `user.name` and `user.email`

**Git needs to know _who you are_ to record changes properly.** When you save a snapshot of your work in Git, it records your name and email as the author of that change. This ensures everyone working on the project can see who made which changes. **Accordingly, you should set the config settings `user.name` and `user.email` before you start Git for revision control.**

{% call show_prep("Set `user.name` and `user.email`") %}

**To set the two config settings**, run the following commands in your terminal window:
```bash{.no-line-numbers}
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

**To check if they are set as intended**, you can use the following two commands:
```bash{.no-line-numbers}
git config --global user.name
git config --global user.email
```
{% endcall %} <!-- show_prep -->

##### Interacting with Git: CLI vs GUI
**Git is fundamentally a command-line tool.** You primarily interact with it through its <tooltip content="Command-Line Interface">CLI</tooltip> by typing commands. This gives you full control over its features and helps you understand what’s really happening under the hood.

**<tooltip content="Graphical User Interface">GUI</tooltip> clients for Git also exist,** such as Sourcetree, GitKraken, and the built-in Git support in editors like Intellij IDEA and VS Code. These tools provide a more visual way to perform some Git operations.

**If you're new to Git, it's best to learn the CLI first.** The CLI is universal, always available (even on servers), and helps you build a solid understanding of Git’s concepts. You can use GUI clients as a supplement — for example, to visualise complex history structures.

**Mastering the CLI gives you confidence and flexibility, while GUI tools can serve as helpful companions.**

{% call show_prep("[Optional] Install a GUI client") %}
**Optionally, you can install a Git GUI client.**
e.g., Sourcetree ([installation instructions](https://se-education.org/guides/tutorials/sourcetree.html)).

Our Git lessons show how to perform Git operations in Git CLI, and in Sourcetree -- the latter just to illustrate how Git GUIs work. It is perfectly fine for you to learn the CLI only.

<pic src="images/sourcetreeUi.png" /><br>
<sub>%%[image credit: https://www.sourcetreeapp.com]%%</sub>

{% endcall %} <!-- show_prep -->

<div class="non-printable" tags="git-mastery">

##### Installing the Git-Mastery App

**In these lessons, we are piloting a new companion app called Git-Mastery** that we have been developing to help Git learners. Specifically, it provides exercises that you can do to self-test your Git knowledge, and the app will also verify if your solution is correct.

**If you are new to Git, we ==strongly recommend that you install and use the Git-Mastery app==.**

{% call show_prep("[Recommended] Install and Configure the Git-Mastery App")  %}

**1. Install the Git-Mastery App**

<tabs>
  <tab header=":fab-windows: Windows">

* Download the `.exe` file from [the latest release](https://github.com/git-mastery/app/releases/latest). {{ numbers_abcd }}
* Add the folder containing the `.exe` to your `PATH` following [this guide](https://www.wikihow.com/Change-the-PATH-Environment-Variable-on-Windows).<br>
  E.g. If the .exe is in `C:\Users\yourname\Desktop`, you should add this folder into your `PATH`.
  </tab>
  <tab header=":fab-apple: MacOS">

```bash{.no-line-numbers}
brew tap git-mastery/gitmastery
brew install gitmastery
```
  </tab>
  <tab header=":fab-linux: Linux">

<tabs>
  <tab header="Debian/Ubuntu">

Ensure you are running `libc` version 2.38 or newer.

Then install the app by running the following commands:

```bash
echo "deb [trusted=yes] https://git-mastery.github.io/gitmastery-apt-repo any main" | \
  sudo tee /etc/apt/sources.list.d/gitmastery.list > /dev/null
sudo apt install software-properties-common
sudo add-apt-repository "deb https://git-mastery.github.io/gitmastery-apt-repo any main"
sudo apt update
sudo apt-get install gitmastery
```

  </tab>
  <tab header="Arch">

Install using pacman:

```bash
sudo pacman -Syu gitmastery-bin
```
  </tab>
  <tab header="Others">

If you are using a Linux distribution that is not yet supported by Git-Mastery, please download the right binary for your architecture from [the latest release.](https://github.com/git-mastery/app/releases/latest)

Install it to `/usr/bin` to access the binary, the following using version `3.3.0` as an example.

```bash
install -D -m 0755 gitmastery-3.3.0-linux-arm64 /usr/bin/gitmastery
```
  </tab>
</tabs> <!-- linux versions -->

  </tab> <!-- linux -->
</tabs> <!-- os -->

**2. To verify the installation**, run the `gitmastery --help` command from a couple of different folder locations.

```bash{.no-line-numbers}
gitmastery --help
cd ../my-projects  # cd into a different folder
gitmastery --help
```

<box type="info" seamless>

The current version of #r#the app takes about 3-5 seconds to respond to a command##. This is because the app comes with a bundled Python runtime (so that users don't need to install Python first) which needs to load first before the command can be executed.
</box>

**3. Trigger the initial setup** by running the `gitmastery setup` command in a suitable folder (the app will create files/folders inside this folder).

```bash{.no-line-numbers}
mkdir gitmastery-home
cd gitmastery-home
gitmastery setup
```

The `gitmastery setup` command will perform the following tasks:
* Checks if Git is installed. {{ numbers_abcd }}
* Checks if `user.name` and `user.email` are set.
* Prompts you to specify a name for the **git-mastery** {{ show_git_term("exercises directory") }} -- you can accept the default by pressing <kbd>Enter</kbd>.
* Sets up a mechanism to locally track the progress of your exercises.

Notes:
* If the command failed due to checks (a) or (b) failing, you can rectify the problem and run the command again.
* If you wish to check the Git set up again at a later time, you can run the `gitmastery check git` command.

{% endcall %} <!-- show_prep -->
</div>

</div>
<div id="extras">
</div>
