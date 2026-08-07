{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Iterative models</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain iterative process models</span>

<div id="body">

**The {{ show_term("iterative model") }} advocates producing the software by going through several _iterations_.** Each of the iterations could potentially go through all the stages of the SDLC, from requirements gathering to deployment.

<pic eager src="{{baseUrl}}/processModels/introduction/iterativeModels/images/diagram.png" width="600" />
<p/>

**Each iteration produces a new version of the product**, building upon the version produced in the previous iteration. Feedback from each iteration is factored into the subsequent iterations. For example, if an implementation task took longer than expected, the effort estimate for similar tasks in future iterations can be adjusted accordingly. Similarly, if a feature introduced in the current iteration was not well-received by target users, it can be removed or tweaked in the next iteration.

**The two models divide a project along different lines.** A sequential project is divided by activity: a stage is 'requirements' or 'testing', and it ends when that activity is finished for the whole product. **An iterative project is divided by functionality**: an iteration is 'the part that does X', and it runs through several activities to deliver it.

**The iterative model can be done in a _breadth-first_ or _depth-first_ approach.**
* **In the {{ show_term("breadth-first") }} approach, an iteration evolves all major components and all functionality areas in parallel** %%i.e., most features and most <tooltip content="i.e., the parts the software is divided into e.g., user interface, back-end, database etc.">components</tooltip> will be updated in each iteration%%, producing a working product at the end of each iteration.
* **In the {{ show_term("depth-first") }} approach, an iteration focuses on fleshing out only some components or some functionality area.** Accordingly, early depth-first iterations might not produce a working product.

**A working product produced by an iteration is called an {{ show_term("increment") }}**, which is why a breadth-first iteration yields one and an early depth-first iteration may not. **An iteration is the cycle of work; the increment is what that cycle leaves behind.**

**An iteration is only worth its overhead if it ends in evidence.** Before starting one, decide what would show it succeeded -- a condition the result must satisfy, a test that must pass, or a demonstration to a target user -- and what decision the answer will drive. Without that, an iteration produces a new version and no new knowledge.

{% call show_example() %}
Taking a Minesweeper game as an example:

* breadth-first iterations will deliver a fully playable version early. These early versions may have primitive functionality, for example, a rudimentary text-based UI, fixed board size, limited minefield layouts, etc. These functionalities (and corresponding components) will then be improved in later releases.
* an early depth-first iteration could deliver the full user interface (UI) but with no game logic at all. Alternatively, an early iteration could focus on just the logic for generating initial layouts of the minefield. Neither will be a playable version of the game but both can be used to collect early feedback (about the UI, and the initial minefield layouts, respectively) which can then be used to guide later iterations.
{% endcall %}

**A project can be done as a mixture of breadth-first and depth-first iterations** %%i.e., an iteration can contain some breadth-first work as well as some depth-first work, or, some iterations can be breadth-first while others are depth-first%%.

**Whichever shape the iterations take, an early one is a chance to find out you were wrong while changing course is still cheap.** That makes the assumptions whose failure would cost the most -- an unproven technology, an unfamiliar user need, a performance target nobody has hit yet -- worth putting into an early iteration rather than a late one.

</div>

<div id="extras">
</div>
