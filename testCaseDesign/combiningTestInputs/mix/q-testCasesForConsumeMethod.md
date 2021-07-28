<panel header="{{ icon_Q }} Combine test inputs for the `consume` method">
<question>

Apply heuristics for combining multiple test inputs to improve the E&E of the following test cases, assuming all 6 values in the table need to be tested. <span class="text-danger">!!Underlines!!</span> indicate invalid values. Point out where the heuristics are contradicted and how to improve the test cases.

   <box>

   SUT: `consume(food, drink)`

   Test case |  food    |  drink
   --------- | -------- | --------
   TC1{.text-dark} | bread{.text-success}   | water{.text-success}
   TC2{.text-dark} | rice{.text-success}    | !!lava!!{.text-danger}
   TC3{.text-dark} | !!rock!!{.text-danger} | !!acid!!{.text-danger}

   </box>

</question>
</panel>
