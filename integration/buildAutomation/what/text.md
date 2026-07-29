{% from "common/macros.njk" import show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain build automation tools</span>

<div id="body">

**{{ show_term("Build automation tools") }} automate the steps of the build process, usually by means of build scripts.**

In a non-trivial project, building a product from its source code can be a complex multistep process. %%For example, it can include steps such as: pull code from the revision control system, compile, link, run automated tests, automatically update release documents (e.g., build number), package into a distributable, push to a repository, deploy to a server, delete temporary files created during building/testing, email developers of the new build, and so on. Furthermore, this build process can be done ‘on demand’, scheduled (e.g., every day at midnight), or triggered by various events (e.g., triggered by a code push to the revision control system).%%

Some of these build steps, such as compiling, linking, and packaging, are already automated in most modern IDEs. %%For example, several steps happen automatically when the ‘build’ button of the IDE is clicked. Some IDEs even allow customization of this build process to some extent.%%

However, most big projects use specialized build tools to automate complex build processes.<br>
{{ label_example }} %%Some popular build tools relevant to Java developers: [Gradle](https://gradle.org/), [Maven](http://maven.apache.org/), [Apache Ant](http://ant.apache.org/), [GNU Make](http://www.gnu.org/software/make/)%%<br>
{{ label_example }} %%Some other build tools: Grunt (JavaScript), Rake (Ruby)%%

**Some build tools also serve as {{ show_term("dependency management tools") }}**. Modern software projects often depend on third-party libraries that evolve constantly. That means developers need to download the correct version of the required libraries and update them regularly. Therefore, dependency management is an important part of build automation. Dependency management tools can automate that aspect of a project.<br>
{{ label_example }} %%Maven and Gradle, in addition to managing the build process, can also serve as dependency management tools.%%

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
