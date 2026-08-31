{% from "common/macros.njk" import show_term with context %}
{% from "common/macros.njk" import show_aspect, show_example %}

<span id="title">What</span>

<span id="prereqs"></span>


<span id="outcomes">{{ icon_outcome }} Can identify the client-server architectural style, and can explain what a tier is</span>

<div id="body">

{{ show_aspect("This style focuses on which parts request capabilities and which parts provide them.") }}

**In the {{ show_term("client-server") }} style, a _server_ provides a capability or data, and one or more _clients_ use it.**

<pic eager class="tbg" src="{{baseUrl}}/architecture/architecturalStyles/clientServer/what/images/clientServer.svg" width="181" />
<p/>

**Sharing data among several installations is the most common reason to reach for client-server, but it is not the only one** — clients also use a server for centralized computation, authentication, or coordination. In the shared-data case, the fix is to give the shared data a home of its own: a separate program — the server — becomes the authoritative owner of the invoices, and each desktop application becomes a client, sending a _request_ such as "add this invoice" and receiving a _response_ from the server.<br>

{% call show_example() %}
Suppose several users need to edit the same set of invoices from their own desktop applications. Local files no longer suffice, because each installation would hold a different copy, and no installation can reach another's hard disk.

Adding a server changes _both_ views of the invoice manager. In the logical view, `RemoteStorage` now depends on a request handler that owns the shared data; in the deployment view, client and server become separately deployed parts that exchange messages over a network.

<puml src="images/clientServerViews.puml" width="921" />

<small>%%In the logical view, each arrow is a dependency. In the deployment view, each arrow is a message sent between separately deployed parts.%%</small>
{% endcall %}

**Adding a server changes more than the location of data storage** (or whatever else the clients need to share). A real split adds architectural elements and concerns:

* a client-side component that sends requests;
* a server-side component that receives and handles them;
* an agreed request and response format, so both sides read messages the same way; and
* handling for timeouts, failures, and version mismatches — concerns that the purely local design did not have.

**A good interface limits the impact of moving to a client-server architecture but does not avoid it entirely.**
{% call show_example() %}
Because `Logic` depended on what `Storage` promised rather than on a specific implementation, a `RemoteStorage` that honors the same interface may spare `Logic` any change at all — a real payoff from the earlier separation. But the system as a whole has gained communication components that someone must build and maintain.
{% endcall %}

**This is also where tiers appear.** The client program is one tier and the server another — a {{ show_term("tier") }} being a separately deployed part, not necessarily one physical machine.

**A network boundary adds costs that local calls never had:**

* **Requests take far longer, and less predictably.** A method call inside a program is orders of magnitude faster than a request that crosses a network, and unlike a local call, a network request takes a different amount of time on each attempt. Users notice both.
* **Failures can be partial.** A timeout does not reveal whether the server failed _before_ or _after_ doing the work. Retrying carelessly can perform the operation twice.
* **Versions must stay compatible.** A new server may still receive requests from an old client.
* **Security becomes prominent.** The server must decide who may read or change the shared data.

{% call show_example() %}
Client-server is extremely common — online games, email, collaborative applications, and web applications all use it, though it is in no way limited to browser-based software.

<pic eager class="tbg" src="{{baseUrl}}/architecture/architecturalStyles/clientServer/what/images/clientServerExamples.svg" width="584" />
{% endcall %}

</div>

<div id="extras">
</div>
