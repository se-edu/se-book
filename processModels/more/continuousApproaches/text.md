{% from "common/macros.njk" import show_term with context %}
<span id="title">Continuous approaches</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain continuous delivery and continuous flow</span>

<div id="body">

**Shortening the gap between doing something and finding out whether it worked is the argument behind iterative development.** Two approaches take that argument further: one past the point of release, the other past the iteration itself.

**{{ show_term("Continuous delivery") }} keeps the software in a releasable state at all times**, so that a change can reach users as soon as it is ready rather than waiting for a scheduled release. Every change is integrated, built, and tested automatically, and a build that passes is one that could be released. The gap between making a change and learning how it behaves in real use then shrinks from months to days or hours -- which is what makes the feedback from released software usable while the team still remembers the code it concerns.

**{{ show_term("Continuous flow") }} drops fixed-length iterations altogether.** Instead of committing to a batch of work for the next two weeks, the team pulls one item at a time from a prioritized queue and limits how many items may be in progress at once. Work is released when it is finished rather than when the iteration ends. The best-known form of this is {{ show_term("Kanban") }}, in which the items and the limits are made visible on a board.

**The trade-off is between rhythm and responsiveness.** A fixed iteration gives a team a predictable planning cadence and a natural point to inspect and adapt, at the cost of making urgent work wait for the next one. Continuous flow can start the most important item the moment it appears, but a team that never stops to look back has to find another occasion to do so.

</div>

<div id="extras">
</div>
