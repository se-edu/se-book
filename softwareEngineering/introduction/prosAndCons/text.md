<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain pros and cons of software engineering</span>

<span id="title">Software Engineering: Then, Now, and Next</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-se" inline trim />
</box>


**In plainer terms, software engineering is the discipline of turning human needs into dependable software, under real-world constraints** of time, money, people, and imperfect information. It includes programming, but also asks what should be built, whether it works, and how to keep it useful as the world changes. To see what this discipline demands of you -- and what it gives back -- it helps to know where it came from, how AI is transforming it, and where it may be heading.

##### **Then**: born of a crisis

**The term *software engineering* rose to prominence in 1968, as an aspiration, in the middle of a crisis.** Many early programs were written by individuals, and were small enough for one mind to hold. As software grew in scale and importance, that stopped working: projects ran late, went over budget, failed in the field, or were never finished at all -- a situation alarming enough to be named the *software crisis*. A [NATO conference](https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp48950) convened to confront it chose a deliberately provocative title, *software engineering*, to express a hope: that building software could become as disciplined as older engineering fields. The machines of 1968 look primitive now, but the complaints recorded there -- slipped schedules, ballooning costs, brittle systems -- could have been written last week.

**The joys of software engineering still draw people to the field.** *<trigger for="modal:mmm" trigger="click">_The Mythical Man-Month_, by Frederick P. Brooks</trigger>* lists them: the sheer pleasure of making things, especially things useful to other people; the fascination of solving puzzle-like problems; the delight of a medium so flexible that ideas become working creations, with no factory or raw materials in between; and the constant learning that an ever-changing field forces on its practitioners.

**The woes of software engineering have survived too.** Brooks listed several. Programs must be exactly right: computers do what you say, not what you mean; reviews, tests, and fault-tolerant designs exist largely to catch the inevitable mistakes. Engineers rarely set their own objectives, and depend on people, requirements, and code they do not control. Testing and debugging are painstaking, and the last stretch of a project often costs the most. Products, and the specific technologies behind them, begin to grow obsolete the day they ship. Still, Brooks concluded -- likening programming to a tar pit, yet genuinely creative -- that for many, "the joys far outweigh the woes."

**Brooks' most famous prediction came in 1986: no single breakthrough -- no silver bullet -- would transform software development within a decade.** In [*No Silver Bullet*](https://en.wikipedia.org/wiki/No_Silver_Bullet), he split software's difficulty into *accidental* complexity, caused by our imperfect tools, and *essential* complexity, inherent in the problem itself. Because essential complexity dominated the remaining work, he argued, no single development was likely to deliver a ten-fold improvement in productivity, reliability, or simplicity. He weighed the candidates of his day -- including AI -- and found no breakthrough. Decade after decade, his verdict held. **Then large language models learned to write code.** Are they, at last, the silver bullet Brooks doubted we would ever find?

##### **Now**: the AI inflection

