<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Revision Control → </div>

<div id="title">

#### Saving History :one: [<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span>]({{baseUrl}}/revisionControl/savingHistory/index.html)

</div>

<div id="body">

##### Tracking and Ignoring

**In a repo, we can specify which files to track and which files to ==ignore==.** Some files such a temporary log files created during the build/test process should not be revision-controlled.

##### Staging and Committing 

<tabs> 
  <tab header=":abc:">

**==_Committing_== saves a snapshot of the current state of the tracked files in the revision control history. Such a snapshot is also called a _commit_ (i.e. the noun).**

**When ready to commit, we first ==_stage_== the specific changes we want to commit.** This intermediate step allows us to commit only some changes while saving other changes for a later commit.

  <hr></tab>
  <tab header=":tv:">

@[youtube](7exFDGHgQcw)

  <hr></tab>
</tabs>

##### Identifying Points in History

**Each commit in a repo is a recorded point in the history of the project that is uniquely identified by an auto-generated ==hash==** e.g. `a16043703f28e5b3dab95915f5c5e5bf4fdc5fc1`. 

**We can ==tag== a specific commit with a more easily identifiable name** e.g. `v1.0.2`

</div>

<div id="extras">
</div>

</div>
