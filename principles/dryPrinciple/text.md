{% from "common/macros.njk" import show_term with context %}
<span id="title">DRY principle</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain DRY principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-dry-principle" trim />
</box>

This principle guards against the duplication of information.<br>
{{ label_example }} %%A functionality being implemented twice is a violation of the DRY principle even if the two implementations are different.%%<br>
{{ label_example }} %%The value of a system-wide timeout being defined in multiple places is a violation of DRY.%%

</div>

<div id="extras">
</div>
