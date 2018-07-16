<span id="prereqs"><panel src="../../revisionControl/usingHistory/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Project Management → Revision Control → Using History%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can load a specific version of a Git repo</span>

<div id="title">

#### Checkout

</div>

<div id="body">

Git can show you what changed in each commit.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  <hr></tab>
</tabs>

Git can also show you the difference between two points in the history of the repo.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  <hr></tab>
</tabs>

Git can load a specific version of the history to the working directory. Note that if you have uncommitted changes in the working directory, you need to <trigger trigger="click" for="modal:checkout-stash">stash</trigger> them first to prevent them from being overwritten.

<modal large title="%%Extract%%" id="modal:checkout-stash">
  <include src="../stash/unit-inElsewhere-asFlat.md" boilerplate />
</modal>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_3.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_3.md" />
  <hr></tab>
</tabs>


</div>

<div id="extras">
</div>