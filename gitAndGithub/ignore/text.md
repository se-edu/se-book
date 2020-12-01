<span id="prereqs"><panel src="../../revisionControl/savingHistory/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} Revision Control: Saving History" popup-url="{{ baseUrl }}/revisionControl/savingHistory" /></span>

<span id="outcomes">{{ icon_outcome }} Can set Git to ignore files</span>

<span id="title">Omitting files from revision control</span>

<div id="body">


Often, there are files inside the Git working folder that you don't want to revision-control e.g., temporary log files. Follow the steps below to learn how to configure Git to ignore such files.

**1. Add a file into your repo's working folder that you supposedly don't want to revision-control** e.g., a file named `temp.txt`. Observe how Git has detected the new file.

**2. Tell Git to ignore that file:**

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree.md" />
  </tab>
  <tab header="CLI">
    <include src="./cli.md" />
  </tab>
</tabs>

<box>

##### The `.gitignore` file

The `.gitignore` file tells Git which files to ignore when tracking revision history. That file itself can be either revision controlled or ignored.
* To version control it (the more common choice – which allows you to track how the `.gitignore` file changes over time), simply commit it as you would commit any other file.
* To ignore it, follow the same steps you followed above when you set Git to ignore the `temp.txt` file.

* It supports file patterns e.g., adding `temp/*.tmp` to the `.gitignore` file prevents Git from tracking any `.tmp` files in the `temp` directory.

{{ icon_resource }} More information about the `.gitignore` file: [git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

</box>

</div>

<div id="extras">
</div>
