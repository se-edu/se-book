{% from "common/macros.njk" import show_tour_overview, trail with context %}

<span id="title"></span>

<body id="body">

# :fas-route: ++Git Learning Trail++{.text-success}

This Git learning trail is divided into several 'tours', each aiming to cover the Git knowledge required to perform a general Git use case.


## Tours

{% for tour_id, tour in trail %}
{{ show_tour_overview(tour) }}
{% endfor %}

%%More tours to be added ...%%
</body>
