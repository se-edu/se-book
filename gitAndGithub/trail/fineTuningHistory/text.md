{% from "common/macros.njk" import trail, show_gm_tour_link, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.fineTuningHistory %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can exercise fine-grained control over the revision graph.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To maintain a clean and meaningful revision history.</span>

<span class="d-none" id="motivation">The usefulness of the revision history increases if it consists of well-crafted and well-documented commits.</span>

<span class="d-none" id="achievements">You should now be able to create more meaningful commits from the start, and also refine them further after they’ve been created.</span>

<span id="next">{{ show_tour_link(trail.branchingLocally) }}</span>

<div id="body">

See {{ show_gm_tour_link("fineTuningHistory", "Tour 5: Fine-Tuning the Revision History") }}
</div>

<div id="extras">
</div>