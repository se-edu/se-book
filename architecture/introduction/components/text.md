<span id="title">Components, interfaces, and dependencies</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain what components, interfaces, and dependencies are</span>

<div id="body">

**Three words do most of the work in architecture descriptions: components, interfaces, dependencies.**

**A component is a major part of the system with one coherent responsibility.** `Storage` qualifies: all its work concerns persistent data. A single `Task` class is too small to be an architectural component, and a grab bag named `Utilities` is a poor one, because "assorted helpful things" is not a coherent responsibility.

**An interface is the agreement stating how the rest of the system may use a component.** It is more than a list of operations. A complete interface also covers:

* the data each operation accepts and returns;
* what happens when an operation succeeds or fails; and
* for a component reached over a network, the format and protocol of the messages.

For example, `Storage` might offer `saveTasks(tasks)` and `readTasks()`, _and_ specify that a corrupt file causes a particular error rather than a crash.

**A dependency exists when one component relies on another to do its job.** `Logic` depends on `Storage`, because it cannot save without it. `Storage` does not depend on `Logic`: it can be compiled, tested, and understood without knowing that commands exist. **Dependencies have a direction, and that direction matters more than almost anything else in an architecture.**

**A component is not a special programming construct.** There is no `component` keyword; a component is whatever unit of code the team agrees to treat as one part with one responsibility. In a Java project it is often a package (or group of packages) plus a type declaring what it offers:

```text
src/main/java/taskmanager/
├── ui/
├── logic/
├── model/
└── storage/
    ├── Storage.java      ← declares what Storage offers
    ├── JsonStorage.java  ← one implementation
    └── ...               ← other classes, private to this component
```

**That is one common arrangement, not a rule.** Elsewhere a component may be a separate library, a language-level module, or an entirely separate program reached over a network. Its agreed responsibility and interface make it a component, not its folder layout.

**A dependency arrow describes reliance, not necessarily a method call.** If a diagram shows `Logic` → `Storage` and its legend says an arrow means _depends on_, then some code in `Logic` relies on what `Storage` offers, and no code in `Storage` relies on `Logic`. **Whether that reliance is a method call, a message, or a network request is exactly what the legend must tell you** — which is why the guidelines on drawing diagrams insist that you state what your arrows mean.

**Depending on the interface rather than a specific implementation is what makes a component replaceable.** If `Logic` relies on the `Storage` agreement rather than on `JsonStorage` directly, a `DatabaseStorage` can take its place with few changes elsewhere. **The swap is only safe if the replacement honors the same behavior, including its failure behavior** — matching method names is not enough.

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
