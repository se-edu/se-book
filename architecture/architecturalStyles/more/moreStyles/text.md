<span id="title">Other styles</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can recognize several other architectural styles by name</span>

<div id="body">

**Several other styles are worth recognizing by name, even if a first project will not need them.**

| Style | Central idea | Familiar example |
|-------|--------------|------------------|
| Pipes-and-filters | Data flows through a sequence of steps, each transforming it and passing it on. | A shell pipeline: `cat file \| grep error \| sort` |
| Broker | A middleman locates the right service and routes requests, so callers need not know who will answer. | A ride-hailing app matching a rider to a nearby driver |
| Peer-to-peer | Every participant is both client and server; there is no central authority. | BitTorrent |
| Plug-in (microkernel) | A minimal core provides essentials; optional features are added as separately written plug-ins. | IDE plug-ins, browser extensions |
| Transaction processing | Discrete requests are accepted and processed reliably, often at high volume. | Bank terminals submitting transactions to a central system |

<box type="warning" seamless>

**"Transaction" means two different things.** The transaction-processing _style_ is about accepting and reliably processing discrete units of work. A _database transaction_ is about a group of database operations that must all succeed or all fail together. The ideas are related, but the shared word causes confusion.

Publish-subscribe and message-oriented styles are covered under the event-driven style.

</box>

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
