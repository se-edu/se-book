<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Definitions

<div id="def-actor">

**Actor**: An actor (in a use case) is a role played by a user.  An actor can be a human or another system. Actors are not part of the system; they reside outside the system.

</div>

<div id="def-architecture">

**Software Architecture**: The high level structures of a software system, the discipline of creating such structures, and the documentation of these structures. These structures are needed to reason about the software system. Each structure comprises software elements, relations among them, and properties of both elements and relations. The architecture of a software system is a metaphor, analogous to the architecture of a building.

</div>

<div id="def-client-code">

**Client component/method/object**: The component/method/object that is interacting with a given code.

</div>

<div id="def-coupling">

**Coupling**: The degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between module.

</div>

<div id="def-se-design-pattern">

**Software Design Pattern** : An _elegant reusable solution_ to a _commonly recurring problem_ within a _given context_ in software design.

</div>

<div id="def-user-story">

**User story**: User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. <sup>[[Mike Cohn](https://www.mountaingoatsoftware.com/agile/user-stories)]

</div>

<div id="def-user-story-format">

**User story format**: `As a {user type/role} I can {function} so that {benefit}`

</div>

<div id="def-brainstorming">

**Brainstorming**: A group activity designed to _generate a large number of diverse and creative ideas_ for the _solution_ of a problem.

</div>

<div id="def-focus-group">

**Focus Groups**: A kind of _informal interview_ within an _interactive group setting_.

</div>

<div id="def-prototyping">

**Prototype**: A prototype is a _mock up, a scaled down version, or a partial system constructed_

*	to get users’ feedback.
*	to validate a technical concept (a "proof-of-concept" prototype).
*	to give a preview of what is to come, or to compare multiple alternatives on a small scale before committing fully to one alternative.
*	for early field-testing under controlled conditions.

</div>

<div id="def-feature-list">

**Feature List**: A list of features (or functionalities) _grouped according to some criteria_ such as priority (e.g. must-have, nice-to-have, etc. ), order of delivery, object or process related (e.g. order-related, invoice-related, etc.)

</div>

<div id="def-glossary">

**Glossary**: A glossary serves to ensure that _all stakeholders have a common understanding_ of the noteworthy terms, abbreviation, acronyms etc.

</div>

<div id="def-stakeholder">

**Stakeholder**: A party that is potentially affected by the software project. e.g. users, sponsors, developers, interest groups, government agencies, etc.

</div>

<div id="def-use-case">

**Use Case**: A description of a set of sequences of actions, including variants, that a system performs to yield an observable result of value to an
<popover effect="fade" placement="top" >actor
  <span slot="content"><include src="./definitions.md#def-actor" inline /></span>
</popover>

<span class="pull-right">[ :book: : <popover effect="fade" placement="top" >uml-user-guide<span slot="content"><include src="./references.md#uml-user-guide" inline/></span></popover>]</span>

</div>

<div id="def-type-signature">

**Type Signature**: The _type signature_ of an operation is the type sequence of the parameters. The return type and parameter names are not part of the type signature. However, the parameter order is significant. Here are some examples:

| Method                         | Type Signature        |
| :----------------------------: | :-------------------: |
| int add(int X, int Y)          | (int, int)            |
| void add(int A, int B)         | (int, int)            |
| void m(int X, double Y)        | (int, double)         |
| void m(double X, int Y)        | (double, int)         |

</div>

<div id="def-polymorphism">

**Polymorphism**:

> The ability of different objects to respond, each in its own way, to identical messages is called polymorphism.
>
> -- [Object-Oriented Programming with Objective-C](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/OOP_ObjC/), Apple

</div>

<div id="def-abstraction">

**Abstraction**:

Most programs are written to solve complex problems involving large amounts of intricate details. It is impossible to deal with all these details at the same time.  The guiding principle of abstraction stipulates that we capture only details that are relevant to the current perspective or the task at hand. For example, within a certain software component, we might deal with a ‘user’ data type, while ignoring the details contained in the user data item. These details have been ‘abstracted away’ as they do not affect the task of that software component. This is called _data abstraction_. On the other hand, _control abstraction_ abstracts away details of the actual control flow to focus on tasks at a simplified level. For example, `print(“Hello”)` is an abstraction of the actual output mechanism within the computer.

Abstraction can be applied repeatedly to obtain higher and _higher levels of abstractions_. For example, a `File` is a data item that is at a higher level than an array and an array is at a higher level than a bit. Similarly, `execute(Game)` is at a higher level than `print(Char)` which is at a higher than an Assembly language instruction `MOV`.

</div>

<div id="def-software-design-pattern">

**Software Design Pattern**: An _elegant reusable solution_ to a _commonly recurring problem_ within a _given context_ in software design.

</div>

</div>
