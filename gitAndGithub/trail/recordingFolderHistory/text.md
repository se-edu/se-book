{% from "common/macros.njk" import show_gm_tour_link %}
{% set tour_name = "recordingFolderHistory" %}
{% set tour_title = "Tour 1: Recording the History of a Folder" %}
<span id="title">{{ tour_title }}</span>

<div id="body">

See {{ show_gm_tour_link(tour_name, tour_title) }}
</div>
