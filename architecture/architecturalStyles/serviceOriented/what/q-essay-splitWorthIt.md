<panel header="{{ icon_Q_A }} Is the split worth it?">

One team is building a desktop task manager. A member proposes replacing its local storage with three separately deployed backend services — task storage, search, and reminders — because "microservices are the modern architecture."

Explain what the split would buy, what it would cost this team, and what you would recommend instead.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

It would buy independent deployment and independent scaling — of little value when one team releases the whole product together and nothing is under heavy load. It would cost network communication on every operation, partial failures to handle, three backend deployments to run, and harder testing and debugging.

**The better starting point is a modular monolith with well-defined storage, search, and reminder components.** Clear boundaries keep the option of extracting a service later, if a real requirement ever appears, without paying the distributed-system costs now. (Note that all three proposed pieces are genuine _backend_ services; the desktop UI is not itself a candidate microservice.)

</panel>
</panel>
