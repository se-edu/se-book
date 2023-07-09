<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can describe how OOP relates to the real world</span>

<div id="body">

**An _object_ in Object-Oriented Programming (OOP) has _state_ and _behavior_, similar to objects in the real world.**

> Every object has both state (data) and behavior (operations on data). In that, they’re not much different
> from ordinary physical objects. It’s easy to see how a mechanical device, such as a pocket watch or a piano,
> embodies both state and behavior. But almost anything that’s designed to do a job does, too. Even simple things
> with no moving parts such as an ordinary bottle combine state (how full the bottle is, whether or not it’s open,
> how warm its contents are) with behavior (the ability to dispense its contents at various flow rates, to be opened
> or closed, to withstand high or low temperatures).
>
> It’s this resemblance to real things that gives objects much of their power and appeal. They can not only model
> components of real systems, but equally as well fulfill assigned roles as components in software systems.
>
> <sub>-- [Object-Oriented Programming with Objective-C](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/OOP_ObjC/), Apple </sub>

**OOP views the world as _a network of interacting objects_.**

<box>

{{ icon_example }} A real world scenario viewed as a network of interacting objects:

You are asked to find out the average age of a group of people Adam, Beth, Charlie, and Daisy. You take a piece of paper and pen, go to each person, ask for their age, and note it down. After collecting the age of all four, you enter it into a calculator to find the total. And then, use the same calculator to divide the total by four, to get the average age. This can be viewed as the objects `You`, `Pen`, `Paper`, `Calculator`, `Adam`, `Beth`, `Charlie`, and `Daisy` interacting to accomplish the end result of calculating the average age of the four persons. These objects can be considered as _connected_ in a certain _network_ of certain structure that dictates how these objects can interact. For example, `You` object is connected to the `Pen` object, and hence `You` can use the `Pen` object to write.

<!-- TODO {visual: real world scenario, objects and network marked} -->
</box>

**OOP solutions try to create a similar object network inside the computer’s memory** – a sort of virtual simulation of the corresponding real world scenario – **so that a similar result can be achieved programmatically.**

<!-- TODO {visual: Direct mapping} -->

**OOP does not demand that the virtual world object network follow the real world _exactly_.**

<box>

{{ icon_example }} Our previous example can be tweaked a bit as follows:

* Use an object called `Main` to represent your role in the scenario.
* As there is no physical writing involved, you can replace the `Pen` and `Paper` with an object called `AgeList` that is able to keep a list of ages.

<!-- TODO {visual: optimizations:  You → Main; Pen + Paper → AgeList} -->

</box>

**Every object has both state (data) and behavior (operations on data).**

<box>

{{ icon_example }} The state and behavior of our running example are as follows:

| Object      | Real World? | Virtual World? | Example of State (i.e. Data)       | Examples of Behavior (i.e. Operations)                |
| :---------: |:-----------:|:--------------:|:----------------------------------:| :----------------------------------------------------:|
| Adam        | {{ icon_tick }} | {{ icon_tick }} | Name, Date of Birth                | Calculate age based on birthday                       |
| Pen         | {{ icon_tick }} | %%-%%           | Ink color, Amount of ink remaining | Write                                                 |
| AgeList     | %%-%%           | {{ icon_tick }} | Recorded ages                      | Give the number of entries, Accept an entry to record |
| Calculator  | {{ icon_tick }} | {{ icon_tick }} | Numbers already entered            | Calculate the sum, divide                             |
| You/Main    | {{ icon_tick }} | {{ icon_tick }} | Average age, Sum of ages           | Use other objects to calculate                        |

</box>

**Every object has an _interface_ and an _implementation_.**

Every real world object has,
* an interface through which other objects can interact with it, and,
* an implementation that supports the interface but may not be accessible to the other object.

<box>

{{ icon_example }} The interface and implementation of some real-world objects in our example:

* Calculator: the buttons and the display are part of the interface; circuits are part of the implementation.
* Adam: In the context of our 'calculate average age' example,
  * the interface of Adam consists of requests that Adam will respond to, e.g.  "Give age to the nearest year, as at Jan 1st of this year" "State your name".
  * the implementation includes the mental calculation Adam uses to calculate the age which is not visible to other objects.

</box>

Similarly, every object in the virtual world has an interface and an implementation.

<box>

{{ icon_example }} The interface and implementation of some virtual-world objects in our example:

* `Adam`: the interface might have a method `getAge(Date asAt)`; the implementation of that method is not visible to other objects.

</box>

**Objects interact by sending messages.** Both real world and virtual world object interactions can be viewed as objects sending messages to each other. The message can result in the sender object receiving a response and/or the receiver object’s state being changed. Furthermore, the result can vary based on which object received the message, even if the message is identical %%(see rows 1 and 2 in the example below)%%.

<box>

{{ icon_example }} Same messages and responses from our running example:

| World    | Sender | Receiver                         | Message                              | Response                   | State Change          |
| :------: |:------:|:--------------------------------:|:------------------------------------:|:--------------------------:|:---------------------:|
| Real     | You    | Adam                             | "What is your name?"                 | "Adam"                     | -                     |
| Real     | <sub>as above</sub>   | Beth                             | <sub>as above</sub>                                 | "Beth"                     | -                     |
| Real     | You    | Pen                              | Put nib on paper and apply pressure  | Makes a mark on your paper | Ink level goes down   |
| Virtual  | Main   | Calculator (current total is 50) | add(int i): int i = 23               | 73                         | total = total + 23    |

</box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>
