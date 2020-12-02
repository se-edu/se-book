<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain remote repositories</span>

<span id="title">Remote repositories</span>

<div id="body">

**Remote repositories are repos that are hosted on remote computers** and allow remote access. They are especially useful for sharing the revision history of a codebase among team members of a multi-person project. %%They can also serve as a remote backup of your codebase.%%

**It is possible to set up your own remote repo on a server**, but the easier option is to use a remote repo hosting service such as GitHub or BitBucket.

<div id="section-cloning">

**You can ==_clone_== a repo** to create a copy of that repo in another location on your computer. The copy will even have the revision history of the original repo i.e., identical to the original repo. For example, you can clone a remote repo onto your computer to create a local copy of the remote repo.<br>
</div>

**When you clone from a repo, the original repo is commonly referred to as the ==_upstream_== repo.** A repo can have multiple upstream repos. For example, let's say a repo `repo1` was cloned as `repo2` which was then cloned as `repo3` In this case `repo1` and `repo2` are upstream repos of `repo3`.

<div id="section-pulling">

**You can ==_pull_== from a repo to another, to receive new commits in the second repo**, if the repos have a shared history. Let's say some new commits were added to the <tooltip content="_upstream_ repo is a term used to refer to the repo you cloned from">upstream repo</tooltip> after you cloned it and you would like to copy over those new commits to your own clone i.e., ==sync== your clone with the upstream repo. In that case you pull from the upstream repo to  your clone.
</div>
<div id="section-pushing">

**You can ==_push_== new commits in one repo to another repo** which will copy the new commits onto the destination repo. Note that pushing to a repo requires you to have write-access to it. Furthermore, you can push between repos only if those repos have a shared history among them (i.e, one was created by copying the other at some point in the past).
</div>

Cloning, pushing, and pulling can be done between two local repos too, although it is more common for them to involve a remote repo.

<div id="section-working-with-multiple-repos">

**A repo can work with any number of other repositories as long as they have a shared history** e.g., `repo1` can pull from (or push to) `repo2` and `repo3` if they have a shared history between them.
</div>

<div id="section-forking">

**A ==_fork_== is a remote copy of a remote repo**. As you know, cloning creates a local copy of a repo. In contrast, Forking creates a remote copy of a Git repo hosted on GitHub. This is particularly useful if you want to play around with a GitHub repo but you don't have write permissions to it; you can simply fork the repo and do whatever you want with the fork as you are the owner of the fork.
</div>

<div id="section-pull-request">

**A ==_pull request_== (PR for short) is mechanism for contributing code to a remote repo.** i.e., "I'm _requesting_ you to _pull_ my proposed changes to your repo". For this to work, the two repos must have a shared history. The most common case is sending PRs from a fork to its <tooltip content="_upstream_ repo is a repo you forked from">upstream</tooltip> repo.
</div>


<div v-closeable alt="slideshow: remote repo scenario" class="non-printable">

Here is a scenario that includes all the concepts introduced above (click _inside_ the slide to advance the animation):

@[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212290&authkey=&em=2)

</div>

</div>

<div id="extras">
</div>
