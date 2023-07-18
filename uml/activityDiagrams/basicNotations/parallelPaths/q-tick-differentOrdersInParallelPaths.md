<panel header="{{ icon_Q_A }} Which sequence of actions are supported?">

Which sequence of actions are supported by this activity diagram?

<puml>
@startuml
start
fork
    :G1;
    :G2;
fork again
    :H1;
    :H2;
end fork
stop
@enduml
</puml>

- [ ] G1 G2 H1 H2
- [ ] G1 H1 G2 H2
- [ ] G1 H1 H2 G2

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

All three are supported.<br>
Reason: actions in parallel paths can interleave with each other, provided,

1. all paths are completed eventually (e.g., G1 <span class="text-danger">H1</span> G2 is not compliant), and,
1. actions in each path follow the given order (e.g., G1 <span class="text-danger">H2</span> G2 <span class="text-danger">H1</span> is not compliant).

</panel>
</panel>
