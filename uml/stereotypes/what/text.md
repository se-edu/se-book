<span id="title">Stereotypes</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use UML stereotypes</span>

<div id="body">

**UML _stereotypes_ are a lightweight extension mechanism for adding domain-specific meaning to existing UML elements** without changing the core UML language. They label elements such as classes, objects, or relationships with roles or semantics beyond their default interpretation (for example, `<<entity>>`, `<<create>>`, `<<facade>>`), helping readers understand intent, architectural responsibilities, or usage patterns at a glance. Stereotypes do not change the fundamental structure of the model; instead, they enrich it with contextual meaning, often forming part of a UML profile tailored to a particular problem domain.

<box>

{{ icon_example }} Example:

<puml>
@startuml
skinparam classAttributeIconSize 0
skinparam roundCorner 0
skinparam backgroundcolor transparent
skinparam shadowing false
hide circle
class Class1 <<entity>>{
}
Class1 .right.> Class2: "<<create>>"
@enduml
</puml>

</box>

**The same `<< >>` notation is also used to denote built-in _classifier_ kinds `<<interface>>` and `<<enumeration>>`.** While they look like stereotypes syntactically, they are semantically closer to keywords indicating the element’s true type -- unlike stereotypes, which are optional information that don't change the underlying UML element. For example, removing a stereotype from an element doesn't change the type of the element but removing `<<interface>>` or `<<enumeration>>` from an element changes the element to a regular class.
</div>

<div id="extras">
</div>
