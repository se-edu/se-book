{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Iterative models</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain iterative process models</span>

<div id="body">

**The {{ show_term("iterative model") }} advocates producing the software by going through several _iterations_.** Each iteration could go through all the stages of the SDLC, from requirements gathering to deployment.

<pic eager src="{{baseUrl}}/processModels/introduction/iterativeModels/images/diagram.png" width="600" />
<p/>

**Each iteration produces a new version of the product**, building upon the previous version. Feedback from each iteration is factored into the subsequent iterations. For example, if an implementation task took longer than expected, the effort estimate for similar tasks in future iterations can be adjusted. Similarly, if a feature introduced in the current iteration was not well-received by target users, it can be removed or tweaked in the next iteration.

**The two models divide a project along different lines.** A sequential project is divided by activity: a stage is 'requirements' or 'testing', and it ends when that activity is finished for the whole product. **An iterative project is divided into bounded cycles instead**: an iteration runs through several activities and ends in a result the team can learn from. What each iteration is for is then a choice -- most often a slice of functionality, 'the part that does X', but it can equally be a component, a risky assumption, or a level of completeness across the whole product.

**The iterative model can use a _breadth-first_ or _depth-first_ approach.**
* **In the {{ show_term("breadth-first") }} approach, an iteration evolves all major components and all functionality areas in parallel, producing a working product at the end of each iteration** %%i.e., most features and most <tooltip content="i.e., the parts the software is divided into e.g., user interface, back-end, database etc.">components</tooltip> are updated in every iteration%%.
* **In the {{ show_term("depth-first") }} approach, an iteration focuses on fleshing out only some components or some functionality area.** Accordingly, early depth-first iterations might not produce a working product.

**Iterating and incrementing are two different things, and most projects do both.** To iterate is to rework something that already exists, in the light of feedback; to increment is to add to it. That is why the two are usually named together, as an _iterative and incremental_ approach.

**What an iteration delivers is called an {{ show_term("increment") }}**: a usable improvement or addition to the product, not merely a new version of the code.

**An iteration is only worth its overhead if it ends in evidence.** Before starting one, decide what would show it succeeded -- a condition the result must satisfy, a test that must pass, or a demonstration to a target user -- and what decision the answer will drive. Without that, an iteration produces a new version and no new knowledge.

{% call show_example() %}
Taking a Minesweeper game as an example:

* breadth-first iterations will deliver a fully playable version early. These early versions may have primitive functionality, e.g. a rudimentary text-based UI, fixed board size, limited minefield layouts. This functionality (and the corresponding components) will then be improved in later iterations.
* an early depth-first iteration could deliver the full user interface (UI) but with no game logic at all. Alternatively, an early iteration could focus on just the logic for generating initial layouts of the minefield. Neither is a playable version of the game, but both can collect early feedback -- on the UI in the first case, on the minefield layouts in the second. That feedback then guides later iterations.
{% endcall %}

**A project can be done as a mixture of breadth-first and depth-first iterations** %%i.e., an iteration can contain some breadth-first work as well as some depth-first work, or some iterations can be breadth-first while others are depth-first%%.

**Whichever shape the iterations take, an early one is a chance to find out you were wrong while changing course is still cheap.** That makes the assumptions whose failure would cost the most -- an unproven technology, an unfamiliar user need, a performance target nobody has hit yet -- worth putting into an early iteration rather than a late one. Ordering iterations by risk in this way is the central idea of the {{ show_term("spiral model") }}.

**As AI coding advances, producing a candidate implementation is becoming much cheaper than it used to be; deciding what to build and confirming that the result is correct have not.** Within an iteration, that shifts the effort away from writing code and toward specifying and verifying. **It does not reduce the value of being precise about what is wanted**: a vague requirement that once produced a question from a teammate now produces a confident implementation of the wrong thing, quickly.

</div>

<div id="extras">
</div>
