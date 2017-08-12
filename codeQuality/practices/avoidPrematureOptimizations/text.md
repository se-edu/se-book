<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Practice KISSing

</div>

<div id="body">

**Optimizing code prematurely has several drawbacks**:
* **We may not know which parts are the real performance bottlenecks**. This is especially the case when the code undergoes transformations (e.g. compiling, minifying, transpiling, etc.) before it becomes an executable. Ideally, you should use a profiler tool to identify the actual bottlenecks of the code first, and optimize only those parts.
* **Optimizing can complicate the code**, affecting correctness and understandability
* **Hand-optimized code can be harder for the compiler to optimize** the code (the simpler the code, the easier for the compiler to optimize it)

A popular saying in the industry is **_make it work, make it right, make it fast_** which means in most cases getting the code to perform correctly should take priority over optimizing it. If the code doesn't work correctly, it has no value on matter how fast/efficient it it.

> Premature optimization is the root of all evil in programming. <sub>--[Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)</sub>

Note that **there are cases where optimizing takes priority over other things** %%e.g. when writing code for resource constrained environments%%. This guideline simply a caution that you should optimize only when it is really needed.

</div>

</div>
