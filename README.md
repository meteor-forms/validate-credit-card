#Validate-Form : Credit Card

This package extends the `Validate-Form` package found [here](https://github.com/AdamBrodzinski/validate-form)



## Setup

`meteor add forms:validate-credit-card`


## Useage

Simply add `data-credit-card` to your fields like so

```html
<form id='new-user-form' class='validate'>
  <div class="form-group">
    <input type="text" name="credit-card" data-onblur data-credit-card>
  </div>
</form>
```
