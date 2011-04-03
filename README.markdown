Namely : jQuery Input Plugin
=========

Saving the world from CAPSLOCK MONSTERS

Want to standardize you input field names so you don't get things like "JOHn DoE"? Namely is a simple plugin to help input fields with names into a standard capitalized format.

CSS tweaks only change the presentation, so when submitted, the values still look bad. Backend solutions only grab the first letters of names, so MCLONDON would become McLondon. Namely address both problems in a simple, lightweight plugin. 

Try It Out:
-----------------------
[Demo](http://www.lawderberry.com/namely "Demo")

How To Use:
-----------------------
  
Copy into your &lt;head&gt;
        &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript"&gt;&lt;/script&gt;<br/>
        &lt;script src="/scripts/jquery.namely.min.js" type="text/javascript"&gt;&lt;/script&gt;     

Add jQuery selector for your desired inputs:

      $('.namely').namely();

How Does It Work?
-----------------------

By attaching <strong>.namely();</strong> to any selector for your name fields, namely will check against the content to see if its a reasonably formatted name on blur. So:

john doe &raquo; John Doe
JOHN DOE &raquo; John Doe

Why On Blur?
-----------------------

As you type solutions tend to be bad user experiences, making deleting or changing letters after formatting difficult and second capitals like "McLondon" very impossible.