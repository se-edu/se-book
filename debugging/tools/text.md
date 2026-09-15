{% from "common/macros.njk" import show_example, show_term with context %}
<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use a debugger</span>

<span id="title">Tools</span>

<div id="body">

**Every way of looking inside a running program is a {{ show_term("probe") }}** — a means of answering one specific question about its state. Here are some widely used probes:

* **Print statements are the cheap to start with and expensive to iterate with.** They are easy to insert, but each needs an edit-build-run cycle, each edit is a chance to introduce a fresh defect, and leftovers reach production if you forget them.
* **Logging is the disciplined, permanent form of printing.** <popover content="i.e., you can designate each log message a level e.g., `INFO`, `ERROR`">Leveled</popover> and <popover content="i.e., there are tools that can filter log messages based on level, keywords, origin, etc.">filterable</popover>, log statements can stay in the code — so they are still there when the failure happens on a user's machine at 3 a.m., where no debugger can reach.
* **Assertions are probes that check themselves.** Rather than printing a value for you to examine, an assertion states what it should be and fails immediately when it is not, turning a silent infection into a loud, located failure. If you use Java's `assert` statement, enable assertions in your run configuration or it will do nothing; test-framework (e.g., JUnit) assertions are separate and always run during testing.
* **A debugger is a tool that can attach itself to an executing program and can ask questions interactively**, without changing the code at all.

The useful question is never "print statements or debugger or ___?" but "what is the cheapest probe that answers _this_ question?" Some probes come out once the bug is found %%(e.g., a temporary print statement)%%; others are meant to stay %%(e.g., a permanent log statement)%%.
<box type="tip" seamless>

As a rough guide:

* reproducible and local → debugger
* needs to survive into production → logging
* want to catch the problem at its origin → assertions
</box>

##### Using a debugger

