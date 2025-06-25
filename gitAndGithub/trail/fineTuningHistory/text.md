{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.fineTuningHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can exercise fine-grained control over the revision graph.</span>
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