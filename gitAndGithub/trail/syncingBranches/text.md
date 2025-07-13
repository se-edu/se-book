{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.syncingBranches %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can keep Git branches in sync.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To be able to keep branches in a local repository synchronised with each other, as needed.</span>

<span class="d-none" id="motivation">While working on one branch, you might want to have access to changes introduced in another branch (e.g., take advantage of a bug fix introduced in another branch).</span>

<span class="d-none" id="achievements">Now you can bring over changes in one branch to another, in a local repository.</span>

<span id="next">{{ show_tour_link(trail.remoteBranches) }}</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>