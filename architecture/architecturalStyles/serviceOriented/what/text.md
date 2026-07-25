{% from "common/macros.njk" import show_aspect %}
<span id="title">What</span>
<span id="prereqs"></span>
<span id="outcomes">{{ icon_outcome }} Can explain services, and can contrast microservices with a modular monolith</span>

<div id="body">

{{ show_aspect("This style focuses on exposing and composing capabilities through published network interfaces.") }}

**A service exposes a published interface that other software can use over a network.** Callers depend on the agreement, not on the service's programming language or internal implementation, so a service written in one language can be used by a program written in another.

**The _service-oriented architecture_ (SOA) style organizes a system around such network-accessible services**, often to connect capabilities owned by different applications or organizations.

<box>

{{ label_example }} Suppose one company provides a service for browsing and buying merchandise, and a bank provides a service for charging its credit cards. A third party can build an online bookshop that combines them — letting customers buy books and pay by card — even though all three systems are built on different platforms.

</box>

**Early SOA was strongly associated with _XML web services_ and the SOAP standard; modern services usually exchange much simpler messages, most often JSON over ordinary HTTP.** The architectural idea — published, network-accessible, platform-independent interfaces — does not depend on the message format.

**The microservice style builds one product as a collection of independently deployable services**, each focused on a capability and usually owning the data behind its interface. **_Micro_ does not prescribe a line count:** independent deployability around a focused responsibility matters far more than physical size. A payment service may be substantial and still be a microservice, if it can be released without redeploying anything else.

**Microservices are best understood by contrast with the modular monolith.** Both organize a system into components with clear responsibilities; the difference is where the boundaries fall.

| Concern | Modular monolith | Microservices |
|---------|------------------|---------------|
| Deployment | One unit, released together | Many units, each released on its own |
| Communication | Mostly calls within one process | Requests or messages across a network |
| Data ownership | Enforced by discipline, often over one store | Enforced by separation; each service owns its data, reachable only through its interface |
| When a part fails | Usually affects the whole unit | Others can keep running, but only if built to tolerate the failure |
| Testing and debugging | Build and inspect one thing | Start and coordinate many |
| Best fit | One team releasing one product | Several teams needing independent releases |

**Microservices trade operational simplicity for team and deployment independence.** If several teams each own a service, each can release or scale its service without redeploying the others — a large benefit at that scale. In exchange, calls that were method calls become network requests that can time out, no single store can answer "is this data consistent?", and a failing service can drag down the ones that depend on it.

**Good module boundaries make later extraction easier, but never automatic.** The code may move cleanly while the data does not: a boundary that separates two things previously updated together in one local transaction forces a decision about what happens when one update succeeds and the other fails — a problem that did not exist before the split.

<box type="info" seamless>

**Related deployment terms:**

* **A _container_ packages a program with the runtime, libraries, and configuration it needs**, so that environment travels with it from a laptop to a server — which is what makes "independently deployable" practical.
* **_Serverless computing_ lets you deploy code without provisioning or managing the servers that run it.** In the most common model you deploy a single function, the provider runs it in response to an event, and you are billed for execution rather than for a server kept running.

Both help _deploy_ services, but they are deployment approaches, not architectural styles, and neither is required for microservices.

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
<include src="resourcesPanel.md" boilerplate/>
</div>
