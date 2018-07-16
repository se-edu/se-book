<div id="title">

#### Combining Design Patterns

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can combine multiple patterns to fit a context</span>

<div id="body">

**Design patterns are usually embedded in a larger design and sometimes applied in combination with other design patterns.**

<tip-box>

{{ icon_example }} Let us look at a case study that shows how design patterns are used in the design of a class structure for a Stock Inventory System (SIS) for a shop. The shop sells appliances, and accessories for the appliances. SIS simply stores information about each item in the store.

**Use Cases**:

* Create a new item
* View information about an item
* Modify information about an item
* View all available accessories for a given appliance
* List all items in the store


SIS can be accessed using multiple terminals. Shop assistants use their own terminals to access SIS, while the shop manager’s terminal continuously displays a list of all items in store. In the future, it is expected that suppliers of items use their own applications to connect to SIS to get real-time information about current stock status.  User authentication is not required for the current version, but may be required in the future.

A step by step explanation of the design is given below. Note that this is one out of many possible designs.  Design patterns are also applied where appropriate.

A `StockItem` can be an Appliance or an Accessory.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/stockItem.png" height="100" />
<p/>

To track that each `Accessory` is associated with the correct `Appliance`, consider the following alternative class structures.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/alternativeOne.png" height="120" />
<p/>

The third one seems more appropriate (the second one is suitable if accessories can have accessories). Next, consider between keeping a list of `Appliances`, and a list of `StockItems`.  Which is more appropriate?

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/alternativeTwo.png" height="100" />
<p/>

The latter seems more suitable because it can handle both appliances and accessories the same way. Next, an abstraction occurrence pattern is applied to keep track of `StockItems`.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/alternativeThree.png" height="100" />
<p/>

Note the inclusion of navigabilities. Here’s a sample object diagram based on the class model created thus far.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/stockItemListObjectDiagram.png" height="150" />
<p/>

Next, apply the façade pattern to shield the SIS internals from the UI.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/withFacade.png" height="200" />
<p/>

As UI consists of multiple views, the  MVC pattern is applied here.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/withMVC.png" height="270" />
<p/>

Some views need to be updated when the data change; apply the Observer pattern here.

<img src="{{baseUrl}}/designPatterns/more/combiningDesignPatterns/images/withObserver.png" height="270" />
<p/>

In addition, the Singleton pattern can be applied to the façade class.

</tip-box>

</div>

<div id="extras">
</div>