**A {{ show_term("debugger") }} is a tool that lets you pause a running program, then inspect and control it from the inside, without modifying its code.** You choose the lines where the program should stop. When execution reaches one of them, the program freezes mid-run and waits for you. You can then look at the current values of its variables, see the chain of method calls that led there, and let it continue one line at a time. Most IDEs, such as IntelliJ IDEA, come with a debugger built in. There are also standalone debuggers that you control by typing commands, such as GDB for C and C++, and [jdb for Java](https://www.geeksforgeeks.org/java/java-debugger-jdb/).

<box type="tip" seamless>

If you have not used a debugger tool before, watching a 'debugger in action' video such as the one below is recommended before reading the rest of this topic.

<panel type="seamless" header="Debugging in IntelliJ" expand-headerless peek >

@[youtube](1bCgzjatcr4)

</panel>
</box>

**A debugger works from outside your program, which is what makes it different in kind from printing.** The debugger runs as a separate process. It either launches your program under its control or attaches to one that is already running, then asks the operating system, or the JVM for a Java program, to pause the program at the chosen lines and report its state back. Your code stays untouched throughout. With print statements, every new question about the program means adding another print, rebuilding, and re-running. With a debugger, the paused program keeps all its state, so asking one more question costs seconds rather than another edit-build-run cycle.

**++Breakpoints++ determine where the program pauses.** A breakpoint is a marker that tells the debugger to stop the program at a particular spot. In an IDE, you usually set one by clicking in the margin next to a line number, which puts a red dot there. In GDB, you type a command such as `break main.c:42` instead. Either way, the debugger keeps track of the breakpoint, so your source file does not change. Breakpoints take effect only when you start the program through the debugger, e.g., with IntelliJ's _Debug_ button rather than _Run_. Started the normal way, the program runs straight past them. Breakpoints come in several kinds:

* A **{{ show_term("line breakpoint") }}** pauses when execution reaches a given line.
* A **{{ show_term("conditional breakpoint") }}** pauses only when a condition holds. This makes debugging the 4137th iteration of a loop feasible at all, and it is the feature beginners most often do not know exists.<br>
  {{ label_example }} %%Pausing only when `i == 4137`.%%
* An **{{ show_term("exception breakpoint") }}** pauses at the moment an exception is thrown, before the stack unwinds and discards the state you need.
* A **{{ show_term("field watchpoint") }}** pauses when a field's value changes rather than at a location — the right tool for "what is setting this to `null`?"


**++Stepping commands++ determine how execution advances.** Once you have examined the paused program, a stepping command lets it run a little further and then pauses it again, so you can see what changed. In an IDE, each command has a toolbar button and a keyboard shortcut. The common ones are:

* **{{ show_term("Step over") }}** runs the current line as one step, including any methods it calls, and pauses at the next line.
* **{{ show_term("Step into") }}** moves into the method called on the current line and pauses at the first line of that method.<br>
  {{ label_example }} %%If the current line is `total += item.price();`, _step over_ pauses at the line after it, while _step into_ pauses inside `price()`.%%
* **{{ show_term("Step out") }}** runs the rest of the current method and pauses back in the method that called it.
* **{{ show_term("Run to cursor") }}** keeps running until execution reaches the line your cursor is on, like a one-time breakpoint.
* **{{ show_term("Resume") }}** keeps running until the program reaches the next breakpoint or ends.

**++Inspection views++ let you examine details of the state the program is currently paused at.** Some common inspection views:

* **The {{ show_term("call stack") }} shows how execution reached this point**, and selecting any frame reveals that method's variables. The cause is often several frames above where the program stopped.
* **The {{ show_term("variables view") }} shows the values currently in scope**, and _watches_ track a chosen expression as you step.
* **{{ show_term("evaluate expression") }} runs arbitrary code at the paused point**, turning passive inspection into a live experiment: you can test a hypothesis without editing or restarting. One caution — evaluating really does run the code, so calling a method that mutates state, or setting a variable by hand, changes the program you are observing.

{% call show_example() %}
One session on the cart example, from the first breakpoint to the diagnosis:

1. Set a _line breakpoint_ on `total += pending.remove(0).price();`, then run the code that adds three items and calls `computeTotal()`.
1. At the first pause the _variables view_ shows `pending` holding all three items, and nothing yet looks wrong.
1. _evaluate expression_ on `pending == items` answers `true`. That single evaluation is the diagnosis — the list being emptied is the cart's own — and it cost no edit, no rebuild, and no re-run.
1. The _call stack_ shows `computeTotal()` called from the display code, so the frame the failure will surface in is not the frame the defect is in.
1. Resume, and watch `items.size()` fall in the variables view as the loop runs.

A field watchpoint on `items` would not have helped here: `items` is assigned once, where it is declared, so the watchpoint fires at construction and never for `remove(0)`. A watchpoint catches a field being reassigned, not the object it already points at being modified.
{% endcall %}

<box type="tip" seamless>

Set your first breakpoint _before_ the suspected region rather than at the failure, so you can watch the state go wrong.
</box>

**AI assistants are useful for some parts of debugging and unreliable for others.** They are good at explaining unfamiliar error messages, proposing candidate hypotheses, and serving as an always-available rubber duck. They are unreliable at diagnosing a defect in code they cannot run, and will produce confident, fluent, incorrect explanations. A systematic method is what makes them safe: treat any suggestion as a hypothesis, insist it be falsifiable, and verify it against the running program yourself.

##### Reading stack traces

**A stack trace is a precise report of where a program failed and the call path that led there**. Read it in this order:

1. **The exception type and message**, which frequently name the problem outright.
1. **The topmost frame in _your_ code** — not the topmost frame overall, which is usually library or platform code doing exactly what it was asked.
1. **The chain of callers below it**, which shows how execution arrived there.

The top of the trace is where the failure surfaced, but the cause is often further down, in whichever frame passed the bad value along. In wrapped exceptions, read the `Caused by:` chain from the bottom up.

<panel type="info" header="{{ icon_extra }} An example of reading stack traces" minimized>
{% call show_example() %}
The `OrderParser` class below turns a line of text such as `"Apples, 3"` into an `Order` object. The `main` method, on line 5 of `Main.java`, calls `parse` with exactly that line.

```java{.line-numbers}
package shop;

public class OrderParser {

    public static Order parse(String line) {
        String[] parts = line.split(",");
        String name = parts[0];
        int quantity = parseQuantity(parts[1]);
        return new Order(name, quantity);
    }

    private static int parseQuantity(String text) {
        return Integer.parseInt(text);
    }
}
```

Running the program crashes with this stack trace:

```
Exception in thread "main" java.lang.NumberFormatException: For input string: " 3"
    at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)
    at java.base/java.lang.Integer.parseInt(Integer.java:654)
    at java.base/java.lang.Integer.parseInt(Integer.java:786)
    at shop.OrderParser.parseQuantity(OrderParser.java:13)
    at shop.OrderParser.parse(OrderParser.java:8)
    at shop.Main.main(Main.java:5)
```

The first line names the exception. Each line after it that starts with `at` is one frame, giving the method that was running, then its file and line number in parentheses. The top frame is where the exception was thrown, and each frame below it is the method that called the one above.

Reading it in the order given above:

1. _The exception type and message_: a `NumberFormatException` means some text could not be converted to a number. The message shows that text as `" 3"`, and the quotes reveal a leading space, which `Integer.parseInt` does not accept.
1. _The topmost frame in your code_: the first three frames start with `java.base/`, so they are inside the Java library, which is doing exactly what it was asked. The first frame from the `shop` package is `OrderParser.parseQuantity` at line 13, the `Integer.parseInt(text)` call.
1. _The chain of callers below it_: `parseQuantity` was called by `parse` at line 8, which was called by `Main.main` at line 5 of `Main.java`.

The failure surfaced in `parseQuantity`, but the bad value came from the frame below it. On line 6, `parse` splits `"Apples, 3"` at the comma, which leaves the space at the start of `" 3"`. That line is the defect, and trimming the parts there fixes it.
{% endcall %}
</panel>
<p/>

Some common Java exceptions and what they usually mean:

| Exception | Usually means |
|---|---|
| `NullPointerException` | Something never initialized, or a method returning `null` unnoticed |
| `IndexOutOfBoundsException` | An off-by-one, or an index computed from stale size information |
| `ClassCastException` | An object that is not the type assumed, often after an unchecked cast |
| `ConcurrentModificationException` | A collection modified while being iterated over, usually in a single thread {{ label_example }} %%removing from a list inside a for-each loop over that list%% |
| `StackOverflowError` | Recursion with a missing or unreachable base case |
| `NumberFormatException` | Unvalidated input being parsed as a number |


</div>

<div id="extras">

<include src="resourcesPanel.md" boilerplate/>

</div>
