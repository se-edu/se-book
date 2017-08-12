<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Revision Control &rarr; </div>

<div id="title">

#### Repositories :one:

</div>

<div id="body">

<tip-box type="definition">
  <include src="../../common/definitions.md#def-repo" />
</tip-box>

<tabs>
  <tab header=":abc:">
  
Suppose you want to apply revision control on files in a directory called `ProjectFoo`. In that case you need to set up a _repo_ (short for repository) in `ProjectFoo` directory, which is referred to as the _working directory_ of the repo. The repository is the database where the meta-data about the revision history are stored. For example, Git uses a hidden folder named `.git` inside the working directory.

You can have multiple repos in your computer, each repo revision-controlling files of a different working directly, for examples, files of different projects.

  <hr></tab>
  <tab header=":tv:">

@[youtube](mLnxwlCEIb8)

  <hr></tab>
</tabs>

</div>

<div id="extras">
<include src="exercises.md" />
<div>

</div>
