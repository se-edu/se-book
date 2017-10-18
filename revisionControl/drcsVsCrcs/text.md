<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### DRCS vs CRCS :three:

</div>

<div id="body">

**RCS can be done in two ways: the _centralized_ way and the _distributed_ way.**

**Centralized RCS (CRCS for short)uses a central remote repo that is shared by the team.** Team members download (‘pull’) and upload (‘push’) changes between their own local repositories and the central repository. Older RCS tools such as CVS and SVN support only this model. Note that these older RCS do not support the notion of a local repo either. Instead, they force users to do all the versioning with the remote repo.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/crcsDiagram.png" height="180">
  <strong>The centralized RCS approach without any local repos (e.g., CVS, SVN)</strong>
</pic>

**Distributed RCS (DRCS for short, also known as Decentralized RCS) allows multiple remote repos** and pulling and pushing can be done among them in arbitrary ways. The workflow can vary differently from team to team.  For example, every team member can have his/her own remote repository in addition to their own local repository, as shown in the diagram below. Git and Mercurial are some prominent RCS tools that support the distributed approach.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/drcsDiagram.png" height="240">
  <strong>The decentralized RCS approach</strong>
</pic>

</div>

<div id="extras">
</div>

</div>
