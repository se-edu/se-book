<frontmatter>
title: "About: Usage"
pageNav: 3
</frontmatter>
<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Using this book

<div id="browsers">

### Browser compatibility{.text-white .bg-secondary .p-2}

Most of this will work on most mainstream Browsers, although some pages might not work well in small-screen devices.

</div>
<div id="layers">
{% set icon_layers = ":fas-layer-group:" %}
### Information layers{.text-white .bg-secondary .p-2}

We try to _layer_ information so that readers have the freedom to omit less important layers if they wish to. Some 'layering' techniques used are explained below:

**{{ icon_layers }} More important information are in bold** or ==highlighted== while %%less important information are dimmed%% or in collapsed panels such as the below.

<div class="indented-level2">
<box>

<panel header="Some less important info in a minimized panel" minimized>

Less important info

</panel><p/>

<panel header="%%Some less important info in a boarder-less panel%%" type="seamless">

Less important info

</panel><p/>

<panel header="%%Some less important info in a panel%%">

Less important info

</panel><p/>

</box>

<span id="tip-about-popup-url">You can use the <span class="btn btn-light ps-1 pe-1 pb-0 pt-0 border"><small>:glyphicon-new-window:</small></span> button in a panel to open it as a new tab (it can be expanded in-place too). This feature is available only for panels containing another _full_ page of the website (i.e., not available if the panel contains an _extract_ of a page).</span> e.g.,

<panel header="A panel that can be opened as another tab" popup-url="acknowledgements.html">
<include src="acknowledgements.md" />
</panel>
<p/>
</div>

**{{ icon_layers }} Tabs indicate _alternative_ content** (e.g. video vs text). You can choose the one you like and ignore the other tabs.

<div class="indented-level2">
<box>

<tabs>
  <tab header="{{ icon_text }}">

Some textual description of X

  </tab>
  <tab header="{{ icon_video }}">

Video describing X

  </tab>
</tabs>

</box>
</div>

**{{ icon_layers }} Dotted underlines indicate <popover content="some additional info">tool tips</popover>** (activated by hovering over it) and **dashed underlines indicate <trigger for="modal:modal-example" trigger="click">modal windows</trigger>** (activated by clicking) containing additional information.

<popover id="pop:tooltip-example" header="Tooltip Example" placement="top">
  <div slot="content">
    Additional information
  </div>
</popover>

<modal header="Modal Example" id="modal:modal-example">
  Additional information
</modal>

</div>
<div id="conventions">

### Conventions used{.text-white .bg-secondary .p-2}

#### Shorthand headings

Meaning of some shortened headings:

* <big>**What**</big> : the **meaning** of the concept in concern (<trigger trigger="click" for="modal:conventions-what">example</trigger>)

<modal large header="Example of a 'What' topic" id="modal:conventions-what">
  <include src="../refactoring/what/unit-inElsewhere-asFlat.md" boilerplate />
</modal>

* <big>**Why**</big> : the **motivation** behind the concept in concern (<trigger trigger="click" for="modal:conventions-why">example</trigger>)

<modal large header="Example of a 'Why' topic" id="modal:conventions-why">
  <include src="../documentation/guidelines/goTopDown/why/unit-inElsewhere-asFlat.md" boilerplate />
</modal>

* <big>**How**</big> : the **usage** of the concept in concern (<trigger trigger="click" for="modal:conventions-how">example</trigger>)

<modal large header="Example of a 'How' topic" id="modal:conventions-how">
  <include src="../refactoring/how/unit-inElsewhere-asFlat.md" boilerplate />
</modal>

* <big>**When**</big> : the **pros and cons** of the concept in concern, **when to use** the concept (<trigger trigger="click" for="modal:conventions-when">example</trigger>)

<modal large header="Example of a 'When' topic" id="modal:conventions-when">
  <include src="../refactoring/when/unit-inElsewhere-asFlat.md" boilerplate />
</modal>


#### Meaning of icons

<div class="indented">

<span class="text-info">:fas-info:</span> : additional info <br>
<span class="text-warning">:fas-exclamation:</span> : warning <br>
<span class="text-success">:fas-check:</span> : positive message <br>
<span class="text-danger">:fas-flag:</span> or {{ icon_important_big_red }} : important message <br>
<span class="text-danger">:fas-times:</span> : error or danger to avoid <br>
<span class="text-success">:fas-lightbulb:</span> or {{ icon_tip }} : tip <br>
<span class="text-primary">:fas-book:</span> : definition or topic <br>
{{ icon_extra }} : tangential info, can be ignored if not interested<br>
{{ icon_outcome }} : learning outcomes<br>
{{ icon_example }} : examples<br>
{{ icon_resource }} : resources<br>
{{ icon_exercise }} : exercises<br>
{{ icon_print }} : printable version<br>
{{ icon_preview }} : preview/more info<br>
{{ icon_video }} : video<br>
{{ icon_terminal }} : a command to be run in a terminal<br>
{{ icon_text }} : textual description<br>
{{ icon_slides }} : slides<br>
{{ icon_output }} : output produced by running code<br>
{{ icon_Q }} question without answer<br>
{{ icon_Q_A }} question with answer<br>
</div>

</div>
<div id="searching">

### Searching{.text-white .bg-secondary .p-2}

The book currently does not have a _search_ feature. The workaround is to load [the printable version of the book]({{baseUrl}}/common/print.html) (which loads the entire book into one page, minus the exercises) and use the Browser's search function.

</div>
<div id="saving">

### Saving as PDF files{.text-white .bg-secondary .p-2}

Follow [this guide @SE-EDU/guides](https://se-education.org/guides/tutorials/savingPdf.html).

</div>
<div id="printing">

### Printing{.text-white .bg-secondary .p-2}

The {{icon_print}} icon indicates printer-friendly versions of each chapter. A printer-friendly version of the entire book can be found [here]({{baseUrl}}/common/print.html).

</div>

</div>
