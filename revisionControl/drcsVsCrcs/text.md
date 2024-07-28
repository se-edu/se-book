<span id="title">DRCS vs CRCS</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain DRCS vs CRCS</span>

<div id="body">

**RCS can be done in two ways: the _centralized_ way and the _distributed_ way.**

**Centralized RCS (CRCS for short) uses a central remote repo that is shared by the team.** Team members interact directly with this central repository. Older RCS tools such as CVS and SVN support only this model.

<pic eager src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/crcsDiagram.png" width="450">

_The centralized RCS approach without any local repos (e.g., CVS, SVN)_
</pic>

**Distributed RCS (DRCS for short, also known as Decentralized RCS) allows multiple remote/local repos** working together. The workflow can vary from team to team.  For example, every team member can have his/her own remote repository in addition to their own local repository, as shown in the diagram below. Git and Mercurial are some prominent RCS tools that support the distributed approach.

<pic eager src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/drcsDiagram.png" width="450">

_The decentralized RCS approach_
</pic>

</div>

<div id="extras">
</div>
