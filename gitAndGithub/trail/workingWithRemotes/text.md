{% from "common/macros.njk" import trail, show_tour_title, show_tour with context %}
{% set tour = trail.workingWithRemotes %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can continue work by starting with an existing remote repo.</span>
<span id="title"></span>

<span class="d-none" id="destination">...</span>

<span class="d-none" id="motivation">...</span>

<span class="d-none" id="achievements">...</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>