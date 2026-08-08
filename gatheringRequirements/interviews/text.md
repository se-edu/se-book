{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">Interviews</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can conduct a requirements interview</span>

<div id="body">

**Interviewing stakeholders and <trigger for="pop:interviews-domainExpert">{{ show_term("domain experts") }}</trigger> can produce useful information about project requirements.** How much it produces depends far more on how the interview is run than on how long it lasts.

<popover id="pop:interviews-domainExpert" header="" placement="top">
  <div slot="content">
    <include src="../../common/definitions.md#def-domain-expert" />
  </div>
</popover>

1. **Find out what the person is responsible for before you meet them**, and decide what only they can tell you. An interview spent on things you could have looked up is a wasted one.
1. **Open with something concrete rather than an abstract question.** _'What do you need?'_ invites a vague answer, or a feature request that hides the need behind it. Walking through a recent situation, a screen of the current system, or a prototype gets you specifics.
1. **Ask what goes wrong today and what they do instead.** Workarounds are where unmet requirements hide: if someone keeps a private spreadsheet, the system is failing them in a way worth understanding.
1. **Play the answer back in your own words before moving on.** It is very common for both sides to leave an interview believing they agreed, having understood different things.
1. **Confirm your written notes with the interviewee afterwards.** They can correct what you misheard while they still remember what they said.

{% call show_example() %}
Part of an interview with a manager, for a system that handles leave applications:

> **You:** Walk me through the last time someone on your team asked for leave.<br>
> **Manager:** She emailed me, I checked the shared spreadsheet, and I replied saying yes.<br>
> **You:** What were you checking in the spreadsheet?<br>
> **Manager:** Whether anyone else was already away that week. And her leave balance, but that is usually out of date, so I ask the HR office instead.<br>
> **You:** So you don't rely on the balance in the spreadsheet?<br>
> **Manager:** No. I've been caught out by it before.

Two requirements surface that nobody asked for: an approver needs to see who else is away in the same period, and the leave balance has to be current enough to decide on.
{% endcall %}

**Treat what you hear as claims to be checked, rather than requirements to be recorded.** People often describe the process they are supposed to follow rather than the one they actually follow, and two stakeholders can want things that cannot both be true.<br>
{{ label_example }} %%One department wants every leave application approved by a manager; another wants short absences to need no approval at all.%%

</div>

<div id="extras">
</div>
