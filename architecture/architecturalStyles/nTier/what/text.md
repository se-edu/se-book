<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can identify the layered architectural style, and can distinguish layers from tiers</span>

<div id="body">

**In the layered style, the software is divided into layers whose dependencies all point one way — downward.** Higher layers use services provided by lower ones; lower layers know nothing about the layers above. Other names: _multi-layered_, _n-tier_.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/nTier/what/images/nTier.png" height="150" />

**Styles differ in how strict that rule is.** In _strict_ (or _closed_) layering, a layer may use only the layer immediately below it. In the more common _relaxed_ form, a layer may use any lower layer, skipping intermediate ones. **What both share, and what actually matters, is that dependencies never point back up.**

**The task manager follows relaxed layering:** `Ui` depends on `Logic`; `Logic` depends on `Model` and `Storage`. **It is not a tidy four-level stack, though** — `Model` and `Storage` are not successive levels above one another, but two lower-level components that `Logic` uses. Real systems usually look like this rather than like a clean pile.

**The one-way rule is the whole point.** Because a lower layer depends on nothing above it, you can understand, test, and replace it on its own. The moment `Storage` calls back into `Ui` to show an error dialog, that property is gone and the two must be understood together.

<box>

{{ icon_example }} Operating systems and network communication software are the classic examples of deep layering.<br>
<pic eager src="{{baseUrl}}/architecture/architecturalStyles/nTier/what/images/nTierExamples.png" height="150" />

</box>

<box type="info" seamless>

**Layers are not tiers.** A _layer_ is a logical division inside the software; a _tier_ is a part that is deployed separately. The two are often confused, partly because the term _n-tier_ is frequently used to mean _layered_.

A desktop task manager has several layers but runs as a single tier — one program, one computer. **Layering does not require distribution and does not imply it.** The client-server style splits the program across a network, gaining a second tier while keeping much the same layering.

</box>

<p/>

</div>

<div id="extras">
</div>
