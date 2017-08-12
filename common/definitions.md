<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Definitions

## A

<div id="def-abstraction">

**Abstraction**:

Most programs are written to solve complex problems involving large amounts of intricate details. It is impossible to deal with all these details at the same time.  The guiding principle of abstraction stipulates that we capture only details that are relevant to the current perspective or the task at hand. For example, within a certain software component, we might deal with a ‘user’ data type, while ignoring the details contained in the user data item. These details have been ‘abstracted away’ as they do not affect the task of that software component. This is called _data abstraction_. On the other hand, _control abstraction_ abstracts away details of the actual control flow to focus on tasks at a simplified level. For example, `print(“Hello”)` is an abstraction of the actual output mechanism within the computer.

Abstraction can be applied repeatedly to obtain higher and _higher levels of abstractions_. For example, a `File` is a data item that is at a higher level than an array and an array is at a higher level than a bit. Similarly, `execute(Game)` is at a higher level than `print(Char)` which is at a higher than an Assembly language instruction `MOV`.

</div>

<div id="def-actor">

**Actor**: An actor (in a use case) is a role played by a user.  An actor can be a human or another system. Actors are not part of the system; they reside outside the system.

</div>

<div id="def-architecture">

**Architecture**: The high level structures of a software system, the discipline of creating such structures, and the documentation of these structures. These structures are needed to reason about the software system. Each structure comprises software elements, relations among them, and properties of both elements and relations. The architecture of a software system is a metaphor, analogous to the architecture of a building.

</div>

## B

<div id="def-brainstorming">

**Brainstorming**: A group activity designed to _generate a large number of diverse and creative ideas_ for the _solution_ of a problem.

</div>

<div id="def-brooks-law">

**Brooks' Law**: Adding people to a late project will make it later. -- Fred Brooks (author of _The Mythical Man-Month_)

</div>

## C

<div id="def-client-code">

**Client component/method/object**: The component/method/object that is interacting with a given code.

</div>

<div id="def-cli">

**CLI App**: An application that has a _Command Line Interface_. i.e. user interacts with the app by typing in commands.

</div>

<div id="def-commit">

**Commit**: Saving the current state of the working folder into the Git revision history.

</div>

<div id="def-coupling">

**Coupling**: The degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between module.

</div>

## D

<div id="def-dependency-inversion-principle">

**Dependency Inversion Principle**:

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

</div>

<div id="def-se-design-pattern">

**Design Pattern** : An _elegant reusable solution_ to a _commonly recurring problem_ within a _given context_ in software design.

</div>

<div id="def-dry-principle">

