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

<span class="d-none" id="achievements">You should now be able to use a repository’s revision history to understand how the working directory evolved over time -- and use that insight to inform your work.<br>
How useful this history is depends greatly on how well it was constructed -- for example, how frequently and meaningfully commits were made -- we’ll explore that in a later tour.</span>

<span id="next">{{ show_tour_link(trail.workingWithRemotes) }}</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>