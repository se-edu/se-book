<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">IDEs :arrow_right: Debugging :arrow_right:</div>

<div id="title">

#### What :one:

</div>

<div id="body">

_Debugging_ is the process of discovering defects in the program. Here are some approaches to debugging:

*	**By inserting temporary print statements**: This is an ad-hoc approach in which print statements are inserted in the program to output variable values, as well as program states. While this approach is simple, it incurs extra effort when inserting and removing the print statements. Moreover, unnecessary program modification increases the risk of introducing errors into the program.  These print statements, if not promptly removed, may even appear unexpectedly in the production version. Therefore, this approach is not recommended.
*	**By manually tracing through the code**: Otherwise known as ‘eye-balling’, this approach has its merits. However, it is a difficult, time consuming, and error-prone technique. Indeed, the effectiveness of manual debugging is highly dependent on one’s programming proficiency.
*	**Using a debugger**:  A debugger tool allows us to pause the execution, then step through one statement at a time while examining the internal state if necessary. Most IDEs come with an inbuilt debugger. This is the recommended approach for debugging.

</div>

</div>
