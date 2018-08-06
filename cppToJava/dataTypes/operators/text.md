<div id="title">

#### Operators

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use operators</span>

<div id="body">


Java has the following **arithmetic operators**:
Operator | Description | Examples
---------|-------------|---------
`+` | Additive operator |
`-` | Subtraction operator |
`*` | Multiplication operator |
`/` | Division operator |
`%` | Remainder operator |

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

{{ similar }} When an expression has multiple operators, normal **operator precedence** rules apply.

{{ different }} Java does not allow _operator overloading_.

> The **unary operators** require only one operand; they perform various operations such as incrementing/decrementing a value by one, negating an expression, or inverting the value of a boolean.{{ oracle }}


Operator | Description {{ oracle }} | example
---------|-------------|--------
`+` | Unary plus operator; indicates positive value (numbers are positive without this, however) |
`-` | Unary minus operator; negates an expression |
`++` | Increment operator; increments a value by 1 | i++
`--` | Decrement operator; decrements a value by 1 | i--
`!` | Logical complement operator; inverts the value of a boolean |


**Relational operators** are used to check conditions like whether two values are equal, or whether one is greater than the other. The following expressions show how they are used:

Operator | Description | example
---------|-------------|--------
`x == y` | x is equal to y |
`x != y` | x is not equal to y |
`x > y` | x is greater than y |
`x < y` | x is less than y |
`x >= y` | x is greater than or equal to y |
`x <= y` | x is less than or equal to y |

The result of a relational operator is a boolean value.

Java has three **conditional operators** that are used to operate on boolean values.

Operator | Description | example
---------|-------------|--------
`&&` | |
`||` | |
`!` | |


</div>

<div id="extras">
</div>