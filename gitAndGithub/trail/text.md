{% from "common/macros.njk" import show_tour_overview, trail with context %}

<span id="title">&nbsp;</span>

<div id="body">

# :fas-route: ++Git Learning Trail++{.text-success}

<div id="trail-intro">

We've packaged our Git (and GitHub) lessons as 'Learning Trail' which is divided into several 'tours'. Each tour consists of a series of lessons and covers the Git knowledge required to use Git for a specific usage.

{% macro tour(desc) %}<span style="border-top-left-radius: 5px; border-top-right-radius: 5px; margin-left: -10px;" class="bg-success text-light p-1"><md>:fas-map-marker-alt: {{ desc }}</md></span>{% endmacro %}

{% macro lesson(desc) %}<span class="badge bg-success text-light "><md>{{ desc }}</md></span>{% endmacro %}

{% macro usage(desc) %}<span class="badge bg-warning text-dark rounded-pill">Usage: {{ desc }}</span>{% endmacro %}

<span class="badge bg-success rounded-pill"><md>++Git Learning Tour++</md></span><br>
<div style="margin-top: -15px;" class="indented-level1 pt-0">
<tree>
|
  {{ tour("Tour 1") }}
    Lessons: {{ lesson("T1L1") }} → {{ lesson("T1L2") }} → ... → {{ lesson("T1L6") }}  → {{ usage("Save snapshots of a folder") }}
  {{ tour("Tour 2") }}
    Lessons: {{ lesson("T2L1") }} → {{ lesson("T2L2") }} → ... → {{ lesson("T2L6") }} → {{ usage("Backup folder history on the cloud") }}
  ...
  {{ tour("Tour N") }}
    Lessons: ... {{ usage("...") }}

</tree>
</div>

</div>

## Tours

{% for tour_id, tour in trail %}
{{ show_tour_overview(tour) }}
{% endfor %}

</div>
