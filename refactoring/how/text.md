<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Refactoring :arrow_right: </div>

<div id="title">

#### How :two:

</div>

<div id="body">

Given below are some more commonly used refactorings. A more comprehensive list is available at
  <popover effect="fade" placement="top">
    refactoring-catalog <span slot="content"><include src="../../common/references.md#refactoring-catalog" inline/></span>
  </popover>
.

1. [Consolidate Conditional Expression](https://refactoring.com/catalog/consolidateConditionalExpression.html)
2. [Decompose Conditional](https://refactoring.com/catalog/decomposeConditional.html)
3. [Inline Method](https://refactoring.com/catalog/inlineMethod.html)
4. [Remove Double Negative](https://refactoring.com/catalog/removeDoubleNegative.html)
5. [Replace Magic Number with Symbolic Constant](https://refactoring.com/catalog/replaceMagicNumberWithSymbolicConstant.html)
6. [Replace Nested Conditional with Guard Clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
7. [Replace Parameter with Explicit Methods](https://refactoring.com/catalog/replaceParameterWithExplicitMethods.html)
8. [Reverse Conditional](https://refactoring.com/catalog/reverseConditional.html)
9. [Split Loop](https://refactoring.com/catalog/splitLoop.html)
10. [Split Temporary Variable](https://refactoring.com/catalog/splitTemporaryVariable.html)

<tip-box type="info">

Tip: Some IDEs have built in support for basic refactorings such as automatically renaming a variable/method/class in all places it has been used.

</tip-box>

<tip-box type="important">

Important: Refactoring, even if done with the aid of an IDE, may still result in regressions. Therefore, each small refactoring should be followed by regression testing.

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
