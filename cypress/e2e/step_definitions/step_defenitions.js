import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

const mainpage = require('../pages/main.page');
const searchpage = require('../pages/search.page');
const signuppage = require('../pages/signup.page');
const supportpage = require('../pages/support.page');
const trialpage = require('../pages/trial_expert.page');


Given("A user open main GitLab page",  function ()  {
   cy.visit('/');
});

When('A user clicks on {string} button',  (button) => {
    switch(button){
      case 'Support':
         mainpage.clickLoginButton();
        break;   
      case 'Talk to an expert':
         mainpage.clickexpertsButton();
        break;
      case 'Get free trial':
         mainpage.clicktrialButton();
        break;
      case 'DevOps':
           searchpage.clickdevopsButton()      
        break;
      default:
        console.log('Can not find button');
    }
    
});

When('A user clicks on search icon',  () =>  {
     mainpage.clicksearchButton();
});
  
When('A user press Enter',  () =>  {
     searchpage.pressEnter();
});

When('A user clicks on {string}',  (button) => {
    switch(button){
      case 'Register1':
         mainpage.clicksignupButton();
        break;   
        
      case 'Register2':
         signuppage.clicksubmitButton();
        break;  
        
      case 'Saleforce':
         signuppage.clicksaleforceButton();
        break;

      case 'Why GitLab':
         mainpage.clickwhygitlabButton();
        break;
        
      case 'Platform':
         mainpage.clickplatformButton();
        break;
      
      case 'Solutions':
         mainpage.clicksolutionsButton();
        break;      
      
      case 'Partners':
         mainpage.clickpartnersButton();
        break;

      case 'Resources':
         mainpage.clickresourcesButton();
        break;
      
      case 'Pricing':
         mainpage.clickpricingButton();
        break;

      case 'gitlab.com':
         searchpage.clickGitlabButton();
        break;

      case 'Contact Support':
         supportpage.clickcontsctButton();
        break;

      case 'Get Help':
         supportpage.clickgethelpButton();
        break;

      case 'Set up support services':
         supportpage.clickservicesButton();
        break;

      case 'Contact Sales':
         supportpage.clicksalesButton();
        break;

      default:
        console.log('Can not find button');
        break;
    } 
    
});

When('A user enters {string} in {string} field',  (data,field) => {
    switch(true){
      case data == 'Tester' && field == 'First name':
           signuppage.enterFirstname();
        break;
     
      case data == 'Smith' && field =='Last name':
           signuppage.enterLastname();
        break;
  
      case data == 'tester_8976' && field =='Username':
           signuppage.enterUsername();
        break;
  
      case data == 'fahafo5464@civikli.com'  && field =='Email':
           signuppage.enterEmail();
        break;
  
      case data == 'fahafo5464'  && field =='Email':
           signuppage.enterwrongEmail();
        break;
  
      case data == 'testingpass' && field == 'Password':
           signuppage.enterPassword();
        break;
      
      case data == 'testing' && field == 'search':
           searchpage.enterSearchItem();
        break;
  
      default:
          console.log('Can not find input field');
    }  
});

Then('{string} message was displayed. User was redirected to {string} page',  (message,url) => {
    switch(message){
      case 'There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.':
           signuppage.ismessageVisible();
           signuppage.ismessageCorrect();
           signuppage.urlUserChecking();
        break;
      default:
          console.log('Can not find message');
    }
    
});

Then('{string} message was displayed under the Email field. User stays on the same page',  (message) => {
    switch(message){
      case 'Please provide a valid email address.':
           signuppage.isemailmessageCorrect();
           signuppage.urlSignupChecking();
           signuppage.urlSignupChecking();
        break;
      case 'This field is required.':
           signuppage.isemptynameVisible();
           signuppage.isemptynameCorrect();
           signuppage.isemptysurnameVisible();
           signuppage.isemptysurnameCorrect();
           signuppage.urlSignupChecking();
        break;
      default:
          console.log('Can not find message');
    }
    
});

Then('Saleforce login form was was displayed. User was redirected to the {string} page',  (url) => {
     signuppage.urlSaleforceChecking();
    
});

Then('{string} title was displayed, {string} section was appeared',  (title,section) => {
    switch(title){
      case 'Why GitLab':
           mainpage.iswhyformVisible();
           mainpage.iswhyformCorrect();
          mainpage.urlAboutChecking();
        break;
  
      case 'Platform':
           mainpage.isplatformformVisible();
           mainpage.isplatformformCorrect();
           mainpage.urlAboutChecking();
        break;
  
      case 'Solutions':
         mainpage.issolutionsformVisible();
         mainpage.issolutionsformCorrect();
         mainpage.urlAboutChecking();
        break;
      
      case 'Partners':
           mainpage.ispartnerformVisible();
           mainpage.ispartnersformCorrect();
           mainpage.urlAboutChecking();
          break;
  
      case 'Resources':
           mainpage.isresourcesformVisible();
           mainpage.isresourcesformCorrect();
           mainpage.urlAboutChecking();
          break;
  
      default:
          console.log('Can not find section');
    }
    
});

Then('{string} title was displayed. User was redirected to the {string} page',  (title,url) => {
    switch(title){ 
      case 'Get The One DevOps Platform':
           mainpage.ispricingtitleVisible();
          //await mainpage.ispricingtitleCorrect();
           mainpage.urlPricingChecking();
        break;
  
      case 'Talk to an Expert':
           trialpage.istitleVisible();
           trialpage.istitleCorrect();
           trialpage.isexpertsformVisible();
           trialpage.urlSalesChecking();
        break; 
  
      case 'Free trial':
           trialpage.istrialVisible();
           trialpage.istrialCorrect();
           trialpage.istrialformVisible();
           trialpage.urlTrialChecking();
        break; 
      
      case 'What is DevOps?':  
           searchpage.urlAboutChecking();     
          break;
  
      case 'GitLab Support':
           supportpage.isresultVisible();
           supportpage.iscontactCorrect();
           supportpage.urlSupportChecking();     
          break;
  
      case 'Help Topics':
             supportpage.isresultVisible();
             supportpage.isgethelpCorrect();
             supportpage.urlGethelpChecking();
            break;
  
      case 'GitLab Professional Services':
             //supportpage.isservicesVisible();
             //supportpage.isservicesCorrect();
             supportpage.urlServicesChecking();
            break; 
            
      case 'Sign Up form':
           supportpage.isregisterformVisible();
           supportpage.urlSignupChecking();
          break;
  
      default:
          console.log('Can not find title');
    }
});

Then('{string} title was displayed. User stays on the same page',  (title) => {
     searchpage.isresulttitleVisible();
    //await searchpage.isresulttitleCorrect();
     searchpage.urlAboutChecking();
});
  
  Then('User was redirected to the {string} page. Sign in form was displayed',  (title) => {
     searchpage.urlSigninChecking();
});