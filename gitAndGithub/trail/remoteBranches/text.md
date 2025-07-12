{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.remoteBranches %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can work with branches of a remote repo.</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to synchronise branches in the local repo with a remote repo.</span>

<span class="d-none" id="motivation">It is useful to be able to have another copy of branches on a remote repo.</span>

<span class="d-none" id="achievements">You should now be able to work with branches in a remote repo, and keep them synchronised with branches in the local repo.</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>