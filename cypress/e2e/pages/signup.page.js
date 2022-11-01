
const page = require('./page');

const user_firstname = ('[id="new_user_first_name"]');
const test_firstname = 'Tester';
const user_lastname = ('[id="new_user_last_name"]');
const test_surname = 'Smith';
const username = ('[id="new_user_username"]');
const test_name = 'tester_8976';
const user_email = ('[id="new_user_email"]');
const test_incorrect_email = 'fahafo5464';
const test_email = 'fahafo5464@civikli.com';
const password = ('[id="new_user_password"]');
const test_pass = 'testingpass';
const submit_button = ('[data-disable-with="Register"]');
const final_message = ('[class="gl-alert-body"]');
const email_message = ('[class="gl-field-error"]');
const capcha_text = "\nThere was an error with the reCAPTCHA. Please solve the reCAPTCHA again.\n";
const email_text = "Please provide a valid email address.";
const signin_button = ('[href="/users/sign_in?redirect_to_referer=yes"]');
const firstname_error = ('[id="new_user_first_name"] ~[class="gl-field-error"]');
const lastname_error = ('[id="new_user_last_name"] ~[class="gl-field-error"]');
const empty_text = "This field is required.";
const saleforce_button = ('[href="/users/auth/salesforce"]');
const saleforce_form = ('[id="content"]');


class SignUpPage {

    enterFirstname(){
        page.type(user_firstname,test_firstname);
        }

    enterLastname(){
        page.type(user_lastname,test_surname);
        }
  
    enterUsername() {
        page.type(username,test_name);
        }

    enterEmail(){
        page.type(user_email,test_email);
        }
  
    enterwrongEmail(){
        page.type(user_email,test_incorrect_email);
        }
  
    enterPassword(){
        page.type(password,test_pass);
        }

    clicksubmitButton(){
        page.click(submit_button);
        }

    clicksigninButton(){
        page.click(signin_button);        
        }

    clicksaleforceButton(){
        page.tabdealing(saleforce_button,'/users/auth/salesforce')
    }


    ismessageVisible(){
        page.isdisplayed(final_message);
        }

    isemailmessageVisible(){
        page.isdisplayed(email_message);
        }

    ismessageCorrect(){
        page.checkElement(final_message,capcha_text);
        }

    isemailmessageCorrect(){
        page.checkElement(email_message,email_text);
        }

    isemptynameVisible(){
        page.isdisplayed(firstname_error);
        }
  
    isemptysurnameVisible(){
        page.isdisplayed(lastname_error);
        }
  
    isemptynameCorrect(){
        page.checkElement(firstname_error,empty_text);
        }
  
    isemptysurnameCorrect(){
        expect(page.checkElement(lastname_error,empty_text));
        }
  
    issaleforceVisible(){
        expect(page.isdisplayed(saleforce_form));
        }

    urlUserChecking(){
        page.urlChecking('/users');
        }

    urlSignupChecking(){
        page.urlChecking('/sign_up');
        }

    urlSaleforceChecking(){
        page.urlChecking('/users');
        }


}

module.exports = new SignUpPage();
