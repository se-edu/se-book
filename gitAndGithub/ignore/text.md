<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github :arrow_right: </div>

<div id="title">

#### Ignore :two:

</div>

<div id="body">

<dynamic-panel src="../../revisionControl/savingHistory/embed.md" header="Revision Control: Saving History" is-open></dynamic-panel>
<p/>

Add a file names `temp.txt` to the `things` repo you created. Suppose we don’t want this file to be revision controlled by Git. Let’s instructor Git to ignore `temp.txt`

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>

The `.gitignore` file tells Git which files to ignore when tracking revision history. That file itself can be either revision controlled or ignored.

* To version control it (the more common choice – which allows you to track how the `.gitignore` file changed over time), simply commit it as you would commit any other file.
* To ignore it, follow the same steps we followed above when we set Git to ignore the `temp.txt` file.

</div>

</div>
