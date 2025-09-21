{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_folder_columns, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_protip, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_troubleshooting, show_under_the_hood with context %}

<span id="title">Revision Control Models and Workflows</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain DRCS vs CRCS</span>

<div id="body">

**Revision control can be done in two ways: the _centralized_ way and the _distributed_ way.**

**{{ show_git_term("Centralized RCS") }} (CRCS for short) uses a central remote repo that is shared by the team.** Team members interact directly with this central repository. Older RCS tools such as CVS and SVN support only this model.

<pic eager src="{{baseUrl}}/gitAndGithub/drcsVsCrcs/images/crcsDiagram.png" width="450">

_The centralized RCS approach without any local repos (e.g., CVS, SVN)_
</pic>

**{{ show_git_term("Distributed RCS") }} (DRCS for short, also known as Decentralized RCS) allows multiple remote/local repos** working together. The workflow can vary from team to team.  For example, every team member can have his/her own remote repository in addition to their own local repository, as shown in the diagram below. Git and Mercurial are some prominent RCS tools that support the distributed approach.

<pic eager src="{{baseUrl}}/gitAndGithub/drcsVsCrcs/images/drcsDiagram.png" width="450">

_The decentralized RCS approach_
</pic>

**There are different {{ show_git_term("revision control workflows") }}** -- each prescribing a certain ways of how branches are created, merged, and shared, shaping how code flows between developers. Common examples include centralised, feature branch, forking, git flow, trunk based.

</div>

<div id="extras">
</div>
