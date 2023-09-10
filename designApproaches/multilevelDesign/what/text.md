<span id="title">Multi-level design</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain multi-level design</span>

<div id="body">

In a smaller system, the design of the entire system can be shown in one place.

<div v-closeable alt="single-level design example">

<box>

{{ icon_example }} This class diagram of [se-edu/addressbook-level2](https://se-education.org/addressbook-level2) depicts the design of the entire software.

<pic eager src="https://se-education.org/addressbook-level2/images/mainClassDiagram.png" width="600" />

</box>

</div>

**The design of bigger systems needs to be done/shown at multiple levels.**

<div v-closeable alt="multi-level design example">

<box>

{{ icon_example }} This architecture diagram of [se-edu/addressbook-level3](https://se-education.org/addressbook-level3) depicts the high-level design of the software.

<pic eager src="https://se-education.org/addressbook-level3/images/ArchitectureDiagram.png" width="300" />

Here are examples of lower level designs of some components of the same software:

<tabs>
  <tab header="UI">

<pic eager src="https://se-edu.github.io/addressbook-level3/images/UiClassDiagram.png" width="700" />

  </tab>
  <tab header="Logic" class="d-print-none">

<pic eager src="https://se-edu.github.io/addressbook-level3/images/LogicClassDiagram.png" width="800" />

  </tab>
  <tab header="Storage" class="d-print-none">

<pic eager src="https://se-edu.github.io/addressbook-level3/images/StorageClassDiagram.png" width="700" />

  </tab>
</tabs>

</box>

</div>

</div>

<div id="extras">
</div>
