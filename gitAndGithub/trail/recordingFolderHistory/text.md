{% from "common/macros.njk" import trail, show_tour_title, show_tour with context %}
{% set tour = trail.tour_recording_snapshots %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use Git to take snapshots of a folder</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to use Git to systematically record the history of a folder in your own computer. More specifically, to use Git to save a snapshot of the folder at specific points of time.</span>

<span class="d-none" id="motivation">Recoding the history of files in a folder %%(e.g, code files of a software project, case notes, files related to an article/book that you are authoring)%% can be useful in case you need to refer to past versions.</span>

<span class="d-none" id="achievements">You should now be able to initialise a Git repository in a folder and commit snapshots of its files at times of your choice. So far, you did not learn how to actually make use of those snapshots (other than to show a list of them) -- we will do that in later tours.</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>