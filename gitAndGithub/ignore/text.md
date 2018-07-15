<span id="prereqs"><panel src="../../revisionControl/savingHistory/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} Revision Control: Saving History" /></span>

<span id="outcomes">{{ icon_outcome }} Can set Git to ignore files</span>

<div id="title">

#### Ignore

</div>

<div id="body">

Add a file names `temp.txt` to the `things` repo you created. Suppose we don’t want this file to be revision controlled by Git. Let’s instruct Git to ignore `temp.txt`

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli.md" />
  <hr></tab>
</tabs>

The `.gitignore` file tells Git which files to ignore when tracking revision history. That file itself can be either revision controlled or ignored.

* To version control it (the more common choice – which allows you to track how the `.gitignore` file changed over time), simply commit it as you would commit any other file.
* To ignore it, follow the same steps we followed above when we set Git to ignore the `temp.txt` file.

</div>

<div id="extras">
</div>