{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.usingRevisionHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can navigate the history of a Git repo.</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to make use of the revision history stored by Git.</span>

<span class="d-none" id="motivation">Having put in effort to record the revision history of the working folder, it only makes sense that we use the revision history to our benefit. For example, to be able to answer questions such as "What did I change in this file since last Monday?"</span>

<span class="d-none" id="achievements">...</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>