<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain debugging</span>

<div id="title">

#### What

</div>

<div id="body">

**_Debugging_ is the process of discovering defects in the program.** Here are some approaches to debugging:

* {{ bad }} -- **By inserting temporary print statements**: This is an ad-hoc approach in which print statements are inserted in the program to print information relevant to debugging, such as variable values. e.g. `Exiting process() method, x is 5.347`. This approach is not recommended due to these reasons.
  * Incurs extra effort when inserting and removing the print statements. 
  * Unnecessary program modifications increases the risk of introducing errors into the program.  
  * These print statements, if not promptly removed, may even appear unexpectedly in the production version. 

* {{ bad }} -- **By manually tracing through the code**: Otherwise known as ‘eye-balling’, this approach doesn't have the cons of the previous approach, but it too is not recommended (other than as a 'quick try') due to these reasons:
  * It is difficult, time consuming, and error-prone technique.
  * If you didn't spot the error while writing code, you might not spot the error when reading code too.

* {{ good }} -- **Using a debugger**:  A debugger tool allows you to pause the execution, then step through one statement at a time while examining the internal state if necessary. Most IDEs come with an inbuilt debugger. **This is the recommended approach for debugging**.

</div>

<div id="extras">
</div>