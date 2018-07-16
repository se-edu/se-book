<div id="title">

#### How

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply boundary value analysis</span>

<div id="body">

**Typically, we choose three values around the boundary to test: one value from the boundary, one value just below the boundary, and one value just above the boundary.** The number of values to pick depends on other factors, such as the cost of each test case.

<tip-box> 

{{ icon_example }} Some examples:

<table class="table">
  <tr>
    <th>Equivalence partition</th>
    <th>Some possible boundary values</th>
  </tr>
  <tr>
  <td>
      
[1-12]
      
  </td>
  <td>
      
0,1,2, 11,12,13
      
  </td>
  </tr>
  <tr>
  <td>
      
[MIN_INT, 0]<br>
%%(MIN_INT is the minimum possible integer value allowed by the environment)%%
      
  </td>
  <td>
      
MIN_INT, MIN_INT+1, -1, 0 , 1
      
  </td>
  </tr>
  <tr>
  <td>
      
[any non-null String]
      
  </td>
  <td>
      
Empty String, a String of maximum possible length
      
  </td>
  </tr>
  <tr>
  <td>
      
[prime numbers]<br>
[“F”]<br>
[“A”, “D”, “X”]
      
  </td>
  <td>
      
No specific boundary<br>
No specific boundary<br>
No specific boundary
      
  </td>
  </tr>
  <tr>
  <td>
      
[non-empty Stack]<br>
%%(we assume a fixed size stack)%%
      
  </td>
  <td>
      
Stack with: one element, two elements, no empty spaces, only one empty space
      
  </td>
  </tr>
</table>

</tip-box>


</div>

<div id="extras">
</div>