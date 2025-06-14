{% set title = "Git Tour: Recording the History of a Folder" %}
<frontmatter>
title: "{{ title }}"
pageNav: 4
</frontmatter>

{% from "common/macros.njk" import trail, show_lesson_overview, show_lesson, divider with context %}
{% set tour = trail.tour_recording_snapshots %}

<div id="body">

{{ divider(tour.title) }}

**Destination:** To be able to use Git to systematically record the history of a folder in your own computer. More specifically, to use Git to save a snapshot of the folder at specific points of time.

**Motivation:** Recoding the history of files in a folder %%(e.g, code files of a software project, case notes, files related to an article/book that you are authoring)%% can be useful in case you need to refer to past versions.

**Route:**

{{ show_lesson_overview(tour.lesson_git_prep) }}
{{ show_lesson_overview(tour.lesson_init) }}
{{ show_lesson_overview(tour.lesson_stage) }}
{{ show_lesson_overview(tour.lesson_commit) }}

<hr>

{{ show_lesson(tour.lesson_git_prep) }}
{{ show_lesson(tour.lesson_init) }}
{{ show_lesson(tour.lesson_stage) }}
{{ show_lesson(tour.lesson_commit) }}

</div>
