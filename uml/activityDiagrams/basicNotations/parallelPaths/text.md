<div id="title">

#### Parallel Paths :two:

</div>

<div id="body">

**_Fork_ nodes indicate the start of <tooltip content="parallel">concurrent</tooltip> flows of control.** 

**_Join_ nodes indicate the end of parallel paths.

Both have the same notation: a bar.   

In a <tooltip content="paths within a matching fork-join pair">set of parallel paths</tooltip>, execution along **all parallel paths should be complete before the execution can start on the outgoing control flow of the _join_.**

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/parallelPaths/images/notation.png" height="130" />

<tip-box> 

:package: In this activity diagram (from an online shop website) the actions _User browsers products_ and _System records browsing data_ happen in parallel. Both of them need to finish before the _log out_ action can take place.

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/parallelPaths/images/example.png" width="260" />

</tip-box>

</div>

<div id="extras">
</div>

</div>
