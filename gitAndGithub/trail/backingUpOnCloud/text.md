{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.backingUpOnCloud %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can back up a Git repository on a cloud-based Git service such as GitHub</span>
<span id="title">{{ trail.backingUpOnCloud.title }}</span>

<span class="d-none" id="destination">To be able to back up a Git repository on a cloud-based Git service such as GitHub.</span>

<span class="d-none" id="motivation">One (of several) benefits of maintaining a copy of a repo on a cloud server: it acts as a safety net %%(e.g., against the folder becoming inaccessible due to a hardware fault)%%.</span>

<span class="d-none" id="achievements">to be added...</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>