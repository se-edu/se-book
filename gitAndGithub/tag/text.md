<span id="prereqs"><panel src="../../revisionControl/savingHistory/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%Project Management → Revision Control → Saving History%%" popup-url="{{ baseUrl }}/revisionControl/savingHistory" /></span>

<span id="outcomes">{{ icon_outcome }} Can tag commits using Git</span>

<span id="title">`tag`: Naming commits</span>

<div id="body">

**Each Git commit is uniquely identified by a hash** e.g., `d670460b4b4aece5915caf5c68d12f560a9fe3e4`. As you can imagine, using such an identifier is not very convenient for our day-to-day use. As a solution, Git allows adding a more human-readable _tag_ to a commit e.g., `v1.0-beta`.

Here's how you can tag a commit in a local repo (e.g. in the `sampelrepo-things` repo):

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>

After adding a tag to a commit, you can use the tag to refer to that commit, as an alternative to using the hash.

</div>

<div id="extras">
</div>