{% from "common/macros.njk" import show_term with context %}

<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can explain pros and cons of software engineering</span>
<span id="title">Software Engineering: Then, Now, and Next</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-se" inline trim />
</box>

**Simply put, software engineering turns human needs into dependable software while dealing with real-world limits.** These limits include time, money, available people, and incomplete information. Software engineering includes programming, but it also covers deciding what to build, checking that it works, and keeping it useful as needs change. To understand the field, it helps to know how it began, how AI is changing it, and where it may go next.

##### **Then**: born of a crisis

**The term *software engineering* became well known during the software crisis of the late 1960s.** Many early programs were written by one person and were small enough for that person to understand fully. This approach stopped working as software became larger and more important. Projects were late, cost too much, failed after release, or were never finished. These problems became known as the *software crisis*. In 1968, a [NATO conference](https://www.cs.uni.edu/~wallingf/teaching/172/resources/nato1968.pdf) used the title *software engineering* to express a hope: building software could become as systematic as other engineering fields. Computers have changed greatly since 1968, but software projects still face late schedules, rising costs, and systems that break easily.

**The joys of software engineering still attract people to the field.** *<trigger for="modal:mmm" trigger="click">_The Mythical Man-Month_ by Frederick P. Brooks</trigger>* describes several of them. Engineers can enjoy building things that help other people, solving problems that feel like puzzles, and turning ideas into working software without needing a factory or raw materials. They also keep learning because the field is always changing.

**The woes of software engineering also remain.** Brooks listed several. Programs must be precise because computers follow instructions, not intentions. Reviews, tests, and fault-tolerant designs help us find or handle the mistakes that will occur. Engineers also depend on people, requirements, and code they do not control. Testing and debugging take careful work, and the last part of a project often costs the most. Products and the technologies used to build them can quickly become outdated. Even so, Brooks concluded that for many people, "the joys far outweigh the woes."

**In 1986, Brooks made a famous prediction: no single breakthrough -- no silver bullet -- would transform software development within ten years.** In [*No Silver Bullet*](https://en.wikipedia.org/wiki/No_Silver_Bullet), he divided the difficulty of building software into two types. {{ show_term("_Accidental_ complexity") }}  comes from imperfect tools. {{ show_term("_Essential_ complexity") }} comes from the problem being solved. Brooks argued that essential complexity made up most of the remaining work. Therefore, no single new method or tool was likely to make software development ten times more productive, reliable, or simple. He considered several possible breakthroughs, including AI, but rejected them all. His prediction remained true for decades. **Then large language models learned to write code.** Could they be the silver bullet that Brooks thought was unlikely?

##### **Now**: the AI inflection

**Software engineering covers the whole life of a system, not only writing its code.** Engineers study user needs, design and build the system, test and review it, deploy and secure it, fix failures, and improve it over time. They repeat these activities as needed and work in teams rather than alone. Success is measured by the value delivered, not the amount of code written. Practices such as agile processes, DevOps, and continuous delivery help teams manage this work. The [SWEBOK guide](https://www.computer.org/education/bodies-of-knowledge/software-engineering) gives an overview of the field.

**AI now helps with nearly all of these activities.** Within a few years, AI coding tools became a normal part of many developers' work. These tools can do much more than complete lines of code. They can explore an unfamiliar codebase, generate and change code, suggest tests, diagnose failures, review changes, and draft documentation. In *agentic* mode, an AI tool can receive a goal written in natural language, edit several files, run tests, and prepare the changes for a human to review. Accepting generated code without checking it carefully is often called *vibe coding*.

**However, generating code faster does not automatically produce better software.** In surveys, developers' [most common frustration](https://survey.stackoverflow.co/2025/ai) is AI output that is *almost right, but not quite*. Finding a small mistake in code that looks correct can require more skill than writing the code. [One randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that experienced developers worked more slowly with AI even though they believed they had worked faster. A [later study](https://metr.org/blog/2026-02-24-uplift-update/) of newer agentic tools found some improvement in speed, but the study could not show clearly how large the improvement was. In short, the benefit depends on the task, codebase, tool, and user's skill. Our impressions alone do not measure that benefit well.

**The clearest finding so far is that AI amplifies both the strengths and weaknesses of the engineering process around it.** [Research involving thousands of professionals](https://dora.dev/research/2025/dora-report/) supports this view. A team with clear goals, good tests, effective reviews, and fast feedback can turn faster code generation into useful results sooner. A team without these practices may simply create defects sooner. In Brooks' terms, AI may be our strongest tool yet for reducing *accidental* complexity. It also helps with essential work, such as exploring requirements and drafting designs. However, humans still decide what to build and whether it has been built well. Therefore, **AI makes software engineering fundamentals more important, not less.**

**Engineers are also building more software that uses AI as part of the system.** Such systems bring their own concerns, including data quality, unpredictable output, evaluation, privacy, algorithmic bias, and monitoring.

##### **Next**: the evolving engineer

**Developers are giving AI larger pieces of work: first lines of code, then whole tasks, and perhaps soon larger parts of a project.** In controlled tests, AI agents can complete [increasingly long tasks](https://arxiv.org/abs/2503.14499). However, real projects that last many years are more complicated than such tests. Giving instructions through natural language, examples, and tests may become as important as writing code by hand.

**One possible next step is {{ show_term("_AI-native_ software engineering") }}: designing the workflow for ongoing collaboration between humans and AI.** This approach goes further than adding an AI assistant to today's process. In {{ show_term("_AI-assisted_ software engineering") }}, AI works inside a process directed by humans. In {{ show_term("_agentic_ software engineering") }}, humans give AI tasks with several steps. In *AI-native* engineering, teams redesign the process itself. In this possible future, sometimes called [*SE 3.0*](https://doi.org/10.1145/3807901), engineers record goals, constraints, designs, and acceptance criteria in forms that AI agents can use. Agents plan changes, write code, run tests, and review one another's work. Humans set the direction, make difficult choices, and decide what is safe to release. Requirements, tests, architecture records, and security controls will then matter *more*, not less. They set the limits within which the agents work.

**Experts disagree about how far this change will go, so evaluate their predictions carefully.** Some predict the *end of programming*, with most software requested in natural language and generated when needed. Others point out that benchmarks leave out much of real software work, such as unclear goals, knowledge that has not been written down, and long-term maintenance. They also argue that a code change that passes its tests is not necessarily part of a dependable system. Checking whether AI evaluations reflect real software work is itself a software engineering problem.

**As it becomes easier to give implementation work to AI, deciding, designing, checking, and taking responsibility become more valuable.** Someone must understand the users and the subject area. Someone must decide what should and should not be built, divide the work into clear parts, design a system that can be maintained, spot mistakes in code that looks correct, combine human and AI work, and take responsibility for the released system. AI can help with every one of these activities, but it cannot take responsibility for the result.

**Engineers must understand the work before they can direct, evaluate, or fix it. Therefore, software engineering foundations matter more than ever.** The world still needs many software engineers, but the skills they use may change. They may spend less time writing code by hand and more time directing, evaluating, and taking responsibility for it.

**Software engineering may now be going through its biggest change since 1968, but its future is still unclear.** The rewards Brooks described remain. Some old difficulties may be becoming smaller, while new ones appear. We do not yet know whether AI will be the silver bullet that Brooks thought was unlikely, or simply a powerful tool that amplifies both the strengths and weaknesses of software teams.


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

_The Mythical Man-Month: Essays on Software Engineering_ is a book about software engineering and project management by Fred Brooks. Its main idea is that "adding manpower to a late software project makes it later." This idea is known as Brooks's law. The book also explains the risk of making the second version of a system too complex, and it recommends prototyping.

</modal>

</div>

<div id="extras">
</div>
