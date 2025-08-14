<frontmatter>
title: "Git and GitHub [Printable]"
</frontmatter>

<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">
<link rel="stylesheet" href="{{baseUrl}}/css/print.css">

<div class="website-content">

<div id="main">

# Git and GitHub
{% for lesson in ['intro', 'gitPrep', 'init', 'stage', 'commit', 'log','remoteRepos', 'githubPrep', 'createRemoteRepo', 'setRemote', 'push', 'ignore', 'fork', 'clone', 'pull', 'show', 'tag', 'diff', 'checkout', 'reset', 'revert', 'selectiveStage', 'commitMessage', 'interactiveRebase', 'branch', 'merge', 'mergeConflicts', 'branchRename', 'branchDelete', 'syncByMerge', 'syncByRebase', 'cherryPick', 'remoteBranchPush', 'remoteBranchPull', 'remoteBranchDelete', 'remoteBranchRename'] %}

<include src="{{ lesson }}/unit-inParent-asFlat-print.md" boilerplate />
{% endfor %}

<include src="createPRs/unit-inParent-asFlat-print.md" boilerplate />
<include src="reviewPRs/unit-inParent-asFlat-print.md" boilerplate />
<include src="managePRs/unit-inParent-asFlat-print.md" boilerplate />
<include src="forkingWorkflow/unit-inParent-asFlat-print.md" boilerplate />

</div>

</div>
