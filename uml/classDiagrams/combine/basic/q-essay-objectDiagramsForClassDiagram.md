<panel header="{{ icon_Q }} Draw an Object Diagram for the Class Diagram (Person-Guardian)">
<div>

Suppose we wrote a program to follow the class structure given in this class diagram:

<pic eager src="{{baseUrl}}/modeling/modelingStructures/classDiagramsBasic/images/typicalClasssStructure.png" width="400" />
<p/>

Draw object diagrams to represent the object structures after each of these steps below. Assume that we are trying to minimize the number of total objects.

i.e., apply step 1 → [diagram 1] → apply step 2 on diagram 1 → [diagram 2] and so on.

1. There are no persons.

2. `Alfred` is the Guardian of `Bruce`.

3. `Bruce`'s contact number is the same as `Alfred`'s.

4. `Alfred` is also the guardian of another person. That person lists `Alfred`'s home address as his home address as well as office address.

5. `Alfred` has an office address at the `Wayne Industries` building which is different from his home address (i.e., `Bat Cave`).

<panel header=":fas-lightbulb: hint" minimized>

After step 2, the diagram should look like this:

<pic eager src="{{baseUrl}}/uml/classDiagrams/combine/basic/images/objectDiagramsForClassDiagramHint.png" width="600" />

%%Why both `Person` objects use the same `Address` object? Because the questions asks us to minimize the number of
objects (which is an _artificial_ constraint added to ensure everyone arrives at the same diagram)%%
</div>

</div>

</panel>
