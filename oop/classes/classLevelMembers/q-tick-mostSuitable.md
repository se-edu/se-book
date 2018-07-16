<panel header="{{ icon_Q_A }} Suitable as a class-level variables">
<question>

Which of these are suitable as class-level variables?

- [ ] a. system: multi-player Pac Man game, Class: `Player`,  variable: `totalScore`
- [ ] b. system: eLearning system, class: `Course`, variable: `totalStudents`
- [ ] c. system: ToDo manager, class: `Task`, variable: `totalPendingTasks`
- [ ] d. system: any, class: `ArrayList`, variable: `total` (i.e., total items in a given `ArrayList` object)


<div slot="answer">

(c)

Explanation: `totalPendingTasks` should not be managed by individual `Task` objects and therefore suitable to be maintained as a class-level variable. The other variables should be managed at instance level as their value varies from instance to instance. e.g., `totalStudents` for one `Course` object will differ from `totalStudents` of another.

</div>
</question>
</panel>
