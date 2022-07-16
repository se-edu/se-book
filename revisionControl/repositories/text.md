<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain repositories</span>

<span id="title">Repositories</span>

<div id="body">

<box type="definition" seamless>
  <include src="../../common/definitions.md#def-repo" />
</box>

<tabs>
  <tab header="{{ icon_text }}">
  
**The _repository_ is the database where the meta-data about the revision history are stored.** Suppose you want to apply revision control on files in a directory called `ProjectFoo`. In that case, you need to set up a _repo_ (short for repository) in the `ProjectFoo` directory, which is referred to as the _working directory_ of the repo. For example, Git uses a hidden folder named `.git` inside the working directory.

**You can have multiple repos in your computer**, each repo revision-controlling files of a different working directory, for examples, files of different projects.

  </tab>
  <tab header="{{ icon_video }}" class="d-print-none">

@[youtube](mLnxwlCEIb8)

  </tab>
</tabs>

</div>

<div id="extras">
<include src="exercises.md" />
</div>