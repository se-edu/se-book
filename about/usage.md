<frontmatter>
title: "About: Usage"
</frontmatter>

<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Using This Book

* [Browser Compatibility](#browsers)
* [Information Layers](#layers)
* [Conventions Used](#conventions)
* [Saving as PDF files](#saving)
* [Printing](#printing)

<div id="browsers">

### Browser Compatibility

This book is best viewed using the ==Chrome browser==.

</div>
<div id="layers">

### Information Layers

The book tries to _layer_ information so that readers can decide to omit less important layers if they wish to. 

**More important information are in bold** or ==highlighted== while %%less important information are dimmed%% or in collapsed panels such as the below.

<panel header="%%Some less important info in a panel%%">

Less important info

</panel><p/>
<panel header="%%Some less important info in a boarder-less panel%%" type="seamless">

Less important info

</panel><p/>

**Tabs indicate alternative formats of the same content** (e.g. video vs text). You can choose the one you like and ignore the other tabs. 

<tip-box>

<tabs> 
  <tab header=":abc:">
  
Some textual description of X

  <hr></tab>
  <tab header="{{ icon_video }}">

Video describing X

  <hr></tab>
</tabs>

</tip-box>

**Dotted underlines indicate <trigger for="pop:tooltip-example">tool tips</trigger>** (activated by hovering over it) and **dashed underlines indicate <trigger for="modal:modal-example" trigger="click">modal windows</trigger>** (activated by clicking) containing additional information.

<popover id="pop:tooltip-example" title="Tooltip Example" placement="top">
  <div slot="content">
    Additional information
  </div>
</popover>

<modal title="Modal Example" id="modal:modal-example">
  Additional information
</modal>

**Sections tagged as <span class='badge'>tangential</span> can be ignored because they are tangential info** that are strictly not within the scope of the topic.

</div>
<div id="conventions">

### Conventions Used

Meaning of some shortened headings:

* **What** : the **meaning** of the concept in concern 

  <panel header="%%Example%%" src="../refactoring/what/unit-inElsewhere-asFlat.md" boilerplate />

* **Why** : the **motivation** behind the concept in concern

  <panel header="%%Example%%" src="../documentation/guidelines/goTopDown/why/unit-inElsewhere-asFlat.md" boilerplate />
  
* **How** : the **usage** of the concept in concern 

  <panel header="%%Example%%" src="../refactoring/how/unit-inElsewhere-asFlat.md" boilerplate />
  
* **When** : the **pros and cons** of the concept in concern, **when to use** the concept 

  <panel header="%%Example%%" src="../refactoring/when/unit-inElsewhere-asFlat.md" boilerplate />
  

Boxed-text styles:

<tip-box type="info">
    additional info
</tip-box>
<tip-box type="warning">
    warning
</tip-box>
<tip-box type="success">
    positive message
</tip-box>
<tip-box type="important">
    important message
</tip-box>
<tip-box type="wrong">
    an error to avoid
</tip-box>
<tip-box type="tip">
    tip
</tip-box>
<tip-box type="definition">
    definition
</tip-box>

Meaning of icons:

* <span class="badge">tangential</span> : tangential info, can be ignored if not interested
* {{glyphicon_new_window}} : direct link to the LO. `Ctrl+Click` to open the LO in new window/tab.
* {{glyphicon_flag}} : learning outcomes
* {{ icon_prereq }} : prerequisite learning outcome
* {{ icon_example }} : examples
* :paperclip: : resources
* :muscle: : exercises
* {{glyphicon_print}} : printable version
* {{glyphicon_eye_open}} : preview/more info
* {{ icon_video }} : video
* :abc: : textual description
* :bar_chart: : slides
* :arrow_heading_down: : output produced by running code
* :lock: question without answer
* :lock::key: question with answer

</div>
<div id="searching">

### Searching

The book currently does not have a _search_ feature. The workaround is to load [the printable version of the book]({{baseUrl}}/common/print.html) (which loads the entire book into one page, minus the exercises) and use the Browser's search function.

</div>
<div id="saving">

### Saving as PDF Files

1. Use Chrome to load the page you want to save as pdf.

1. Click on the `Print` option in Chrome’s menu.

1. Set the destination to `Save as PDF`, then click `Save` to save a copy of the file in PDF format. For best results, use the settings indicated in the screenshot below.<br/>
  <img src="{{baseUrl}}/about/images/chromeSaveAsPdf.png" />

</div>
<div id="printing">
  
### Printing

The {{glyphicon_print}} icon indicates printer-friendly versions of each chapter. A printer-friendly version of the entire book can be found [here]({{baseUrl}}/common/print.html)

</div>

</div>
