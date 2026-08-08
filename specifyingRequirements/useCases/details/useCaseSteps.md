{% from "common/macros.njk" import show_example with context %}
<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The main body of the use case is a sequence of steps that describes the interaction between the system and the actors.** Each step is given as a simple statement describing _who does what_.

{% call show_example() %}
The main body of a use case:
<div class="font-monospace small">

1. Student requests to upload file
2. LMS requests for the file location
3. Student specifies the file location
4. LMS uploads the file
</div>
{% endcall %}

**A use case describes only the externally visible behavior, not the internal details, of a system.** Therefore, it should minimize details that are not part of the interaction between the user and the system.

{% call show_example() %}
This use case step refers to behavior that is not externally visible (i.e., the user is not meant to be aware of it).
<div class="font-monospace small">

1. LMS ==saves the file into the cache== and indicates success.
</div>
{% endcall %}

**A step gives the intention of the actor (not the mechanics).** That means UI details are usually omitted. The idea is to leave as much flexibility to the UI designer as possible. That is, the use case specification should be as general as possible (less specific) about the UI. 

{% call show_example() %}
The first step below is not a good use case step because it contains UI-specific details. The second one is better because it omits UI-specific details.

<div class="indented">

{{ bad }} : User right-clicks the text box and chooses ‘clear’

{{ good }} : User clears the input

</div>
{% endcall %}

**A use case description can show loops too**, using a note that says which steps repeat and what ends the repetition.<br>
{{ label_example }} %%Adding `Steps 2-3 are repeated until the Student selects a valid file.` after step 3 of the 'upload file' use case above shows a loop.%%

