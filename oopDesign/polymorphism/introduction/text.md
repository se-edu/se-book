<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming &rarr; Polymorphism &rarr;</div>

<div id="title">

#### Introduction :two:

</div>

<div id="body">

<tip-box type="primary">

<include src="../../../common/definitions.md#def-polymorphism" />

</tip-box>

Take the example of writing a payroll application for a university to facilitate payroll processing of university staff. Suppose an `adjustSalary(int)` operation adjusts the salaries of all staff members. This operation will be executed whenever the university initiates a salary adjustment for its staff. However, the adjustment formula is different for different staff categories, say admin and academic. Here is one possible way of designing the classes in the `Payroll` system.

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/polymorphism/introduction/images/payroll.png" height="150" />
<p/>

Here is the implementation of the adjustSalary(int) operation from the above design.

```
class Payroll1 {
    ArrayList< Admin > admins;
    ArrayList< Academic > academics;
    // ...

    void adjustSalary(int byPercent) {
        for (Admin ad: admins) {
            ad.adjustSalary(byPercent);
        }
        for (Academic ac: academics) {
            ac.adjustSalary(byPercent);
        }
    }
}
```

</tip-box>

Note how processing is similar for the two staff types. It is **as if the type of staff members is irrelevant** to how they are processed inside this operation! If that is the case, can the staff type be “abstracted away” from this operation? After all, why keep irrelevant details? Here is such an implementation of `adjustSalary(int)`:

<tip-box>

```
class Payroll2 {
    ArrayList< Staff > staff;
    // ...

    void adjustSalary(int byPercent) {
        for (Staff s: staff) {
            s.adjustSalary(byPercent);
        }
    }
}
```

Notice the following:
* Only one data structure `ArrayList<Staff>`. It contains both `Admin` and `Academic` objects but treats them as `Staff` objects
* Only one loop
* Outcome of the `s.adjustSalary(byPercent)` method call depends on whether `s` is an `Academic` or `Admin` object

</tip-box>

The above code is better in several ways:

* It is shorter.
* It is simpler.
* It is more flexible (this code will remain the same even if more staff types are added).

</tip-box>

This does not mean we are getting rid of the `Academic` and `Admin` classes completely and replacing them with a more general class called `Staff`. Rather, this part of the code “treats” both `Admin` and `Academic` objects as one type called `Staff`.

For example, `ArrayList` staff contains both `Admin` and `Academic` objects although it treats all of them as `Staff` objects. However, when the `adjustSalary(int)` operation of these objects is called, the resulting salary adjustment will be different for `Admin` objects and `Academic` objects. Therefore, **different types of objects are treated as a single general type, but yet each type of object exhibits a different kind of behavior**. This is called _polymorphism_ (literally, it means “ability to take many forms”). In this example, an object that is perceived as type `Staff` can be an `Admin` object or an `Academic` object.


</div>

<div id="extras">
<div>

</div>
