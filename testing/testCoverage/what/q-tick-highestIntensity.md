<panel header="{{ icon_Q_A }} highest intensity coverage">
<question>

Which of these gives us the highest intensity of testing?

- ( ) a. 100% statement coverage
- ( ) b. 100% path coverage
- ( ) c. 100% branch coverage
- ( ) d. 100% condition coverage

<div slot="answer">

(b)

Explanation: 100% path coverage implies all possible execution paths through the SUT have been tested. This is essentially ‘exhaustive testing’. While this is very hard to achieve for a non-trivial SUT, it technically gives us the highest intensity of testing. If all tests pass at 100% path coverage, the SUT code can be considered ‘bug free’. However, note that path coverage does not include paths that are missing from the code altogether because the programmer left them out by mistake.

</div>
</question>
</panel>
