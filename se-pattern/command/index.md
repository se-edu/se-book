### Command Pattern

#### Context
A system is required to execute a number of commands, each doing a different task.
For example, a system might have to support `Sort`, `List`, Reset commands.

#### Problem
It is preferable that some part of the code execute these commands without having to know each command type.
For example, there can be a `CommandQueue` object that is responsible for queuing commands and executing them without knowledge of what each command does.

#### Solution
In the example solution below, the CommandCreator creates `List`, `Sort`, and `Reset` Command objects and adds them to the `CommandQueue` object.
The `CommandQueue` object treats them all as `Command` objects and performs the `execute/undo` operation on each of them without knowledge of the specific Command type.
When executed, each `Command` object will access the `DataStore` object to carry out its task. The `Command` class can also be an abstract class or an interface.

<img class="center-block" src="command/solution1.png">

The general form of the solution is as follows.

<img class="center-block" src="command/solution2.png">

The `<<Client>>` creates a `<<ConcreteCommand>>` object, and passes it to the `<<Invoker>>`.
The `<<Invoker>>` object treats all commands as a general `<<Command>>` type.
`<<Invoker>>` issues a request by calling `execute()` on the command.
If a command is undoable, `<<ConcreteCommand>>` will store the state for undoing the command prior to invoking execute().
In addition, the `<<ConcreteCommand>>` object may have to be linked to any `<<Receiver>>` of the command before it is passed to the `<<Invoker>>`.
Note that an application of the command pattern does not have to follow the structure given above.
The essential element is to have a general `<<Command>>` object that can be passed around, stored, executed, etc.

#### Code Example

<tabs>
<tab header="Java">

Create a command interface.
```
public interface Command {
   void execute();
}
```

Some concrete commands class.
```
public class ConcreteCommand implements Command {
    public void execute() {
      // Do something
    }
}

public class OtherConcreteCommand implements Command {
    public void execute() {
      // Do other thing
    }
}
```

And the invoker class.

```
public class Invoker {
    List<Command> cmdList = new ArrayList<Command>();

    public void addCmd(Command cmd) {
        cmdList.add(cmd);
    }

    public void executeAll() {
        for (Command cmd : cmdList) {
            cmd.execute();
        }
        cmdList.clear();
    }
}
```

And use the Invoker to add and execute commands.
```
public static void main(String[] args) {

    Command cmd1 = new ConcreteCommand();
    Command cmd2 = new OtherConcreteCommand();

    Invoker invoker = new Invoker();
    invoker.addCommand(cmd1);
    invoker.addCommand(cmd2);

    invoker.executeAll();
}
```

</tab>
<tab header="C++">
</tab>
</tabs>

#### Exercise
<panel header="Question 1" minimized>
<Question has-input>

Study the Memento pattern yourself, and compare it with Command pattern.

<div slot="answer">

Command and Memento act as magic tokens to be passed around and invoked at a later time. In Command, the token represents a request; in Memento, it represents the internal state of an object at a particular time. Polymorphism is important to Command, but not to Memento because its interface is so narrow that a memento can only be passed as a value.

Command can use Memento to maintain the state required for an undo operation.

</div>
</Question>
</panel>
