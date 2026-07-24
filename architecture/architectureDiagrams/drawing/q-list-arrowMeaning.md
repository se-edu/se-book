<panel header="{{ icon_Q_A }} What does this arrow mean?">

A teammate submits an architecture diagram in which every pair of components is joined by an unlabeled double-headed arrow.

1. Name two things the arrows might mean.
1. State one important fact the diagram cannot express.
1. Suggest a specific fix.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

1. _Depends on_, _calls_, _sends data to_, or merely _is related to_ — the reader cannot tell.
1. It cannot distinguish a genuinely two-way dependency from two one-way ones, so the direction of dependencies — the most important information in the diagram — is lost.
1. Define the notation in a legend, use single-headed arrows for one-way dependencies, and reserve double-headed arrows for genuinely bidirectional ones.

</panel>
</panel>
