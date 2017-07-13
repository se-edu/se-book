<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design :arrow_right: Boundary Value Analysis :arrow_right:</div>

<div id="title">

#### How :two:

</div>

<div id="body">

Typically, we choose three values around the boundary to test: one value from the boundary, one value just below the boundary, and one value just above the boundary.

Some examples:

<table class="table">
  <tr>
    <th>Equivalence partition</th>
    <th>Some possible boundary values</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>[1-12]</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>0,1,2, 11,12,13</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>[MIN_INT, 0]</li>
        <li>* MIN_INT is the minimum possible integer value allowed by the environment.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>MIN_INT, MIN_INT+1, -1, 0 , 1</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>[any non-null String]</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Empty String, a String of maximum possible length</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>[prime numbers]</li>
        <li>[“F”]</li>
        <li>[“A”, “D”, “X”]</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>No specific boundary</li>
        <li>No specific boundary</li>
        <li>No specific boundary</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>[non-empty Stack]</li>
        <li>* we assume a fixed size stack</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Stack with: one element, two elements, no empty spaces, only one empty space</li>
      </ul>
    </td>
  </tr>
</table>

</div>

</div>
