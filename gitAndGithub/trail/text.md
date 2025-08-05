{% from "common/macros.njk" import show_tour_overview, trail with context %}

<span id="title">&nbsp;</span>

<div id="body">

# :fas-route: ++Git Learning Trail++{.text-success}

<div id="trail-intro">

We've packaged our Git (and GitHub) lessons as 'Learning Trail' which is divided into several 'tours'. Each tour consists of a series of lessons and covers the Git knowledge required to use Git for a specific use case.

<span class="badge bg-success rounded-pill">Git Learning Tour</span><br>
<div class="indented-level1 pt-0">
<tree>
|
  Tour 1
    Lessons: T1L1 → T1L2 ... → T1L6 → <span class="badge bg-warning text-dark rounded-pill">Usage: Save snapshots of a folder</span>
  Tour 2
    Lessons: T2L1 → T2L2 ... → T2L6 → Usage: ...
  ...
  Tour N
    Lessons: ...

</tree>
</div>

</div>

## Tours

{% for tour_id, tour in trail %}
{{ show_tour_overview(tour) }}
{% endfor %}

</div>
