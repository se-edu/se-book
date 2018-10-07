<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can write Javadoc comments</span>

<div id="title">

#### How

</div>

<div id="body">

In the absence of more extensive guidelines (e.g., given in a coding standard adopted by your project), you can follow the two examples below in your code.

**A minimal javadoc comment example for methods:**
```java
/**
 * Returns lateral location of the specified position.
 * If the position is unset, NaN is returned.
 *
 * @param x  X coordinate of position.
 * @param y Y coordinate of position.
 * @param zone Zone of position.
 * @return Lateral location.
 * @throws IllegalArgumentException  If zone is <= 0.
 */
public double computeLocation(double x, double y, int zone)
    throws IllegalArgumentException {
  ...
}
```

**A minimal javadoc comment example for classes:**
```java
package ...

import ...

/**
 * Represents a location in a 2D space. A <code>Point</code> object corresponds to
 * a coordinate represented by two integers e.g., <code>3,6</code>
 */
public class Point{
    //...
}
```

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
</div>