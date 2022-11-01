const page = require('./page');

const contact_button = ('ul[class="support-dropdown_item"] li>a[href="/support/"]');
const contact_result = ('div[role="main"] h1');
const contact_result_text = "GitLab Support";
const gethelp_button = ('ul[class="support-dropdown_item"] li>a[href="/get-help/"]');
const gethelp_result_text = "Help Topics";
const services_button = ('ul[class="support-dropdown_item"] li>a[href="/services/"]');
const services_result = ('div[class="blank-header"] h1');
const services_result_text = "GitLab Professional Services";
const sales_button = ('ul[class="support-dropdown_item"] li>a[href="/sales/"]');
const sales_result = ('h1[data-aos="zoom-in-up"]');
const sales_result_text = "Talk to an Expert\n        ";
const register_button = ('[data-nav="register"]');
const register_form = ('div[class="signup-page"]');


class SupportPage{   
   
        clickcontsctButton(){
            page.click(contact_button);        
        }

        clickgethelpButton(){
            page.click(gethelp_button);        
        } 
        
        clickservicesButton(){
            page.click(services_button);        
        }

        clicksalesButton(){
            page.click(sales_button);        
        }

        clickregisterButton(){
            page.click(register_button);        
        }

        isresultVisible(){
            page.isdisplayed(contact_result);
        }
  
        iscontactCorrect(){
            page.checkElement(contact_result,contact_result_text);
        }
        
        isgethelpCorrect(){
            page.checkElement(contact_result,gethelp_result_text);
        }
        
        isservicesVisible(){
            page.isdisplayed(services_result);
        }
  
        isservicesCorrect(){
            page.checkElement(services_result,services_result_text);
        }
       
        issalesVisible(){
            page.isdisplayed(sales_result);
        }
  
        issalesCorrect(){
            page.checkElement(sales_result,sales_result_text);
        }
        
        isregisterformVisible(){
            page.isdisplayed(register_form);
        }

        urlSupportChecking(){
            page.urlChecking('/support');
        }

        urlGethelpChecking(){
            page.urlChecking('/get-help');
        }

        urlServicesChecking(){
            page.urlChecking('/services');
        }

        urlSalesChecking(){
            page.urlChecking('/sales');
        }

        urlSignupChecking(){
           page.urlChecking('/sign_up');
        }

       
}
module.exports = new SupportPage();