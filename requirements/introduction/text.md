{% from "common/macros.njk" import show_term with context %}
<span id="title">Introduction</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain requirements</span>

<div id="body">

**A {{ show_term("software requirement") }} specifies a need to be fulfilled by the software product.**

**A software project may be one of two types:**
* **a {{ show_term("brownfield") }} project**, i.e., a project to replace or update an existing software product<br>
  {{ label_example }} %%Adding an online payment option to a university's existing course registration system.%%
* **a {{ show_term("greenfield") }} project**, i.e., a project to develop a new system from scratch<br>
  {{ label_example }} %%Building a new app that lets students swap tutorial slots, where no such system exists yet.%%

In either case, requirements need to be gathered, analyzed, specified, and managed.

**Requirements come from {{ show_term("stakeholders") }}.**

<box type="definition" seamless>
<include src="../../common/definitions.md#def-stakeholder" trim />
</box>

**Identifying requirements is often not easy.**<br>
{{ label_example }} %%Stakeholders may not be aware of their precise needs, may not know how to communicate their requirements correctly, or may not be willing to spend effort identifying requirements.%%

<!-- TODO: add more details -->

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
