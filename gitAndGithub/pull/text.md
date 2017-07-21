<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github :arrow_right: </div>

<div id="title">

#### Pull :two:

</div>

<div id="body">

Clone the sample repo <trigger for="modal:clone-repository" trigger="click">(instructions)</trigger>.

Delete the last two commits to simulate cloning the repo 2 commits ago.

<modal title="**Clone Repository**" id="modal:clone-repository">
  <include src="../clone/embed.md" />
</modal>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  </tab>
</tabs>

Now, your local repo state is exactly how it would be if you had cloned the repo 2 commits ago. In other words, it is as if somebody has added two more commits to the remote repo since you cloned it. To get those commits to your local repo (i.e. to sync your local repo with upstream repo) you can do a pull.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  </tab>
</tabs>

</div>

<div id="extras">
<div>

</div>
