{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can set Git to ignore files</span>
<span id="title">{{ trail.backingUpOnCloud.lessons.ignore.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Git allows you to **specify which files should be omitted from reversion control**.
{% endcall %}

**You can specify which files Git should {{ show_git_term("ignore") }} from reversion control**. While you can always omit files from revision control simply by not staging them, having an 'ignore-list' is more convenient, especially if there are files inside the working folder that are not suitable for revision control %%(e.g., temporary log files)%% or files you want to prevent from accidentally including in a commit %%(files containing confidential information)%%.

**A repo-specific ignore-list of files can be specified in a `.gitignore` file**, stored in the root of the repo folder.

* **The `.gitignore` file itself can be either revision controlled or ignored.**
  * To version control it (the more common choice – which allows you to track how the `.gitignore` file changes over time), simply commit it as you would commit any other file.
  * To ignore it, simply add its name to the `.gitignore` file itself.
* **It supports file patterns** e.g., adding `temp/*.tmp` to the `.gitignore` file prevents Git from tracking any `.tmp` files in the `temp` directory.

{% call show_hands_on_practical('Adding a file to the ignore-list')  %}

{{ hp_number ('1') }} **Add a file into your repo's working folder that you presumably do not want to revision-control** e.g., a file named `temp.txt`. Observe how Git has detected the new file.<br>
Add a few other files with `.tmp` extension.

{{ hp_number ('2') }} **Configure Git to ignore those files:**

{{ show_git_tabs('-ignore-file-fragment') }}

{{ hp_number ('3') }} **Optionally, stage and commit the `.gitignore` file.**

{% endcall %}

**Files recommended to be omitted from version control**

* **Binary files** _generated_ when building your project %%e.g., `*.class`, `*.jar`, `*.exe`%% (reasons: 1. no need to version control these files as they can be generated again from the source code 2. Revision control systems are optimized for tracking text-based files, not binary files.
* **Temporary files** %%e.g., log files generated while testing the product%%
* **Local files** i.e., files specific to your own computer %%e.g., local settings of your IDE%%
* **Sensitive content** i.e., files containing sensitive/personal information %%e.g., credential files, personal identification data%% (especially, if there is a possibility of those files getting leaked via the revision control system).

</div>

<div id="extras">
{% call show_exercise("ignoring-somethings") %}
coming soon ...
{% endcall %}
</div>
