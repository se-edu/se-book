{% from "common/macros.njk" import show_term with context %}
<span id="title">XP</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain XP</span>

<div id="body">

The following description was adapted from the [XP home page](http://www.extremeprogramming.org), emphasis added:

<box>

**{{ show_term("Extreme Programming (XP)") }} stresses customer satisfaction.** Instead of delivering everything you could possibly want on some date far in the future, this process delivers the software you need as you need it.

**XP aims to empower developers to confidently respond to changing customer requirements**, even late in the lifecycle.

**XP emphasizes teamwork.** Managers, customers, and developers are all equal partners in a collaborative team. The team self-organizes around the problem to solve it as efficiently as possible.

**XP aims to improve a software project in five essential ways: communication, simplicity, feedback, respect, and courage.** Extreme Programmers constantly communicate with their customers and fellow programmers. They keep their design simple and clean. They get feedback by testing their software starting on day one. With this foundation, Extreme Programmers are able to courageously respond to changing requirements and technology.

<pic eager src="{{baseUrl}}/processModels/exampleProcessModels/xp/images/diagram.png" height="200" />
<p/>

</box>

**What makes XP 'extreme' is not the practices it uses but how often it uses them.** Each one was already considered good; XP pushes each to the point where it happens continuously rather than in a scheduled phase:

* releases are small and frequent, rather than saved up for a milestone;
* code is integrated continuously, rather than merged near the end ({{ show_term("continuous integration") }});
* tests are written before the code they test, rather than after ({{ show_term("test-driven development") }});
* the design is refactored constantly, rather than in a cleanup phase;
* two programmers write the code together at one keyboard, so it is reviewed as it is written rather than in a scheduled review ({{ show_term("pair programming") }}).

**That is the same argument iterative models make about the whole lifecycle**, applied to individual development practices instead: shorten the gap between doing something and finding out whether it worked.

</div>

<div id="extras">
</div>