**DRY (Don't Repeat Yourself) Principle**: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system <sub>_The Pragmatic Programmer_, by Andy Hunt and Dave Thomas</sub>

</div>

## E

<div id="def-enterprise-application">

**Enterprise Application**: ‘enterprise applications’ means software applications used at organizations level and therefore has to meet much higher demands (such as in scalability, security, performance, and robustness) than software meant for individual use.

</div>

<div id="def-exception">

**Exception**:
> An _exception_ is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. –- Java Tutorial (Oracle Inc.)

</div>

<div id="def-equivalence-partition">

**Equivalence partition (aka equivalence class)**: A group of test inputs that are likely to be processed by the SUT in the same way.

</div>

## F

<div id="def-feature-list">

**Feature List**: A list of features (or functionalities) _grouped according to some criteria_ such as priority (e.g. must-have, nice-to-have, etc. ), order of delivery, object or process related (e.g. order-related, invoice-related, etc.)

</div>

<div id="def-focus-group">

**Focus Groups**: A kind of _informal interview_ within an _interactive group setting_.

</div>

## G

<div id="def-glossary">

**Glossary**: A glossary serves to ensure that _all stakeholders have a common understanding_ of the noteworthy terms, abbreviation, acronyms etc.

</div>

## I

<div id="def-interface-segregation-principle">

**Interface Segregation Principle (ISP)**: No client should be forced to depend on methods it does not use.

</div>

## L

<div id="def-law-of-demeter">

**Law of Demeter (LoD)**:

* An object should have limited knowledge of another object.
* An object should only interact with objects that are closely related to it.

Also known as

* Don’t talk to strangers.
* Principle of least knowledge

</div>

<div id="def-liskov-substitution-principle">

**Liskov Substitution Principle (LSP)**: Derived classes must be substitutable for their base classes. -- Barbara Liskov

</div>

## P

<div id="def-prototyping">

**Prototype**: A prototype is a _mock up, a scaled down version, or a partial system constructed_

*	to get users’ feedback.
*	to validate a technical concept (a "proof-of-concept" prototype).
*	to give a preview of what is to come, or to compare multiple alternatives on a small scale before committing fully to one alternative.
*	for early field-testing under controlled conditions.

</div>

<div id="def-polymorphism">

**Polymorphism**:

> The ability of different objects to respond, each in its own way, to identical messages is called polymorphism.
>
> -- [Object-Oriented Programming with Objective-C](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/OOP_ObjC/), Apple

</div>

## R

<div id="def-rcs">

**RCS** :  Revision Control Software.

</div>

<div id="def-repo">

**Repository** (_repo_ for short):  The database of the history of a directory being tracked by an RCS software (e.g. Git).

</div>

## S

<div id="def-separation-concerns-principle">

**Separation of Concerns Principle (SoC)**: To achieve better modularity, separate the code into distinct sections, such that each section addresses a separate _concern_. -- Edsger W. Dijkstra

</div>

<div id="def-single-responsibility-principle">

**Single Responsibility Principle (SRP)**: A class should have one, and only one, reason to change. -- Robert C. Martin

</div>

<div id="def-se">

**Software Engineering**: Software Engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software" <sub>-- IEEE Standard Glossary of Software Engineering Terminology</sub>

</div>

<div id="def-stage">

**Stage**: Instructing Git to prepare a file for committing.

</div>

<div id="def-stakeholder">

**Stakeholder**: A party that is potentially affected by the software project. e.g. users, sponsors, developers, interest groups, government agencies, etc.

</div>

<div id="def-static-analysis">

**Static analysis**: Static analysis is the analysis of code without actually executing the code.  

</div>

<div id="def-sut">

**SUT**: Software Under Test  

</div>

## T

<div id="def-testing">

**Testing**: Testing is operating a system or component under specified conditions, observing or recording the results, and making an evaluation of some aspect of the system or component.  –- source: IEEE

</div>

<div id="def-type-signature">

**Type Signature**: The _type signature_ of an operation is the type sequence of the parameters. The return type and parameter names are not part of the type signature. However, the parameter order is significant. 

<panel type="seamless" header="%%Examples%%">

| Method                         | Type Signature        |
| :----------------------------: | :-------------------: |
| int add(int X, int Y)          | (int, int)            |
| void add(int A, int B)         | (int, int)            |
| void m(int X, double Y)        | (int, double)         |
| void m(double X, int Y)        | (double, int)         |

</panel>

</div>

## U

<div id="def-use-case">

**Use Case**: A description of a set of sequences of actions, including variants, that a system performs to yield an observable result of value to an <trigger for="pop:actor">actor</trigger>.[ :book: : <popover effect="fade" placement="top" >uml-user-guide<span slot="content"><include src="./references.md#uml-user-guide" inline/></span></popover>]
  
<popover id="pop:actor" title=":mag:" placement="top">
  <div slot="content">
    <include src="definitions.md#def-actor" />
  </div>
</popover>

</div>

<div id="def-user-story">

**User story**: User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. <sup>[[Mike Cohn](https://www.mountaingoatsoftware.com/agile/user-stories)]

</div>

<div id="def-user-story-format">

**User story format**: `As a {user type/role} I can {function} so that {benefit}`

</div>

## W

<div id="def-working-directory">

**Working directory**: The directory the repo is based in is called the _working directory_.

</div>

## Y

<div id="def-yagni-principle">

**YAGNI (You Aren't Gonna Need It!) Principle**: Do not add code simply because ‘you might need it in the future’.

</div>

----

</div>