**Software engineering covers the whole life of a system, not just the writing of its code.** Engineers investigate user needs, design, implement, test and review, deploy, secure, respond to failures, and evolve systems over years -- iteratively rather than in a neat sequence, in teams rather than alone, and measured by value delivered rather than code produced. Practices such as agile processes, DevOps, and continuous delivery exist to manage this reality; the [SWEBOK guide](https://www.computer.org/education/bodies-of-knowledge/software-engineering) maps the territory.

**AI now takes part in nearly all of those activities.** Within a few years of appearing, AI coding tools became a routine part of most developers' work. They go far beyond code completion: exploring an unfamiliar codebase, generating and transforming code, proposing tests, diagnosing failures, reviewing changes, drafting documentation -- and, in *agentic* mode, taking a natural-language goal, editing several files, running tests, and preparing a change for human review. (The casual extreme, accepting generated code without close inspection, is popularly called *vibe coding*.)

**Yet faster generation does not automatically mean better software.** In surveys, developers' [most common frustration](https://survey.stackoverflow.co/2025/ai) is AI output that is *almost right, but not quite* -- and spotting a subtle flaw in plausible code can demand more expertise than writing it. [One randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) famously found experienced developers were *slower* with AI assistance even while believing they had been faster; a [later study](https://metr.org/blog/2026-02-24-uplift-update/) with newer, agentic tools estimated some speedup, though selection effects left its size uncertain. The honest summary: the benefit varies by task, codebase, tool, and skill of use -- and intuition is a poor way to measure it.

**The most durable finding so far: AI amplifies the engineering system around it.** [Research surveying thousands of professionals](https://dora.dev/research/2025/dora-report/) finds that AI magnifies an organization's existing strengths and weaknesses. A team with clear goals, good tests, effective review, and fast feedback converts faster generation into faster value; a team without them merely produces defects sooner. Through Brooks' lens, AI looks like the strongest attack yet on *accidental* complexity. It helps with essential work too -- exploring requirements, sketching designs -- but humans still decide what to build, and judge whether it was built well. That is why AI makes software engineering fundamentals more important, not less.

**Engineers also increasingly build software that *contains* AI**, which brings engineering concerns of its own: data quality, unpredictable outputs, evaluation, privacy, algorithmic bias, and monitoring.

##### **Next**: the evolving engineer

**The direction of travel is delegation in ever-larger units: from lines, to tasks, toward whole slices of a project.** On controlled task suites, AI agents can complete [ever-longer tasks](https://arxiv.org/abs/2503.14499) -- though real, long-lived projects are messier than any benchmark. Instructing computers through natural language, examples, and tests may become as important as writing code by hand.

**One possible next step is *AI-native software engineering*: redesigning the workflow around sustained human-AI collaboration, instead of bolting an assistant onto today's practice.** The progression: *AI-assisted* engineering keeps AI inside a human-directed workflow; *agentic* engineering delegates multi-step tasks; *AI-native* engineering redesigns the process itself. In this vision, sometimes labeled [*SE 3.0*](https://doi.org/10.1145/3807901), engineers capture goals, constraints, designs, and acceptance criteria in forms agents can act on; agents plan changes, write code, run tests, and review one another's work; humans set direction, resolve trade-offs, and decide what is safe to release. If so, the classic engineering artifacts -- requirements, tests, architecture records, security controls -- will matter *more*, not less: they are the guardrails within which agents operate.

**How far this goes is disputed -- treat predictions as claims to evaluate, not camps to join.** At one extreme, some foresee the *end of programming*: most software requested in natural language and generated on demand. Skeptics counter that benchmarks simplify away much of real software work -- ambiguous objectives, tacit knowledge, long-term maintenance -- and that a patch which passes the tests is not yet a dependable system. Evaluating the evaluators is itself a software engineering problem.

**As implementation becomes easier to delegate, deciding, designing, verifying, and taking responsibility become more valuable.** Someone must understand the users and the domain; decide what should -- and should not -- be built; specify and decompose it; design a coherent, maintainable system; detect convincing-looking mistakes; integrate human and machine work; and answer for the deployed result. AI can contribute to every one of those activities, but contribution is not accountability.

**And no one can direct, evaluate, or fix work they do not understand -- which is why the software engineering foundations matter more than ever.** The world still needs plenty of software engineers, even as its skill mix shifts: less hand-writing of code; more directing, evaluating, and taking responsibility for it.

**The software engineering field today is in the middle of its biggest shift since 1968 -- and the ending has not been written.** The joys Brooks catalogued remain; some of the oldest woes may be shrinking; new ones are taking their place. Whether AI proves to be the silver bullet he doubted would come, or "only" the most powerful amplifier engineers have ever held, is a question that is yet to be answered.


<modal header="**:book: The Mythical Man-Month: Essays on Software Engineering**" id="modal:mmm">

<table>
<tbody>
<tr>
<td>
<pic eager src="https://upload.wikimedia.org/wikipedia/en/f/fd/Mythical_man-month_%28book_cover%29.jpg" height="250" />
</td>
<td>
<pic eager src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fred_Brooks.jpg/800px-Fred_Brooks.jpg" height="250" />
</td>
<tr>
<td>

<sub>[[Text and book cover source: Wikipedia](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)]</sub>

</td>
<td>

<sub>[[Fred Brooks photo source](https://commons.wikimedia.org/wiki/File:Fred_Brooks.jpg)]</sub>

</td>
</tr>
</tbody>
</table>

_The Mythical Man-Month: Essays on Software Engineering_ is a book on software engineering and project management by Fred Brooks, whose central theme is that "adding manpower to a late software project makes it later". This idea is known as Brooks's law, and is presented along with the second-system effect and advocacy of prototyping.

</modal>

</div>

<div id="extras">
</div>
