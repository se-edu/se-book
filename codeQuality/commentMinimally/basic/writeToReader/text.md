{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Write to the reader</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: write to the reader </span>

<div id="body">

**Write comments targeting other programmers reading the code.** Do not write comments as if they are private notes to yourself. One type of comment that is almost always useful is the {{ show_term("header comment") }} that you write for a class or an operation to explain its purpose.

{% call show_example() %}
A header comment written as a private note, and the same one written for the reader:

<div class="alt-java">

<include src="example-java.md" />

</div>
<div class="alt-python">

<include src="example-python.md" />

</div>
{% endcall %}


</div>

<div id="extras">
</div>
