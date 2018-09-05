<div id="title">

#### DRCS vs CRCS

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain DRCS vs CRCS</span>

<div id="body">

**RCS can be done in two ways: the _centralized_ way and the _distributed_ way.**

**Centralized RCS (CRCS for short)uses a central remote repo that is shared by the team.** Team members download (‘pull’) and upload (‘push’) changes between their own local repositories and the central repository. Older RCS tools such as CVS and SVN support only this model. Note that these older RCS do not support the notion of a local repo either. Instead, they force users to do all the versioning with the remote repo.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/crcsDiagram.png" width="300">

_The centralized RCS approach without any local repos (e.g., CVS, SVN)_
</pic>

**Distributed RCS (DRCS for short, also known as Decentralized RCS) allows multiple remote repos** and pulling and pushing can be done among them in arbitrary ways. The workflow can vary differently from team to team.  For example, every team member can have his/her own remote repository in addition to their own local repository, as shown in the diagram below. Git and Mercurial are some prominent RCS tools that support the distributed approach.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/drcsDiagram.png" width="300">

_The decentralized RCS approach_
</pic>

</div>

<div id="extras">
</div>