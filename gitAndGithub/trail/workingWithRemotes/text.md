{% from "common/macros.njk" import trail, show_gm_tour_link, show_tour_title, show_tour, show_tour_link with context %}
{% set tour = trail.workingWithRemotes %}
<frontmatter>
title: "{{ tour.title }}"
pageNav: 4
</frontmatter>

<span id="outcomes">{{ icon_outcome }} Can continue work by starting with an existing remote repo.</span>
<span id="title">{{ tour.title }}</span>

<span class="d-none" id="destination">To work with an existing remote repository.</span>

<span class="d-none" id="motivation">Often, you will need to start with an existing remote repository. In such cases, you may have to create your own copies of that repository, and keep those copies updated when more changes appear in the remote repository.</span>

<div id="body">

See {{ show_gm_tour_link("workingWithRemotes", "Tour 3: Working Off a Remote Repo") }}

</div>

<div id="extras">
</div>

<span class="d-none" id="achievements">Now you can create your own remote and local copies of any repo on GitHub, and update your copy when there are new changes in the upstream repo.</span>

<span id="next">{{ show_tour_link(trail.usingRevisionHistory) }}</span>