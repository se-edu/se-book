<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the two types of developer docs</span>

<div id="body">

**Developer-to-developer documentation can be in one of two forms:**

1. **Documentation for _developer-as-user_**: Software components are written by developers and reused by other developers, which means there is a need to document how such components are to be used. Such documentation can take several forms:
   * API documentation: APIs expose functionality in small-sized, independent and easy-to-use chunks, each of which can be documented systematically. 
   * Tutorial-style instructional documentation: In addition to explaining functions/methods independently, some higher-level explanations of how to use an API can be useful.
  
<box>

<div class="alt-java">

* {{ icon_example }} Example of API Documentation: [String API]({{ java_api }}/java/lang/String.html).
* {{ icon_example }} Example of tutorial-style documentation: [Java Internationalization Tutorial]({{ java_tutorial }}/i18n/index.html)

</div>
<div class="alt-python">

* {{ icon_example }} Example of API Documentation: [string API](https://docs.python.org/3/library/string.html).
* {{ icon_example }} Example of tutorial-style documentation: [How to use Regular Expressions in Python](https://docs.python.org/3/howto/regex.html)

</div>

</box>

2. **Documentation for _developer-as-maintainer_**: There is a need to document how a system or a component is designed, implemented and tested so that other developers can maintain and evolve the code. Writing documentation of this type is harder because of the need to explain complex internal details. However, given that readers of this type of documentation usually have access to the source code itself, only _some_ information need to be included in the documentation, as code (and code comments) can also serve as a complementary source of information.

<box>

* {{ icon_example }} An example: [se-edu/addressbook-level4 Developer Guide](https://se-edu.github.io/addressbook-level4/DeveloperGuide.html#design).

</box>

Another view proposed by Daniele Procida in [this article](https://www.divio.com/blog/documentation/), is as follows:

<blockquote>

**There is a secret that needs to be understood in order to write good software documentation: there isn’t one thing called documentation, there are four.
They are: tutorials, how-to guides, explanation and technical reference.** They represent four different purposes or functions, and require four different approaches to their creation. Understanding the implications of this will help improve most software documentation - often immensely.
...

<div class="container">
<div class="row">
<div class="col  border">

**TUTORIALS**

A tutorial:
* is learning-oriented
* allows the newcomer to get started
* is a lesson

Analogy: teaching a small child how to cook
</div>
<div class="col border">

**HOW-TO GUIDES**

A how-to guide:
* is goal-oriented
* shows how to solve a specific problem
* is a series of steps

Analogy: a recipe in a cookery book
</div>
<div class="w-100"></div>
<div class="col border">

**EXPLANATION**

An explanation:
* is understanding-oriented
* explains
* provides background and context

Analogy: an article on culinary social history
</div>
<div class="col border">

**REFERENCE**

A reference guide:
* is information-oriented
* describes the machinery
* is accurate and complete

Analogy: a reference encyclopedia article
</div>
</div>
</div>

</blockquote>

**Software documentation (applies to both user-facing and developer-facing) is best kept in a text format**, for the ease of version tracking. **A writer friendly source format is also desirable** as non-programmers (e.g., technical writers) may need to author/edit such documents. As a result, formats such as Markdown, Asciidoc, and PlantUML are often used for software documentation.

</div>

<div id="extras">

<include src="exercises.md" />

</div>