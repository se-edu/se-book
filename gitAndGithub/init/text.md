{% from "common/macros.njk" import show_git_tabs with context %}
<span id="outcomes">{{ icon_outcome }} Can create a local Git repo</span>

<span id="title">`init`: Getting started</span>

<div id="body">

Let's take your first few steps in your Git journey.

<span class="non-printable">

**0. Take a peek at the full picture(?)**. Optionally, if you are the sort who prefers to have some sense of the full picture before you get into the nitty-gritty details, watch the video in the panel below:
</span>

<panel header="%%{{ icon_resource }} Git Overview%%" class="non-printable">

@[youtube](v40b3ExbM0c)

</panel><p/>

**1. First, install** Sourcetree ([installation instructions](https://se-education.org/guides/tutorials/sourcetree.html)), which is Git + a GUI for Git. If you prefer to use Git via the command line (i.e., without a GUI), you can [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instead.

**2. Next, create a directory for the repo** (e.g., a directory named `things`).

**3. Then, initialize a repository** in that directory.

{{ show_git_tabs() }}

<box type="tip" seamless>

As you see above, this textbook explains how to use Git via Sourcetree (a GUI client) as well as via the Git CLI. If you are new to Git, **we recommend you learn !!both!! the GUI method and the CLI method** -- The GUI method will help you visualize the result better while the CLI method is more universal (i.e., you will not be tied to any GUI) and more flexible/powerful.

**It is fine to learn the CLI way only** (using Sourcetree is optional), especially if you normally prefer to work with CLI over GUI.
</box>

<box type="warning" seamless>

If you are new to Git, **we caution you against using Git or GitHub features that come with the IDE** as it is better to learn Git independent of any other tool. Similarly, using clients provided by GitHub (e.g., _GitHub Desktop_ GUI client) will make it harder for you to separate Git features from GitHub features.
</box>

</div>
<div id="extras">
</div>
