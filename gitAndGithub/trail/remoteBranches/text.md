{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.remoteBranches %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can work with branches of a remote repo.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To synchronise branches in the local repo with a remote repo's branches.</span>

<span class="d-none" id="motivation">It is useful to be able to have another copy of branches in a remote repo.</span>

<span class="d-none" id="achievements">You should now be able to work with branches in a remote repo, and keep them synchronised with branches in the local repo.</span>

<span id="next">More trails to be added in the future.</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>