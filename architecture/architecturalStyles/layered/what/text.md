{% from "common/macros.njk" import show_term with context %}
{% from "common/macros.njk" import show_aspect, show_example %}
<span id="title">What</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can identify the layered architectural style, and can distinguish layers from tiers</span>

<div id="body">
{{ show_aspect("This style focuses on how the code inside a program is organized.") }}

**In the {{ show_term("layered") }} style, the software is divided into layers whose dependencies all point downward.** Higher layers use services provided by lower ones; lower layers know nothing about the layers above.

<pic eager class="tbg" src="{{baseUrl}}/architecture/architecturalStyles/layered/what/images/layered.svg" width="438" />

**Layered designs differ in how strictly they enforce the separation.** In _strict_ (or _closed_) layering, a layer may use only the layer immediately below it. In the more common _relaxed_ form, a layer may use any lower layer, skipping intermediate ones. In both, dependencies never point back up. Because a lower layer depends on nothing above it, you can understand, test, and replace it without being concerned about any layers above. In contrast, when a layer can depend on both higher and lower layers, more parts of the system needs to be considered when changing something in a given layer.

{% call show_example() %}
The invoice manager follows relaxed layering, as `Logic` depends on `Storage` as well as `Model`. Operating systems and network communication software are the classic examples of layering.

<pic eager class="tbg" src="{{baseUrl}}/architecture/architecturalStyles/layered/what/images/layeredExamples.svg" width="233" />

{% endcall %}

**Layers are not tiers.** A _layer_ is a logical division inside the software; a _tier_ is a part that is deployed separately. The two are often confused, partly because the term _n-tier_ is frequently used to mean _layered_.
{% call show_example() %}
A desktop invoice manager has several layers but runs as a single tier — one program, one computer. **Layering does not require distribution and does not imply it.** Another style can split the program across a network, gaining a second tier while keeping much the same layering.
{% endcall %}

<p/>

</div>

<div id="extras">
</div>
