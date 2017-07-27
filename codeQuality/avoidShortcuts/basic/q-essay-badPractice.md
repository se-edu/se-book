<panel header=":lock::key: Which one of these is NOT a bad practice?">
<question>

Which one of these is NOT a bad practice?

A) Case statements without a ‘default’ clause

B) Omitting braces when a code block has only one statement

e.g writing this

```
if(isProper)
    return PROPER_AMOUNT;
```

instead of

```
if(isProper){
    return PROPER_AMOUNT;
}
```

C) Using a variable just to explain what’s going on

e.g.,

```
boolean isProper = notNull && notEmpty;
return isProper;
```

instead of

```
return notNull && notEmpty;
```

<div slot="answer">

C). The extra variable helps to make the code more understandable because it makes the intent of the formula clearer. The other two are error-prone shortcuts to be avoided.

</div>
</question>
</panel>
