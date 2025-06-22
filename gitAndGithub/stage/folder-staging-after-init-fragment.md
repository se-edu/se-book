<div id="a-staging">

%%[empty]%%
</div>
<div id="a-working">

├─ {{ icon_file }} fruits.txt #r#(untracked!)##<br>
└─ {{ icon_file }} colours.txt #r#(untracked!)##
</div>
<div id="a-text">

(a) State of the repo, just after initialisation, and creating two files. Both are untracked.
</div>


<div id="b-staging">

└─ =={{ icon_file }} fruits.txt==<br>
</div>
<div id="b-working">

├─ {{ icon_file }} fruits.txt ==#g#(tracked)##==<br>
└─ {{ icon_file }} colours.txt #r#(untracked!)##
</div>
<div id="b-text">

(b) State after staging `fruits.txt`.
</div>


<div id="c-staging">

├─ {{ icon_file }} fruits.txt<br>
└─ =={{ icon_file }} colours.txt==
</div>
<div id="c-working">

├─ {{ icon_file }} fruits.txt #g#(tracked)##<br>
└─ {{ icon_file }} colours.txt  ==#g#(tracked)##==
</div>
<div id="c-text">

(c) State after staging `colours.txt`.
</div>
