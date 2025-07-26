<span id="title">Class diagrams - basic </span>

<span id="outcomes">{{ icon_outcome }} Can use basic-level class diagrams</span>

<div id="body">


**Classes form the basis of class diagrams.**

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/classDiagrams/introduction/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Introduction → What" alt="{{ icon_prereq }} UML/ClassDiagrams" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/classes/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Classes → What" alt="{{ icon_prereq }} Classes" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/classLevelMembers/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Class-Level Members → What" alt="{{ icon_prereq }} Class-Level Members" {{ panel_state }} />
{% endmacro %}


{{ print_sensitive_panels("expanded") }}

**_Associations_ are the main connections among the classes in a class diagram.**
{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../oop/associations/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} OOP {{ icon_embedding }} Associations → What" alt="{{ icon_prereq }} OOP/Associations" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/associations/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations → What" alt="{{ icon_prereq }} UML/Associations" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/associationsAsAttributes/what/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations as Attributes" alt="{{ icon_prereq }} UML/Associations" {{ panel_state }} />
{% endmacro %}


{{ print_sensitive_panels("expanded") }}

The most basic class diagram is a bunch of classes with some solid lines among them to represent associations, such as this one.

<box>

{{ icon_example }} An example class diagram showing associations between classes.
<p/><pic eager src="{{baseUrl}}/modeling/modelingStructures/classDiagramsBasic/images/ageListCalculatorPersonMinimal.png" width="450" />
<p/>

</box>

In addition, **associations can show additional decorations such as _association labels_, _association roles_, _multiplicity_ and _navigability_** to add more information to a class diagram.

{% macro print_sensitive_panels(panel_state="") %}
<panel type="seamless" src="../../../uml/classDiagrams/associations/labels/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations → Labels" alt="{{ icon_prereq }} Labels" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/associations/roles/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations → Roles" alt="{{ icon_prereq }} Roles" {{ panel_state }} />
<panel type="seamless" src="../../../oop/associations/navigability/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} OOP {{ icon_embedding }} Associations → Navigability" alt="{{ icon_prereq }} OOP/Navigability" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/associations/navigability/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations → Navigability" alt="{{ icon_prereq }} UML/Navigability" {{ panel_state }} />
<panel type="seamless" src="../../../oop/associations/multiplicity/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} OOP {{ icon_embedding }} Associations → Multiplicity" alt="{{ icon_prereq }} OOP/Multiplicity" {{ panel_state }} />
<panel type="seamless" src="../../../uml/classDiagrams/associations/multiplicity/unit-inElsewhere-asFlat.md#main" boilerplate header="{{ icon_prereq }} UML {{ icon_embedding }} Class Diagrams → Associations → Multiplicity" alt="{{ icon_prereq }} UML/Multiplicity" {{ panel_state }} />
{% endmacro %}

{{ print_sensitive_panels("expanded") }}

<box>

{{ icon_example }} Here is the same class diagram shown earlier but with some additional information included:
<p/><pic eager src="{{baseUrl}}/modeling/modelingStructures/classDiagramsBasic/images/ageListCalculatorPerson.png" width="450" />
<p/>

</box>


</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate/>
</div>
