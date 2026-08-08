{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Validating requirements</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can validate gathered requirements</span>

<div id="body">

**Gathering requirements tells you what people said; {{ show_term("validating requirements") }} tells you whether what you wrote down is what they meant.** It is worth distinguishing from the check that comes much later:

* **Validating requirements asks whether you have written down the right thing.**
* **Verifying software asks whether what was built matches what was written down.**

A team that only does the second can build exactly the wrong product, correctly.

Three checks are cheap enough to run on a student project:

1. **Walk the requirement back to the stakeholder in words they would use, and wait for the correction.** Reading your own notes aloud to the person who gave them to you finds misunderstandings faster than any amount of rereading them yourself.
1. **Put something in front of a user instead of describing it.** People correct a rough sketch or a mock-up far more readily than they correct a paragraph, because they can see what they would actually be given.
1. **State the observable result that would settle the requirement.** If nobody can say what would count as having met it, the requirement is not yet saying anything a team could build against.

{% call show_example() %}
A requirement gathered for a learning management system:

> `Lecturers should be able to see how their students are doing.`

Walked back to the lecturer who asked for it, this turns out to mean something much narrower: they want to spot students who have stopped participating, early enough to contact them. 'How students are doing' would have been built as a grade dashboard, which nobody wanted.
{% endcall %}

**A requirement you cannot yet state in observable terms is not wrong, it is not ready.** Record it as an open question, or as the next thing to put a prototype in front of. A product vision, an unresolved disagreement between two stakeholders, or a quality concern that nobody has quantified yet are all legitimate inputs at this stage; deleting them because they cannot be phrased as a check yet would throw away the very things most worth resolving.

</div>

<div id="extras">
</div>
