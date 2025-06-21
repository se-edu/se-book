{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_hands_on_practical, show_lesson_intro, show_output, show_under_the_hood with context %}

<span id="prereqs"></span>
<span id="outcomes">...</span>
<span id="title">{{ trail.recordingFolderHistory.lessons.log.title }}</span>

<div id="body">
{% call show_lesson_intro() %}
Before learning about Git, let us first **understand what _revision control_** is.
{% endcall %}

<tabs>
<tab header="{{ icon_text }}">

Given below is a general introduction to revision control, adapted from <trigger trigger="click" for="modal:rcsWhat-bryanMercurialGuide">bryan-mercurial-guide</trigger>:
<box seamless>

{{ show_git_term('Revision control') }} **is the process of managing multiple versions of a piece of information.** In its simplest form, this is something that many people do by hand: every time you modify a file, save it under a new name that contains a number, each one higher than the number of the preceding version.

Manually managing multiple versions of even a single file is an error-prone task, though, so software tools to help automate this process have long been available. The earliest automated revision control tools were intended to help a single user to manage revisions of a single file. Over the past few decades, the scope of revision control tools has expanded greatly; they now manage multiple files, and help multiple people to work together. The best modern revision control tools have no problem coping with thousands of people working together on projects that consist of hundreds of thousands of files.

There are a number of reasons why you or your team might want to use an automated revision control tool for a project.

* **It will track the history and evolution of your project**, so you don't have to. For every change, you'll have a log of who made it; why they made it; when they made it; and what the change was.
* **It makes it easier for you to collaborate** when you're working with other people. For example, when people more or less simultaneously make potentially incompatible changes, the software will help you to identify and resolve those conflicts.
* **It can help you to recover from mistakes**. If you make a change that later turns out to be an error, you can revert to an earlier version of one or more files. In fact, a y good revision control tool will even help you to efficiently figure out exactly when a problem was introduced.
* **It will help you to work simultaneously on, and manage the drift between, multiple versions of your project.**

Most of these reasons are equally valid, at least in theory, whether you're working on a project by yourself, or with a hundred other people.
</box>
</tab>
<tab header="{{ icon_video }}" class="d-print-none">

@[youtube](M-O8ZNW9icQ)

</tab>
</tabs>

<modal large header="Reference » Mercurial: The Definitive Guide" id="modal:rcsWhat-bryanMercurialGuide">
<include src="../../common/references.md#bryan-mercurial-guide" />
</modal>

**A {{ show_git_term('revision') }} is a state of a piece of information at a specific time that is a result of some changes to it** e.g., if you modify the code and save the file, you have a new _revision_ (or a new _version_) of that file. %%Some seem to use this term interchangeably with _version_ while others seem to distinguish the two -- here, let us treat them as the same, for simplicity.%%<br>
{{ show_git_term('Revision Control Software (RCS)') }} **are the software tools that automate the process of Revision Control** i.e. managing revisions of software artifacts. %%RCS are also known as _Version Control Software (VCS)_, and by a few other names.%%

**++[:fab-git-alt: Git](https://git-scm.com/)++ is the most widely used RCS today.** Other RCS tools include Mercurial, Subversion (SVN), Perforce, CVS (Concurrent Versions System), Bazaar, TFS (Team Foundation Server), and Clearcase.

**++[:fab-github: Github](https://github.com/)++ is a web-based project hosting platform for projects using Git for revision control.** Other similar services include GitLab, BitBucket, and SourceForge.
</div>

<div id="extras">
</div>
