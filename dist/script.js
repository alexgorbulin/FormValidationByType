// check the input type
// based on the input type, validate:
// text: at least one character
// radio/checkbox: checked property
// select-one: value is not empty string
// textarea: at least one character

function validateForm() {
  //   only one form element in form collection
  var formCollection = document.forms[0];
  var textInput = false;
  var radioInput = false;
  var checkInput = false;
  var dropInput = false;
  var textAreaInput = false;
  var errorMap = new Map();
  //   Iterate through form elements and check fro "text",
  //   "radio","checkbox","select-one",and "text-area"
  //   and differentiate  same type elements with element name

  for (var i = 0; i < formCollection.length; i++) {
    var element = formCollection[i];
    if (element.type == 'text') {
      if (element.value !== "" && element.value.length > 0) {
        textInput = true;
      }
      errorMap.set(element.type, formCollection[i].name);
    }
    if (element.type == 'radio') {
      //         check if already made true since
      //         there is more than one radio
      var groupName = element.name;
      var radioButtons = document.getElementsByName(groupName);
      console.log(radioButtons[0].checked);
      console.log(radioButtons[1].checked);
      for (let i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i].checked);
        if (radioButtons[i].checked == true) {
          radioInput = true;
        }
      }
      errorMap.set(element.type, formCollection[i].name);
    }

    if (element.type == 'checkbox') {
      //         check if already made true since
      //         there is more than one checkbox
      var groupName = element.name;
      var checkBoxes = document.getElementsByName(groupName);
      for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked = true) {
          checkInput = true;
        }
      }
      errorMap.set(element.type, formCollection[i].name);
    }
    if (element.type == 'select-one') {
      if (element.value !== "") {
        dropInput = true;
      }
    }
    if (element.type == 'textarea') {
      if (element.value !== "" && element.value.length > 0) {
        textAreaInput = true;
      }
      errorMap.set(element.type, formCollection[i].name);
    }
  }
  if (!textInput || !radioInput || !checkInput || !dropInput || !textAreaInput) {
    if (!textInput) {alert('Name text input field is missing valid data');} else
    if (!radioInput) {alert('Gender radio field is missing valid data');} else
    if (!checkInput) {alert('Hobbies checkbox field is missing valid data');} else
    if (!dropInput) {alert('Favourite Show drop menu field is missing valid data');} else
    if (!textAreaInput) {alert('Comments textarea field is missing valid data');}
    return false;
  }
}