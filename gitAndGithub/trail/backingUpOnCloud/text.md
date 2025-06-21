{% from "common/macros.njk" import trail, show_tour_title, show_tour with context %}
{% set tour = trail.backingUpOnCloud %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can back up a Git repository on a cloud-based Git service such as GitHub</span>
<span id="title">{{ trail.backingUpOnCloud.title }}</span>

<span class="d-none" id="destination">To be able to back up a Git repository on a cloud-based Git service such as GitHub.</span>

<span class="d-none" id="motivation">Being able to maintain a copy of the folder and its history on a cloud server adds a level of safety %%(e.g., against the folder becoming inaccessible due to a hardware fault)%% and gives you the ability to access a copy of that folder (and its history) from different computers.</span>

<span class="d-none" id="achievements">to be added...</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>