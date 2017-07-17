<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Patterns :arrow_right: Command Pattern :arrow_right:</div>

<div id="title">

#### What :two:

</div>

<div id="body">

**Context**

A system is required to execute a number of commands, each doing a different task. For example, a system might have to support `Sort`, `List`, `Reset` commands.

**Problem**

It is preferable that some part of the code execute these commands without having to know each command type. For example, there can be a `CommandQueue` object that is responsible for queuing commands and executing them without knowledge of what each command does.

**Solution**

In the example solution below, the `CommandCreator` creates `List`, `Sort`, and `Reset Command` objects and adds them to the `CommandQueue` object. The `CommandQueue` object treats them all as `Command` objects and performs the execute/undo operation on each of them without knowledge of the specific `Command` type. When executed, each `Command` object will access the `DataStore` object to carry out its task. The `Command` class can also be an abstract class or an interface.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/command/what/images/commandCreator.png" height="150" />
<p/>

</tip-box>

The general form of the solution is as follows.

<img src="{{baseUrl}}/designPatterns/command/what/images/clientInvoker.png" height="200" />
<p/>

The `<< Client >>` creates a `<< ConcreteCommand >>` object, and passes it to the `<< Invoker >>`. The `<< Invoker >>` object treats all commands as a general `<< Command >>` type.  `<< Invoker >>` issues a request by calling `execute()` on the command. If a command is undoable, `<< ConcreteCommand >>` will store the state for undoing the command prior to invoking `execute()`.  In addition, the `<< ConcreteCommand >>` object may have to be linked to any `<< Receiver >>` of the command before it is passed to the `<< Invoker >>`. Note that an application of the command pattern does not have to follow the structure given above. The essential element is to have a general `<< Command >>` object that can be passed around, stored, executed, etc

</div>

</div>
