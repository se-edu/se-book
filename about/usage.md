<frontmatter>
title: "About: Usage"
pageNav: 3
</frontmatter>

<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Using this book

<div id="browsers">

### Browser compatibility

Most of this will work on most mainstream Browsers, but ==embedded slides are best viewed using Chrome==.

</div>
<div id="layers">

### Information layers

This book tries to _layer_ information so that readers can decide to omit less important layers if they wish to. 

**More important information are in bold** or ==highlighted== while %%less important information are dimmed%% or in collapsed panels such as the below.

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


**Tabs indicate alternative formats of the same content** (e.g. video vs text). You can choose the one you like and ignore the other tabs. 

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

**Dotted underlines indicate <trigger for="pop:tooltip-example">tool tips</trigger>** (activated by hovering over it) and **dashed underlines indicate <trigger for="modal:modal-example" trigger="click">modal windows</trigger>** (activated by clicking) containing additional information.

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

### Conventions used

#### Shorthand headings

Meaning of some shortened headings:

* <big>**What**</big> : the **meaning** of the concept in concern 

  <panel header="%%Example%%" src="../refactoring/what/unit-inElsewhere-asFlat.md" boilerplate />

* <big>**Why**</big> : the **motivation** behind the concept in concern

  <panel header="%%Example%%" src="../documentation/guidelines/goTopDown/why/unit-inElsewhere-asFlat.md" boilerplate />
  
* <big>**How**</big> : the **usage** of the concept in concern 

  <panel header="%%Example%%" src="../refactoring/how/unit-inElsewhere-asFlat.md" boilerplate />
  
* <big>**When**</big> : the **pros and cons** of the concept in concern, **when to use** the concept 

  <panel header="%%Example%%" src="../refactoring/when/unit-inElsewhere-asFlat.md" boilerplate />
  

#### Boxed-text styles
<div class="indented">

<box type="info">
    additional info
</box>
<box type="warning">
    warning
</box>
<box type="success">
    positive message
</box>
<box type="important">
    important message
</box>
<box type="wrong">
    an error to avoid
</box>
<box type="tip">
    tip
</box>
<box type="definition">
    definition
</box>

</div>

#### Meaning of icons

<div class="indented">

{{ icon_extra }} : tangential info, can be ignored if not interested<br>
{{ icon_new_window }} : direct link to the LO. <kbd>Ctrl</kbd>+`Click` to open the LO in new window/tab.<br>
{{ icon_outcome }} : learning outcomes<br>
{{ icon_prereq }} : prerequisite learning outcome<br>
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

### Searching

The book currently does not have a _search_ feature. The workaround is to load [the printable version of the book]({{baseUrl}}/common/print.html) (which loads the entire book into one page, minus the exercises) and use the Browser's search function.

</div>
<div id="saving">

### Saving as PDF files

Follow [this guide @SE-EDU/guides](https://se-education.org/guides/tutorials/savingPdf.html).

</div>
<div id="printing">
  
### Printing

The {{icon_print}} icon indicates printer-friendly versions of each chapter. A printer-friendly version of the entire book can be found [here]({{baseUrl}}/common/print.html)

</div>

</div>
