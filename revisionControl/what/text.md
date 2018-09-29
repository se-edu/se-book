<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain revision control</span>

<div id="title">

#### What

</div>

<div id="body">

<tabs>
  <tab header="{{ icon_text }}">

  <blockquote>

**_Revision control_ is the process of managing multiple versions of a piece of information.** In its simplest form, this is something that many people do by hand: every time you modify a file, save it under a new name that contains a number, each one higher than the number of the preceding version.

Manually managing multiple versions of even a single file is an error-prone task, though, so software tools to help automate this process have long been available. The earliest automated revision control tools were intended to help a single user to manage revisions of a single file. Over the past few decades, the scope of revision control tools has expanded greatly; they now manage multiple files, and help multiple people to work together. The best modern revision control tools have no problem coping with thousands of people working together on projects that consist of hundreds of thousands of files.

**Revision control software will track the history and evolution of your project**, so you don't have to. For every change, you'll have a log of who made it; why they made it; when they made it; and what the change was.

**Revision control software makes it easier for you to collaborate** when you're working with other people. For example, when people more or less simultaneously make potentially incompatible changes, the software will help you to identify and resolve those conflicts.

**It can help you to recover from mistakes**. If you make a change that later turns out to be an error, you can revert to an earlier version of one or more files. In fact, a really good revision control tool will even help you to efficiently figure out exactly when a problem was introduced.

**It will help you to work simultaneously on, and manage the drift between, multiple versions of your project.** Most of these reasons are equally valid, at least in theory, whether you're working on a project by yourself, or with a hundred other people.

 -- [adapted from <trigger trigger="click" for="modal:rcsWhat-bryanMercurialGuide">bryan-mercurial-guide</trigger>

  </blockquote>

  <hr></tab>
  <tab header="{{ icon_video }}">

@[youtube](M-O8ZNW9icQ)

  <hr></tab>
</tabs>

<modal large title="Reference » Mercurial: The Definitive Guide" id="modal:rcsWhat-bryanMercurialGuide">
  <include src="../../common/references.md#bryan-mercurial-guide" />
</modal>

<tip-box type="definition">
  <include src="../../common/definitions.md#def-rcs" />
</tip-box>

<tip-box type="definition">
  <include src="../../common/definitions.md#def-revision" />
</tip-box>

Revision control is also known as _Version Control Software (VCS)_, and a few other names.

</div>

<div id="extras">

<include src="exercises.md" />

</div>