{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.fineTuningHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can exercise fine-grained control over the revision graph.</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to maintain a clean and meaningful revision history.</span>

<span class="d-none" id="motivation">The usefulness of the revision history increases if it consisted of well-crafted and well-documented commits.</span>

<span class="d-none" id="achievements">You should now be able to not only create more meaningful commits to begin with, but also to tidy them up further at a late time.</span>

<span id="next">{{ show_tour_link(trail.branchingLocally) }}</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>