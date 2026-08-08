{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Non-functional requirements</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain non-functional requirements</span>

<div id="body">

Requirements can be divided into two in the following way:
1. **{{ show_term("Functional requirements") }} specify what the system should do.**<br>
   {{ label_example }} %%The system should allow a user to search for a book by its title.%%
2. **{{ show_term("Non-functional requirements") }} specify the constraints under which the system is developed and operated.**<br>
   {{ label_example }} %%The search should return results within two seconds.%%

{% call show_example() %}
Some categories of non-functional requirements:

* Data requirements, e.g., size, <tooltip content="how often data changes">volatility</tooltip>, <tooltip content="saving data permanently">persistence</tooltip>, etc.
* Environment requirements, e.g., the technical environment in which the system would operate or with which it needs to be compatible.
* Performance, Security, Usability, Interoperability, Maintainability, Compliance with regulations, and more ...
{% endcall %}

{% call show_example() %}
Some concrete NFRs, drawn from various projects:

* Business/domain rules: the size of the minefield cannot be smaller than five.
* Constraints: system testers are available only during the last month of the project.
* Performance requirements: the system should respond within two seconds.
* Quality requirements: the system should be usable by a novice who has never carried out an online purchase.
* Process requirements: the project is expected to adhere to a schedule that delivers a feature set every month.
{% endcall %}

You may have to spend extra effort identifying NFRs as early as possible because:
1. **NFRs are easier to miss.**<br>
   {{ label_example }} %%Stakeholders tend to think of functional requirements first.%%
1. Sometimes **NFRs are critical to the success of the software.**<br>
   {{ label_example }} %%A web application that is too slow or that has weak security is unlikely to succeed even if it has all the right functionality.%%

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
