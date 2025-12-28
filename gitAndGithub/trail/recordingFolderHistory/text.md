{% from "common/macros.njk" import trail, show_gm_tour_link, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.recordingFolderHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use Git to take snapshots of a folder</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To use Git to systematically record the history of a folder in your own computer. More specifically, to use Git to save a snapshot of the folder at specific points of time.</span>

<span class="d-none" id="motivation">Recording the history of files in a folder %%(e.g, code files of a software project, case notes, files related to an article/book that you are authoring)%% can be useful in case you need to refer to past versions.</span>

<div id="body">

See {{ show_gm_tour_link("recordingFolderHistory", "Tour 1: Recording the History of a Folder") }}

</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">You should now be able to initialise a Git repository in a folder and commit snapshots of its files at times of your choice. So far, you did not learn how to actually make use of those snapshots (other than to show a list of them) -- we will do that in later tours.</span>

<span id="next">{{ show_tour_link(trail.backingUpOnCloud) }}</span>