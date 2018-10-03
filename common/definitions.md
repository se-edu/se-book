<frontmatter>
title: "Definitions"
footer: footer.md
</frontmatter>

<include src="navbar.md" boilerplate />

<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

# Definitions

## A

<div id="def-abstractClass">

**Abstract Class**: A class declared as an _abstract class_ cannot be instantiated, but they can be subclassed.

</div>
<div id="def-abstractMethod">

**Abstract Method**: An _abstract method_ is a method signature without a method implementation.

</div>

<div id="def-abstraction">

**Abstraction** is a technique for dealing with complexity. It works by establishing a level of complexity we are interested in, and suppressing the more complex details below that level.

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

<div id="def-camel-case">
<blockquote>
<pic src="https://upload.wikimedia.org/wikipedia/commons/e/ef/CamelCase.svg" width="200" alt="camelCase">
</pic>

_CamelCase_ is named after the "humps" of its capital letters, similar to the humps of a Bactrian camel. Camel case (stylized as `camelCase`) is the practice of writing compound words or phrases such that each word or abbreviation in the middle of the phrase begins with a capital letter, with no intervening spaces or punctuation.

<small>%%-- adapted from [Wikipedia](https://en.wikipedia.org/wiki/Camel_case)%%</small>
</blockquote>

e.g., `createEmptyList`, `listOfIntegers`, `htmlText`, `dvdPlayer`. This book defines camelCase style as requiring the first letter to be lower case. If the first letter is upper case instead e.g., `CreateEmptyList`, it is called _UpperCamelCase_ or _PascalCase_.

</div>

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

<div id="def-design-pattern">

**Design Pattern** : An _elegant reusable solution_ to a _commonly recurring problem_ within a _given context_ in software design.

</div>

<div id="def-domain-expert">

**Domain Expert** : An expert of a discipline to which the product is connected %%&nbsp;e.g., for a software used for Accounting, a domain expert is someone who is an expert of Accounting%%.

</div>

<div id="def-dry-principle">

**DRY (Don't Repeat Yourself) Principle**: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system <sub>_The Pragmatic Programmer_, by Andy Hunt and Dave Thomas</sub>

</div>

<div id="def-dynamic-binding">

**Dynamic Binding** (<tooltip content="There are subtle differences between late binding and dynamic binding, but they are beyond the scope of this document">aka late binding</tooltip>) : a mechanism where method calls in code are <tooltip content="deciding which method implementation to execure">resolved</tooltip> at <tooltip content="at the moment the method call is executed">runtime</tooltip>, rather than at compile time.

</div>

## E

<div id="def-enterprise-application">

**Enterprise Application**: ‘enterprise applications’ means software applications used at organizations level and therefore has to meet much higher demands (such as in scalability, security, performance, and robustness) than software meant for individual use.

</div>

<div id="def-exception">

**Exception**:
> The term _exception_ is shorthand for the phrase "exceptional event." An _exception_ is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. –- Java Tutorial (Oracle Inc.)

</div>

<div id="def-equivalence-partition">

**Equivalence partition (aka equivalence class)**: A group of test inputs that are likely to be processed by the SUT in the same way.

</div>

## F

<div id="def-feature-list">

**Feature List**: A list of features of a product _grouped according to some criteria_ such as aspect, priority, order of delivery, etc.

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

**Liskov Substitution Principle (LSP)**: Derived classes must be substitutable for their base classes. <sub>-- proposed by [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov)</sub>

</div>

## O

<div id="def-open-closed-principle">

**Open-Closed Principle (OCP)**: A module should be _open_ for extension but _closed_ for modification. That is, modules should be written so that they can be extended, without requiring them to be modified. <sub>-- proposed by [Bertrand Meyer](https://en.wikipedia.org/wiki/Bertrand_Meyer)</sub>

</div>

## P

<div id="def-pair-programming">

**Pair Programming**: 

>Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently. <sub>[[source: Wikipedia](https://en.wikipedia.org/wiki/Pair_programming)]</sub>

</div>

<div id="def-prototyping">

**Prototype**: A prototype is a _mock up, a scaled down version, or a partial system constructed_

*	to get users’ feedback.
*	to validate a technical concept (a "proof-of-concept" prototype).
*	to give a preview of what is to come, or to compare multiple alternatives on a small scale before committing fully to one alternative.
*	for early field-testing under controlled conditions.

</div>

<div id="def-polymorphism">

**Polymorphism**:

> The ability of different objects to respond, each in its own way, to identical messages is called polymorphism. <sub>-- [Object-Oriented Programming with Objective-C](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/OOP_ObjC/), Apple</sub>

</div>

## R

<div id="def-rcs">

**RCS** :  **Revision Control Software** are the software tools that automate the process of _Revision Control_ i.e. managing revisions of software artifacts.

</div>

<div id="def-repo">

**Repository** (_repo_ for short):  The database of the history of a directory being tracked by an RCS software (e.g. Git).

</div>

<div id="def-revision">

**Revision**: A _revision_ (some seem to use it interchangeably with _version_ while others seem to distinguish the two -- here, let us treat them as the same, for simplicity) is a state of a piece of information at a specific time that is a result of some changes to it %%e.g., if you modify the code and save the file, you have a new revision (or a version) of that file%%.

</div>

## S

<div id="def-separation-concerns-principle">

**Separation of Concerns Principle (SoC)**: To achieve better modularity, separate the code into distinct sections, such that each section addresses a separate _concern_. -- Proposed by [Edsger W. Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)

</div>

<div id="def-single-responsibility-principle">

**Single Responsibility Principle (SRP)**: A class should have one, and only one, reason to change. <sub>-- Robert C. Martin</sub>

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

<div id="def-static-binding">

**Static binding** (aka early binding): When a method call is resolved at compile time.  

</div>

<div id="def-stub">

**Stub**: A stub has the same interface as the component it replaces, but its implementation is so simple that it is unlikely to have any bugs. It mimics the responses of the component, but only for the a limited set of predetermined inputs. That is, it does not know how to respond to any other inputs. Typically, these mimicked responses are hard-coded in the stub rather than computed or retrieved from elsewhere, e.g. from a database. 

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

| Method                           | Type Signature          |
| :------------------------------: | :---------------------: |
| `int add(int X, int Y)`          | `(int, int)`            |
| `void add(int A, int B)`         | `(int, int)`            |
| `void m(int X, double Y)`        | `(int, double)`         |
| `void m(double X, int Y)`        | `(double, int)`         |

</panel>

</div>

## U

<div id="def-uml">

[**Unified Modeling Language (UML)**](http://www.uml.org/#UML2.0) is a graphical notation to describe various aspects of a software system. UML is the brainchild of three software modeling specialists James Rumbaugh, Grady Booch and Ivar Jacobson (also known as the Three Amigos). Each of them has developed their own notation for modeling software systems before joining force to create a unified modeling language (hence, the term ‘Unified’ in UML). UML is currently the _de facto_ modeling notation used in the software industry. 

</div>

<div id="def-use-case">

**Use Case**: A description of a set of sequences of actions, including variants, that a system performs to yield an observable result of value to an <trigger for="pop:actor">actor</trigger>.[ :book: : <popover effect="fade" placement="top" >uml-user-guide<span slot="content"><include src="./references.md#uml-user-guide" inline/></span></popover>]
  
<popover id="pop:actor" title="{{icon_preview}}" placement="top">
  <div slot="content">
    <include src="definitions.md#def-actor" />
  </div>
</popover>

</div>

<div id="def-user-story">

**User story**: User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. <sub>[[Mike Cohn](https://www.mountaingoatsoftware.com/agile/user-stories)]</sub>

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