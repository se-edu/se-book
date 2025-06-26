{% from "common/macros.njk" import trail, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.backingUpOnCloud %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can back up a Git repository on a cloud-based Git service such as GitHub</span>
<span id="title"></span>

<span class="d-none" id="destination">To be able to back up a Git repository on a cloud-based Git service such as GitHub.</span>

<span class="d-none" id="motivation">One (of several) benefits of maintaining a copy of a repo on a cloud server: it acts as a safety net %%(e.g., against the folder becoming inaccessible due to a hardware fault)%%.</span>

<span class="d-none" id="achievements">You should now be able to creat a copy of your repo on GitHub, and keep it updated as you add more commits to your local repo. If something goes wrong with your local repo (e.g., disk crash), you can now recover the repo using the remote repo (this tour did not cover how exactly you can do that -- it will be covered in a future tour).</span>

<span id="next">{{ show_tour_link(trail.usingRevisionHistory) }}</span>

<div id="body">

{{ show_tour(tour) }}
</div>

<div id="extras">
</div>