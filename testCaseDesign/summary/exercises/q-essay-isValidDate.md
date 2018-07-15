<panel header="{{ icon_Q_A }} isValidDate">
<question has-input="true">

Identify a set of equivalence partitions for testing isValidDate(String date) method. The method checks if the parameter date is a day that falls in the period 1880/01/01 to 2030/12/31 (both inclusive). The date is given in the format yyyy/mm/dd.  

<div slot="answer">

**Initial partitions**: [null] [10 characters long] [shorter than 10 characters] [longer than 10 characters]

For 10-character strings:

* c1-c4: [not an integer] [less than 1880] [1880-2030 excluding leap years] [leap years within 1880-2030 period] [2030-9999]
* c5: [‘/’] [not ‘/’]
* c6-c7: [not an integer] [less than 1] [2] [31-day months: 1,3,5, 7,8, 10,12] [30-day months: 4,6,9,11] [13-99]
* c8: [‘/’] [ not ‘/’]
* c9-c10: [not an integer] [less than 1] [1-28] [29] [30] [31] [more than 31]

In practice, we often use ‘trusted’ library functions (e.g. those that come with the Java JDK or .NET framework) to convert strings into dates. In such cases, our testing need not be as thorough as those suggested by the above analysis. However, this kind of thorough testing is required if you are the person implementing such a trusted component.

</div>
</question>
</panel>
