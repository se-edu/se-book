{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.workingWithRemotes %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can continue work by starting with an existing remote repo.</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to work with an existing remote repository.</span>

<span class="d-none" id="motivation">In some cases, you will be required to start with an existing remote repository, and work with that repository. In such case, you may have to create your own copies of that repository, and keep those copies updated when more changes appear in the remote repository.</span>

<span class="d-none" id="achievements">...</span>

<span id="next">coming soon ...</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>