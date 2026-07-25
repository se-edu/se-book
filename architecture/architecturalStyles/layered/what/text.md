{% from "common/macros.njk" import show_aspect %}
<span id="title">What</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can identify the layered architectural style, and can distinguish layers from tiers</span>

<div id="body">
{{ show_aspect("This style is defined based on how the code inside a program is organized.") }}

**In the layered style, the software is divided into layers whose dependencies all point one way — downward.** Higher layers use services provided by lower ones; lower layers know nothing about the layers above.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/layered/what/images/layered.png" height="150" />

**The use of this style differs in how strict the layer separation is.** In _strict_ (or _closed_) layering, a layer may use only the layer immediately below it. In the more common _relaxed_ form, a layer may use any lower layer, skipping intermediate ones. **What both share, and what actually matters, is that dependencies never point back up.** Because a lower layer depends on nothing above it, you can understand, test, and replace it on its own. The moment `Storage` calls back into `Ui` to show an error dialog, that property is lost and the two must be understood together.

<box>

{{ label_example }} The invoice manager follows relaxed layering. Ordered by dependency, its layers run `Ui` → `Logic` → `Storage` → `Model`: `Ui` depends on `Logic`, `Logic` depends on `Storage`, and `Storage` depends on `Model` because it reads and writes invoice objects. `Logic` also depends on `Model` directly, skipping over `Storage` — **which is precisely what the relaxed form allows and the strict form forbids.** Real systems usually look like this rather than like a clean pile.
</box>

<box>

{{ label_example }} Operating systems and network communication software are the classic examples of layering.<br>
<pic eager src="{{baseUrl}}/architecture/architecturalStyles/layered/what/images/layeredExamples.png" height="150" />

</box>

**Layers are not tiers.** A _layer_ is a logical division inside the software; a _tier_ is a part that is deployed separately. The two are often confused, partly because the term _n-tier_ is frequently used to mean _layered_.<br>
{{ label_example }} A desktop invoice manager has several layers but runs as a single tier — one program, one computer. **Layering does not require distribution and does not imply it.** Another style can split the program across a network, gaining a second tier while keeping much the same layering.

<p/>

</div>

<div id="extras">
</div>
