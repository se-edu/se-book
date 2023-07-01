<span id="outcomes">{{ icon_outcome }} Can create a local Git repo</span>

<span id="title">`init`: Getting started</span>

<div id="body">

Let's take your first few steps in your Git (with GitHub) journey.

<span class="non-printable">

**0. Take a peek at the full picture(?)**. Optionally, if you are the sort who prefers to have some sense of the full picture before you get into the nitty-gritty details, watch the video in the panel below:
</span>

<panel header="%%{{ icon_resource }} Git Overview%%" class="non-printable">

@[youtube](v40b3ExbM0c)

</panel><p/>

**1. The first step is to install** [SourceTree](https://www.sourcetreeapp.com/), which is Git + a GUI for Git. If you prefer to use Git via the command line (i.e., without a GUI), you can [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instead.

  <box type="info" seamless>

  **Instructions for installing SourceTree** are [here](https://confluence.atlassian.com/get-started-with-sourcetree/install-sourcetree-847359094.html).

  * When prompted, create a Atlassian account if you don't have one.
  * When prompted, connect SourceTree to your GitHub account (as you'll need to use GitHub later). There is no need to connect to a BitBucket account.
  </box>

**2. Next, initialize a repository.** Let us assume you want to version control content in a specific directory. In that case, you need to initialize a Git repository in that directory. Here are the steps:

Create a directory for the repo (e.g., a directory named `things`).

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>


<box type="tip" seamless>

As you see above, this textbook explains how to use Git via SourceTree (a GUI client) as well as via the Git CLI. If you are new to Git, **we recommend you learn !!both!! the GUI method and the CLI method** -- The GUI method will help you visualize the result better while the CLI method is more universal (i.e., you will not be tied to any GUI) and more flexible/powerful.
</box>

<box type="warning" seamless>

If you are new to Git, **we caution you against using Git or GitHub features that come with the IDE** as it is better to learn Git independent of any other tool. Similarly, using clients provided by GitHub (e.g., _GitHub Desktop_ GUI client) will make it harder for you to separate Git features from GitHub features.
</box>

</div>
<div id="extras">
</div>
