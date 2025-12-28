<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">
</head-bottom>

<header sticky>
<navbar placement="top" type="dark">
<a slot="brand" href="https://se-education.org" title="SE-EDU" class="navbar-brand"><md>:fas-chevron-circle-left: ****SE-EDU****</md></a>
  <li><a href="{{baseUrl}}/index.html" class="nav-link"><md>**Home**</md></a></li>
  <li><a href="{{baseUrl}}/about/acknowledgements.html" class="nav-link"><md>**About**</md></a></li>
  <li><a href="https://github.com/se-edu/se-book" class="nav-link"><md>:fab-github:</md></a></li>
  <li slot="right" class="nav-link">
    <form class="navbar-form">
      <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right ></searchbar>
    </form>
  </li>
</navbar>
</header>

<div id="flex-body">
<nav id="site-nav" class="fixed-header-padding">
<div class="nav-component slim-scroll">
<site-nav>
* **About this book**
  * [About]({{baseUrl}}/about/acknowledgements.html)
  * [How to use this book]({{baseUrl}}/about/usage.html)
* **Software engineering**
  * [Software engineering]({{baseUrl}}/softwareEngineering/index.html)
* **Object-oriented programming**
  * [Object-oriented programming]({{baseUrl}}/oop/index.html)
* **Requirements**
  * [Requirements]({{baseUrl}}/requirements/index.html)
  * [Gathering requirements]({{baseUrl}}/gatheringRequirements/index.html)
  * [Specifying requirements]({{baseUrl}}/specifyingRequirements/index.html)
* **Design**
  * [Design]({{baseUrl}}/design/index.html)
  * [Design fundamentals]({{baseUrl}}/designFundamentals/index.html)
  * [Modeling (using UML)]({{baseUrl}}/modeling/index.html)
  * [Architecture]({{baseUrl}}/architecture/index.html)
  * [Design patterns]({{baseUrl}}/designPatterns/index.html)
  * [Design approaches]({{baseUrl}}/designApproaches/index.html)
* **Implementation**
  * [IDEs]({{baseUrl}}/ides/index.html)
  * [Code quality]({{baseUrl}}/codeQuality/index.html)
  * [Refactoring]({{baseUrl}}/refactoring/index.html)
  * [Documentation]({{baseUrl}}/documentation/index.html)
  * [Error handling]({{baseUrl}}/errorHandling/index.html)
  * [Integration]({{baseUrl}}/integration/index.html)
  * [Reuse]({{baseUrl}}/reuse/index.html)
* **Quality assurance**
  * [Quality assurance]({{baseUrl}}/qualityAssurance/index.html)
  * [Testing]({{baseUrl}}/testing/index.html)
  * [Test case design]({{baseUrl}}/testCaseDesign/index.html)
* **Project management**
  * [Project planning]({{baseUrl}}/projectPlanning/index.html)
  * [Teamwork]({{baseUrl}}/teamwork/index.html)
  * [SDLC process models]({{baseUrl}}/processModels/index.html)
* **Principles**
  * [Principles]({{baseUrl}}/principles/index.html)
* **Supplementary**
  * [C++ to Java]({{baseUrl}}/cppToJava/index.html)
  * [**Combined exercises**]({{baseUrl}}/combined/exercises.html)
  * [**List of definitions**]({{baseUrl}}/common/definitions.html)
  * [**List of references**]({{baseUrl}}/common/references.html)
  * [**List of learning outcomes**]({{baseUrl}}/common/outcomes.html)
  * [**Printable version**]({{baseUrl}}/common/print.html)
</site-nav>
</div>
</nav>
<div id="content-wrapper" class="fixed-header-padding">

# <span class="text-dark"><small>****Software Engineering for Self-Directed Learners »****</small></span>
  {{ content }}
</div>
<nav id="page-nav" class="fixed-header-padding">
  <div class="nav-component slim-scroll">
  <page-nav />
  </div>
</nav>
</div>

<footer>
  <div class="text-center">
    <small>[<md>**Powered by**</md> <img src="https://markbind.org/favicon.ico" width="30"> {{MarkBind}}, generated on {{timestamp}}]</small>
  </div>
</footer>
