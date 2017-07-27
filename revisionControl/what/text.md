<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Revision Control :arrow_right: </div>

<div id="title">

#### What :one:

</div>

<div id="body">

> _Revision control_ is the process of managing multiple versions of a piece of information. In its simplest form, this is something that many people do by hand:
> every time you modify a file, save it under a new name that contains a number, each one higher than the number of the preceding version.
>
> Manually managing multiple versions of even a single file is an error-prone task, though, so software tools to help automate this process
> have long been available. The earliest automated revision control tools were intended to help a single user to manage revisions
> of a single file. Over the past few decades, the scope of revision control tools has expanded greatly; they now manage multiple files, and
> help multiple people to work together. The best modern revision control tools have no problem coping with thousands of people working together
> on projects that consist of hundreds of thousands of files.
>
> There are a number of reasons why you or your team might want to use an automated revision control tool for a project.
> It will track the history and evolution of your project, so you don't have to. For every change, you'll have a log of who made it;
> why they made it; when they made it; and what the change was.
>
> When you're working with other people, **revision control software makes it easier for you to collaborate**. For example, when people more or less
> simultaneously make potentially incompatible changes, the software will help you to identify and resolve those conflicts.
>
> **It can help you to recover from mistakes**. If you make a change that later turns out to be an error, you can revert to an earlier version of one
> or more files. In fact, a really good revision control tool will even help you to efficiently figure out exactly when a problem was introduced.
>
> **It will help you to work simultaneously on, and manage the drift between, multiple versions of your project.** Most of these reasons are equally valid,
> at least in theory, whether you're working on a project by yourself, or with a hundred other people.
>
> -- [adapted from <trigger for="pop:bryan-mercurial-guide">bryan-mercurial-guide</trigger>]

It follows from the explanation above that using an RCS frees us from having to keep copies of all the past versions on our hard disk. If the RCS spans multiple machines, it also **reduces the risk of ‘losing everything’ in case of a hard disk crash**.

<popover id="pop:bryan-mercurial-guide" title="bryan-mercurial-guide :mag:" placement="right">
  <div slot="content">
    <include src="../../common/references.md#bryan-mercurial-guide" />
  </div>
</popover>

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
