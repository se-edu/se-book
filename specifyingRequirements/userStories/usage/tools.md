{% from "common/macros.njk" import show_example with context %}
<tabs>
  <tab header="Google Sheets">

{% call show_example() %}
A Google Sheet for recording user stories:

<pic eager src="{{baseUrl}}/specifyingRequirements/userStories/usage/images/userStoriesInGoogleSheets.png" width="800" /><p/>
{% endcall %}

  </tab>
  <tab header="Trello">

{% call show_example() %}
A [Trello](https://trello.com) board for recording user stories:

<pic eager src="{{baseUrl}}/specifyingRequirements/userStories/usage/images/userStoriesInTrello.png" width="800" /><p/>
{% endcall %}

  </tab>
  <tab header="GitHub Project Boards">

You can create issues for each of the user stories and use a GitHub _Project Board_ to sort them into categories.

{% call show_example() %}
A project board:

<pic eager src="{{baseUrl}}/specifyingRequirements/userStories/usage/images/userStoriesInGitHubProjectBoards.png" width="800" /><p/>
{% endcall %}

{% call show_example() %}
An issue representing a user story.

<div id="user-stories-in-issue-tracker">

You can break the user story into issue subject and description as follows:

title | `As a user I can add a deadline`
------|---------------------------------
Description | `... so that I can keep track of my deadlines`

<pic eager src="{{baseUrl}}/specifyingRequirements/userStories/usage/images/userStoryAsGitHubIssue.png" width="800" /><p/>

Alternatively, you can put the entire user story in the description.

title | `Add deadline`
------|---------------------------------
Description | `As a user I can add a deadline so that I can keep track of my deadlines`

In both cases, apply the <span class="badge rounded-pill text-bg-info">type.Story</span> (or the <span class="badge rounded-pill text-bg-info">type.Epic</span>) label.

</div>
{% endcall %}

  </tab>
</tabs>
