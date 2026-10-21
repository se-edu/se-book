{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Validating requirements</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can validate gathered requirements</span>

<div id="body">

**Gathering requirements tells you what people said; {{ show_term("validating requirements") }} tells you whether what you noted down is what they meant.** It is worth distinguishing from the check that comes much later:

Some examples of things you can do to validate requirements:

1. **State the requirement back to the stakeholder in words they would use.** Reading your own notes aloud to the person who gave them to you finds misunderstandings faster than rereading them yourself.
1. **Put something in front of a user instead of describing it.** People correct a rough sketch or a mock-up far more readily than they correct a paragraph, because they can see what they would actually be given.
1. **State the observable result of the requirement.** If the stakeholders don't agree that that result would make the requirement as 'met', the requirement is not ready yet. Record it as an open question, or as the next thing to put a prototype in front of.

{% call show_example() %}
A requirement gathered for a learning management system:

Requirement: `Lecturers should be able to see how their students are doing.`

Check performed: Stated back to the lecturer who asked for it.

Findings: This turns out to mean something much narrower: they want to spot students who have stopped participating, early enough to contact them.

Implication: 'How students are doing' would have been built as a grade dashboard, which wasn't what they wanted.
{% endcall %}

</div>

<div id="extras">
</div>
