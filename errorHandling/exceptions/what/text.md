{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain exceptions</span>

<div id="body">

**{{ show_term("Exceptions") }} are used to deal with _'unusual' but not entirely unexpected_ situations** that the program might encounter at runtime.

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-exception" trim />
</box>

{% call show_example() %}
Situations in which a program might raise an exception:

* A network connection encounters a timeout due to a slow server.
* The code tries to read a file from the hard disk but the file is corrupted and cannot be read.
{% endcall %}


</div>

<div id="extras">
</div>
