<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Revision Control &rarr; </div>

<div id="title">

#### DRCS vs CRCS :three:

</div>

<div id="body">

There are two models that can be followed when using an RCS in a team setting: the _centralized_ model and the _distributed_ model.

**Centralized RCS** (CRCS for short): In this model, there is a central remote repo shared by the team. Team members download (‘pull’) and upload (‘push’) changes between their own local repositories and the central repository. Older RCS tools such as CVS and SVN support only this model. Note that these older RCS do not support the notion of a local repo. Instead, they force users to do all the versioning with the remote repo.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/crcsDiagram.png" height="180">
  <strong>The centralized RCS approach without any local repos (e.g., CVS, SVN)</strong>
</pic>

Distributed RCS (DRCS for short, also known as Decentralized RCS):  In this model, there can be multiple remote repos and pulling and pushing can be done among them in arbitrary ways. The workflow can vary differently from team to team.  For example, every team member can have his/her own remote repository in addition to their own local repository, as shown in below. Git and Mercurial are some prominent RCS tools that support distributed RCS.

<pic src="{{baseUrl}}/revisionControl/drcsVsCrcs/images/drcsDiagram.png" height="240">
  <strong>The decentralized RCS approach</strong>
</pic>

</div>

<div id="extras">
<div>

</div>
