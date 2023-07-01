<span id="outcomes">{{ icon_outcome }} Can load a specific version of a Git repo</span>

<span id="title">`checkout`: Retrieving a specific revision</span>

<div id="body">

**Git can load a specific version of the history to the working directory.** Note that if you have uncommitted changes in the working directory, you need to <trigger trigger="click" for="modal:checkout-stash">stash</trigger> them first to prevent them from being overwritten.

<modal large header="Git & GitHub → Stash" id="modal:checkout-stash">
  <include src="../stash/unit-inElsewhere-asPanelBody.md" boilerplate />
</modal>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  </tab>
</tabs>


</div>

<div id="extras">
</div>
