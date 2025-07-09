{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.branchingLocally %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can use Git branches in a local repo.</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to make use of multiple timelines of work in a local repository.</span>

<span class="d-none" id="motivation">At times, you need to do multiple parallel changes to files e.g., to try two alternative implementations of the same feature.</span>

<span class="d-none" id="achievements">Now you can create, maintain, and merge multiple parallel branches in a local repo. This tour covered only the basic use of Git branches. More advanced usage will be covered in other tours.</span>

<span id="next">{{ show_tour_link(trail.syncingBranches) }}</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>