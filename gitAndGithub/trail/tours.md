{% from "common/macros.njk" import trail with context %}

<span id="title">&nbsp;</span>

<body id="body">

# Revision Control (Using Git & GitHub)

This topic is divided into several 'tours', each aiming to cover the knowledge required to perform a general revision control use case.

{% for tour_id, tour in trail %}
<include src="{{ tour_id }}/text.md#body" />
<p/>
{% endfor %}

</body>
