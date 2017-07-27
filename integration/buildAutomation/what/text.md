<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Integration :arrow_right: Build Automation :arrow_right:</div>

<div id="title">

#### What :one:

</div>

<div id="body">

In a non-trivial project, building a product from source code can be a complex multi-step process. For example, it can include steps such as to pull code from the revision control system, compile, link, run automated tests, automatically update release documents (e.g. build number), package into a distributable, push to repo, deploy to a server, delete temporary files created during building/testing, email developers of the new build, and so on. Furthermore, this build process can be done ‘on demand’, it can be scheduled (e.g. every day at midnight) or it can be triggered by various events (e.g. triggered by a code push to the revision control system).

Some of these build steps such as to compile, link and package are already automated in most modern IDEs. For example, several steps happen automatically when the ‘build’ button of the IDE is clicked. Some IDEs even allow customization to this build process to some extent.

However, most big projects use specialized build tools to automate complex build processes.

Build tool examples:

*	[Gradle](https://gradle.org/)
*	[Maven](http://maven.apache.org/)
*	[Apache Ant](http://ant.apache.org/)
*	[GNU Make](http://www.gnu.org/software/make/)

Modern software projects often depend on third party libraries that evolve constantly. That means developers need to download the correct version of the required libraries and update them regularly. Therefore, dependency management is an important part of build automation. _Dependency Management_ tools can automate that aspect of a project. Maven and Gradle, in addition to managing the build process, can play the role of dependency management tools too.

</div>

<div id="extras">

<include src="exercises.md" />

<div>

</div>
