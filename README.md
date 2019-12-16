# Web form with conditions

**Note:** please first read the exercise and ask for clarifications if you spot anything that is unclear.

**Subject:** create a validation mechanism for a web form containing fields with conditional dependencies.


## We need to collect some information about people

The information we want to gather is:
- Title (Mr, Mrs)
- First name
- Last name
- Country of citizenship (choices: France or Brazil only)
- Passport ID
- An email address


## Formatting / validation informations

The Passport ID looks different for Brazil and for France:
- Brazilian passport IDs contain 8 alphanumeric digits:
    - Two uppercase letters drawn from the set of unambiguous letters (see below)
    - Followed by 6 numerals (0-9)
- French passport IDs contain 9 alphanumeric digits (chosen from numerals 0–9 and the set of unambiguous letters).

The set of unambiguous letters is the following:
```
C, F, G, H, J, K, L, M, N, P, R, T, V, W, X, Y, Z.
```

The email address validation regex is already provided in the codebase, as well as an example of validation function. However, this function is not (yet) 
used, and can be modified to your liking to behave as you wish.  

The other fields should simply be alphabetic characters + common characters in names (eg like the dash or the space)


## Goal

We provide you with a simple layout where everything is setup. However, the form is not operational as of now.

There are several levels of completion for this test :

### Level 1: Create a validation function for the form

In the codebase, we have the function `validateForm` which, for now, does absolutely nothing. This should be completed in order for us to have the validation 
of the form upon submit (validating each input).

### Level 2: Dynamic validation

In order to provide the user with a better UX, it would be very interesting to have the form inputs validation triggered upon change, so that the user knows
on the spot if everything is correct or not. The implementation of this mechanism is up to you :)

### Level 3: Impress us !

Congratulations if you made it this far ! If you wish, feel free to do everything you think is interesting / relevant to improve the form : change the UI, 
improve the UX, implement an i18n mechanism, input masks or whatever you want to showcase :)   


## Final note 

During the live technical interview, you will most likely be asked to explain your code, maybe tweak it a little bit, so please pay extra care to make your
 code readable and easily "browseable" for you to be very efficient during the interview.
 
 The evaluation of your production will be on the following elements (in no particular order) :
 - following the specs
 - integrating new code in an existing codebase (dealing with historic code)
 - caring for the UX
 - thinking in a product-oriented way
 - structuring your code

