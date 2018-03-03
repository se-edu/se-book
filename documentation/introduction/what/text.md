<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### What :one:

</div>

<div id="body">

**Developer-to-developer documentation can be in one of two forms:**

1. **Documentation for _developer-as-user_**: Software components are written by developers and reused by other developers, which means there is a need to document how such components are to be used. Such documentation can take several forms:
   * API documentation: APIs expose functionality in small-sized, independent and easy-to-use chunks, each of which can be documented systematically. 
   * Tutorial-style instructional documentation: In addition to explaining functions/methods independently, some higher-level explanations of how to use an API can be useful.
  
<tip-box>

<tabs> 
  <tab header="Java">

* :package: Example of API Documentation: [String API](http://download.oracle.com/javase/8/docs/api/).
* :package: Example of tutorial-style documentation: [Java Intenatioanalization Tutorial](https://docs.oracle.com/javase/tutorial/i18n/index.html)

  </tab>
  <tab header="Python">

* :package: Example of API Documentation: [string API](https://docs.python.org/3/library/string.html).
* :package: Example of tutorial-style documentation: [How to use Regular Expressions in Python](https://docs.python.org/3/howto/regex.html)

  </tab>
</tabs>

</tip-box>

2. **Documentation for _developer-as-maintainer_**: There is a need to document how a system or a component is designed, implemented and tested so that other developers can maintain and evolve the code. Writing documentation of this type is harder because of the need to explain complex internal details. However, given that readers of this type of documentation usually have access to the source code itself, only _some_ information need to be included in the documentation, as code (and code comments) can also serve as a complementary source of information.

<tip-box>

* :package: An example: [se-edu/addressbook-level4 Developer Guide](https://se-edu.github.io/addressbook-level4/DeveloperGuide.html#design).

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
