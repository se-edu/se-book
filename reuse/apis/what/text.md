<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain APIs</span>

<div id="body">

**An _Application Programming Interface (API)_ specifies the interface through which other programs can interact with a software component.** It is a contract between the component and its clients.

<tip-box>

{{ icon_example }} A class has an API (e.g., [API of the Java `String` class]({{ java_api }}/java/lang/String.html), [API of the Python `str` class](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)) which is a collection of public methods that you can invoke to make use of the class.

{{ icon_example }} The [GitHub API](https://developer.github.com/v3/) is a collection of Web request formats GitHub server accepts and the corresponding responses. We can write a program that interacts with GitHub through that API.

</tip-box>

When developing large systems, if you define the API of each components early, the development team can develop the components in parallel %%&nbsp;because the future behavior of the other components are now more predictable%%. 

</div>

<div id="extras">

<include src="exercises.md" />

</div>