<span id="title">Avoid premature optimizations</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: avoid premature optimizations </span>

<div id="body">

**Optimizing code prematurely has several drawbacks**:
* **You may not know which parts are the real performance bottlenecks**. This is especially the case when the code undergoes transformations (e.g. compiling, minifying, transpiling, etc.) before it becomes an executable. Ideally, you should use a profiler tool to identify the actual bottlenecks of the code first, and optimize only those parts.
* **Optimizing can complicate the code**, affecting correctness and readability.
* **Hand-optimized code can be harder for the compiler to optimize** (the simpler the code, the easier it is for the compiler to optimize). In many cases, a compiler can do a better job of optimizing the runtime code if you don't get in the way by trying to hand-optimize the source code.

**_Make it work, make it right, make it fast_** is popular saying in the industry, which means in most cases, getting the code to perform correctly should take priority over optimizing it. If the code doesn't work correctly, it has no value no matter how fast/efficient it is.

> {{ icon_quote_start }} Premature optimization is the root of all evil in programming. {{ icon_quote_end }} <sub>-- [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)</sub>

**Of course, there are cases in which optimizing takes priority over other things** %%e.g. when writing code for resource-constrained environments%%. This guideline is simply a caution that you should optimize only when it is really needed.

</div>

<div id="extras">
</div>
