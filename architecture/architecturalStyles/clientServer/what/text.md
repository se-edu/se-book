<span id="title">What</span>

<span id="prereqs"></span>


<span id="outcomes">{{ icon_outcome }} Can identify the client-server architectural style, and can explain what a tier is</span>

<div id="body">

**In the client-server style, a _server_ provides a capability or data, and one or more _clients_ use it.**

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/clientServer/what/images/clientServer.png" height="120" />
<p/>

**Client-server is what you reach for when several copies of a program must share the same data.** Suppose several users need to edit the same set of tasks from their own desktop applications. Local files no longer suffice, because each installation would hold a different copy, and no installation can reach another's hard disk.

**The fix is to give the shared data a home of its own.** A separate program — the server — becomes the authoritative owner of the tasks. Each desktop application becomes a client, sending a _request_ such as "add this task" and receiving a _response_ from the server.

<box>

{{ icon_example }} Adding a server changes _both_ views of the task manager. The logical view gains a client-side component that talks to the server and a server-side component that answers; the deployment view gains a whole extra tier.

<puml src="images/clientServerViews.puml" height="360" />

</box>

**Adding a server changes more than the location of `Storage`.** A real split adds parts to the logical architecture too:

* a client-side component that sends requests;
* a server-side component that receives and handles them;
* an agreed request and response format, so both sides read messages the same way; and
* handling for timeouts, failures, and version mismatches, which local storage never needed.

**A good interface limits the damage but does not erase it.** Because `Logic` depended on what `Storage` promised rather than on a specific implementation, a `RemoteStorage` that honors the same interface may spare `Logic` any change at all — **a real payoff from the earlier separation.** But the system as a whole has gained communication components that someone must build and maintain.

**This is also where tiers appear.** The client program is one tier and the server another — a tier being a separately deployed part, not necessarily one physical machine.

**A network boundary adds costs that local calls never had:**

* **Requests take longer.** A method call inside a program takes microseconds; a network request takes milliseconds at best, and users feel it.
* **Failures can be partial.** A timeout does not reveal whether the server failed _before_ or _after_ doing the work. Retrying carelessly can perform the operation twice.
* **Versions must stay compatible.** A new server may still receive requests from an old client.
* **Security becomes prominent.** The server must decide who may read or change the shared data.

<box>

{{ icon_example }} Client-server is extremely common — online games, email, collaborative applications, and web applications all use it, though it is in no way limited to browser-based software.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/clientServer/what/images/clientServerExamples.png" height="200" />

</box>

</div>

<div id="extras">
</div>
