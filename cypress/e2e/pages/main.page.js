const page = require('./page');


const login_button = ('[id="supportDropdown"]');
const sign_up_button = ('[data-nav="register"]');
const whygitlab_button = ('[name="Why GitLab"]');
const whygit_form = ('[id="be-navigation-desktop"] h2');
const platform_button = ('[name="Platform"]');
const platform_form = ('[class="slp-row menu_row"] h2');
const solutions_button = ('[name="Solutions"]');
const solutions_form = ('[class="slp-container menu_container"] h2')
const pricing_button =('[name="Pricing"]');
const pricing_title = ('[tag="h1"]')
const partners_button = ('[name="Partners"]');
const partners_form = ('[class="slp-row menu_row"] h2');
const resources_button = ('[name="Resources"]');
const resources_form = ('[class="menu_left-column slp-col-md-3"] h2');
const expert_button = ('[name="Talk to an expert"]');
const trial_button = ('[name="Get free trial"]');
const search_button = ('button[aria-label="Search"]');

const why_text = " Why GitLab ";
const platform_text = " Platform ";
const solutions_text = " Solutions ";
const pricing_text = "Get The One  DevOps Platform"
const partners_text = " Partners ";
const resources_text = " Resources ";

class MainPage {

    clickLoginButton(){
        page.click(login_button);    
        }

    clicksignupButton(){
        page.click(sign_up_button);
        }

    clickwhygitlabButton(){
        page.click(whygitlab_button);
        }

    clickplatformButton(){
        page.click(platform_button);
        }

    clicksolutionsButton(){
        page.click(solutions_button);
        }

    clickpricingButton(){
        page.click(pricing_button);
        }

    clickpartnersButton(){
        page.click(partners_button);
        }

    clickresourcesButton(){
        page.click(resources_button);
        }

    clickexpertsButton(){
        page.click(expert_button);
        }

    clicktrialButton(){
        page.click(trial_button);
        }

    clicksearchButton(){
        page.click(search_button);
        }

    iswhyformVisible(){
        page.isdisplayed(whygit_form);
        }

    iswhyformCorrect(){
        page.checkElement(whygit_form,why_text);
        }

    isplatformformVisible(){
        page.isdisplayed(platform_form);
        }

    isplatformformCorrect(){
        page.checkElement(platform_form,platform_text);
        }

    issolutionsformVisible(){
        page.isdisplayed(solutions_form);
        }

    issolutionsformCorrect(){
        page.checkElement(solutions_form,solutions_text);
        }

    ispricingtitleVisible(){
        page.isdisplayed(pricing_title);
        }

    ispricingtitleCorrect(){
        page.checkElement(pricing_title,pricing_text);
        }

    ispartnerformVisible(){
        page.isdisplayed(partners_form);
        }

    ispartnersformCorrect(){
       page.checkElement(partners_form,partners_text);
        }

    isresourcesformVisible(){
        page.isdisplayed(resources_form);
        }

    isresourcesformCorrect(){
       page.checkElement(resources_form,resources_text);
        }

    urlAboutChecking(){
       page.urlChecking('/about');
        }

    urlPricingChecking(){
        page.urlChecking('/pricing');
        }

}
module.exports = new MainPage()