<div id="title">

#### Operators

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use operators</span>

<div id="body">


Java has the following **arithmetic operators**:
Operator | Description | Examples
---------|-------------|---------
`+` | Additive operator | `2 + 3` %%{{ icon_output_right }}%% `5`
`-` | Subtraction operator | `4 - 1` %%{{ icon_output_right }}%% `3`
`*` | Multiplication operator | `2 * 3` %%{{ icon_output_right }}%% `6`
`/` | Division operator | ==`5 / 2` %%{{ icon_output_right }}%% `2`== but ==`5.0 / 2` %%{{ icon_output_right }}%% `2.5`==
`%` | Remainder operator | `5 % 2` %%{{ icon_output_right }}%% `1`

The following program uses some operators as part of an expression `hour * 60 + minute`:

```java
int hour = 11;
int minute = 59;
System.out.print("Number of minutes since midnight: ");
System.out.println(hour * 60 + minute);
```
{{ icon_output }}
```
Number of minutes since midnight: 719
```

{{ similar }} **When an expression has multiple operators, normal _operator precedence_ rules apply**. Furthermore, you can use parentheses to specify a precise precedence.

<box>

Examples:
* `4 * 5 - 1` {{ icon_output_right }} `19` (`*` has higher precedence than `-`)
* `4 * (5 - 1)` {{ icon_output_right }} `16` (parentheses `(` `)` have higher precedence than `*`)
</box>

{{ different }} Java does not allow _operator overloading_.

> The **unary operators** require only one operand; they perform various operations such as incrementing/decrementing a value by one, negating an expression, or inverting the value of a boolean.{{ oracle }}


Operator | Description {{ oracle }} | example
---------|-------------|--------
`+` | Unary plus operator; indicates positive value<br>(numbers are positive without this, however) | `x = 5; y = +x` %%{{ icon_output_right }}%% `y` is `5`
`-` | Unary minus operator; negates an expression | `x = 5; y = -x` %%{{ icon_output_right }}%% `y` is `-5`
`++` | Increment operator; increments a value by 1 | `i = 5; i++` %%{{ icon_output_right }}%% `i` is `6`
`--` | Decrement operator; decrements a value by 1 | `i = 5; i--` %%{{ icon_output_right }}%% `i` is `4`
`!` | Logical complement operator; inverts the value of a boolean | `foo = true; bar = !foo` %%{{ icon_output_right }}%% `bar` is `false`


**Relational operators** are used to check conditions like whether two values are equal, or whether one is greater than the other. The following expressions show how they are used:

Operator | Description | example %%{{ icon_output_right }}%% `true`| example %%{{ icon_output_right }}%% `false`
---------|-------------|---------------------------------------|----------------------------------------
`x == y` | `x` is equal to `y` | `5 == 5` | `5 == 6`
`x != y` | `x` is not equal to `y` |`5 != 6` | `5 != 5`
`x > y` | `x` is greater than `y` | `7 > 6` | `5 > 6`
`x < y` | `x` is less than `y` | `5 < 6` | `7 < 6`
`x >= y` | `x` is greater than or equal to `y` | `5 >= 5` | `4 >= 5`
`x <= y` | `x` is less than or equal to `y` | `4 <= 5` | `6 <= 5`

The result of a relational operator is a boolean value.

Java has three **conditional operators** that are used to operate on boolean values.

Operator | Description | example %%{{ icon_output_right }}%% `true`| example %%{{ icon_output_right }}%% `false`
---------|-------------|-------------------------------------------|--------------------------------------------
`&&` | and | `true && true` %%{{ icon_output_right }}%% `true` | `true && false` %%{{ icon_output_right }}%% `false`
`||` | or | `true || false` %%{{ icon_output_right }}%% `true` | `false || false` %%{{ icon_output_right }}%% `false`
`!` | not | `not false` | `not true`


</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
</div>