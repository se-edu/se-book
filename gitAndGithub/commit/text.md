<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Git and Github → </div>

<div id="title">

#### Commit :one: [<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span>]({{baseUrl}}/gitAndGithub/commit/index.html)

</div>

<div id="body">

Create an empty repo.

Create a file named `fruits.txt` in the working directory and add some dummy text to it.

<tip-box type="definition">
  <include src="../../common/definitions.md#def-working-directory" />
</tip-box>

Observe how the file is detected by Git.

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_1.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_1.md" />
  <hr></tab>
</tabs>

Although git has detected the file in the working directory, it will not do anything with the file unless you tell it to. Suppose we want to commit the current state of the file. First, we should stage the file.

<tip-box type="definition">
  <include src="../../common/definitions.md#def-commit" />
</tip-box>

<tip-box type="definition">
  <include src="../../common/definitions.md#def-stage" />
</tip-box>

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_2.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_2.md" />
  <hr></tab>
</tabs>

Next, we can commit the staged version of `fruits.txt`

<tabs>
  <tab header="SourceTree">
    <include src="./sourcetree_3.md" />
  <hr></tab>
  <tab header="CLI">
    <include src="./cli_3.md" />
  <hr></tab>
</tabs>

Note the existence of something called the `master` branch. Git allows you to have multiple branches (i.e. it is a way to evolve the content in parallel) and Git creates a default branch named `master` on which the commits go on by default.

Do some changes to `fruits.txt` (e.g. add some text and delete some text). Stage the changes, and commit the changes using the same steps we followed before. You should end up with something like this.

<img src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_6.png" height="180" />
<p/>

Next, add two more files `colors.txt` and `shapes.txt` to the same working directory. Add a third commit to record the current state of the working directory.

<img src="{{baseUrl}}/gitAndGithub/commit/images/sourcetree_7.png" height="150" />
<p/>

</div>

<div id="extras">
  <include src="resources.md"/>
</div>

</div>
