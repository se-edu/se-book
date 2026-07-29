{% from "common/macros.njk" import show_term with context %}
<span id="title">Continuous integration and continuous deployment</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain continuous integration and continuous deployment</span>

<div id="body">

**An extreme application of build automation is called {{ show_term("continuous integration (CI)") }} in which integration, building, and testing happen automatically after each code change.**

**A natural extension of CI is {{ show_term("continuous deployment (CD)") }}, where the changes are not only integrated continuously but also deployed to end users at the same time.**<br>
{{ label_example }} %%Some CI/CD tools: [Travis](https://travis-ci.org/), [Jenkins](http://jenkins-ci.org), [Appveyor](https://www.appveyor.com), [CircleCI](https://circleci.com), [GitHub Actions](https://github.com/features/actions)%%

</div>

<div id="extras">
</div>
