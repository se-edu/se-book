<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain use case diagrams</span>

<span id="title">Use case diagrams</span>

<div id="body">

**Use case diagrams model the mapping between _features_ of a system and its user _roles_** i.e., which user roles can perform which tasks using the software.

<box>

{{ icon_example }} An example use case diagram:

<puml>
@startuml
left to right direction
actor "Staff" as s
actor "Customer" as c
rectangle "Ticket Machine" {
  usecase "Set schedule" as UC1
  usecase "Set price" as UC2
  usecase "Buy ticket" as UC3
  usecase "Upload" as UC4
}
(UC1) .> (UC4) : <<include>>
(UC2) .> (UC4) : <<include>>

c --> UC3
s --> UC1
s --> UC2
@enduml
</puml>

</box>

</div>

<div id="extras">
</div>
