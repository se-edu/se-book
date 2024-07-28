Double-click the `master` branch.

<pic eager src="{{baseUrl}}/gitAndGithub/branch/images/sourcetree_3.png" height="150" />
<p/>

<box type="info" header="Revisiting `master` vs `origin/master`" seamless>

In the screenshot above, you see a `master` label and a `origin/master` label for the same commit. The former identifies the <tooltip content="i.e., the most recent commit on the branch">tip</tooltip> of the local `master` branch while the latter identifies the tip of the `master` branch at the remote repo named `origin`. The fact that both label points to the same commit means the local `master` branch and its remote counterpart are <tooltip content="neither one has commits the other one doesn't">in sync</tooltip> with each other.
Similarly, `origin/HEAD` label appearing against the same commit indicates that the <tooltip content="`HEAD` label indicates the currently checked-out branch's latest commit">`HEAD` label</tooltip> of the remote repo is pointing to this commit as well.

</box>
