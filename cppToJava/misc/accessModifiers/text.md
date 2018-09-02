<div id="title">

#### Access Modifiers

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain access modifiers</span>

<div id="body">

**Access level modifiers determine whether other classes can use a particular field or invoke a particular method.**

There are two levels of access control:

1. **At the class level**:
   * **`public`**: the class is visible to all classes everywhere
   * **no modifier (the default, also known as _package-private_)**: it is visible only within its own package<br><br>

2. **At the member level**:
   * **`public`** or **no modifier (_package-private_)**: same meaning as when used with top-level classes
   * **`private`**: the member can only be accessed in its own class
   * **`protected`**: the member can only be accessed within its own package (as with package-private) and, in addition, by a subclass of its class in another package

The following table shows the access to members permitted by each modifier.

<div class="indented">

Modifier |	<tooltip content="whether the class itself has access to the member defined by the access level">Class</tooltip> |	<tooltip content="whether classes in the same package as the class (regardless of their parentage) have access to the member">Package</tooltip> |	<tooltip content="whether subclasses of the class declared outside this package have access to the member">Subclass</tooltip> |	<tooltip content="whether all classes have access to the member">World</tooltip>
--------------|-----------------------|-----------------------|-----------------------|----------------------
`public`	     | {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }}
`protected`	  | {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_x_red }}
no modifier	  | {{ icon_tick_green }} |	{{ icon_tick_green }} |	{{ icon_x_red }}      |	{{ icon_x_red }}
`private`	    | {{ icon_tick_green }} |	{{ icon_x_red }}      |	{{ icon_x_red }}      |	{{ icon_x_red }}

</div>

Access levels affect you in two ways:
1. When you use classes that come from another source, such as the classes in the Java platform, access levels determine which members of those classes your own classes can use.
1. When you write a class, you need to decide what access level every member variable and every method in your class should have.

</div>

<div id="extras">
</div>