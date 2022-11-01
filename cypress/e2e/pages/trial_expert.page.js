const page = require('./page');


const expert_title = ('h1[data-aos="zoom-in-up"]');
const title_text = "Talk to an Expert\n        ";
const trial_title = ('main div[class="row"]>div:nth-child(1) h2');
const trial_text = "Free 30-day trial";
const trial_form = ('div[class="signup-page"]');
const experts_form = ('div[class="form_container"]');


class TrialPage{   
    
        istitleCorrect(){
          page.checkElement(expert_title,title_text);
        }

        istitleVisible(){
          page.isdisplayed(expert_title);
        }

        istrialCorrect(){
            page.checkElement(trial_title,trial_text);
          }
  
        istrialVisible(){
            page.isdisplayed(trial_title);
          }

        istrialformVisible(){
            page.isdisplayed(trial_form);
          }

        isexpertsformVisible(){
            page.isdisplayed(experts_form);
          }

        urlSalesChecking(){
            page.urlChecking('/sales');
            }

        urlTrialChecking(){
            page.urlChecking('/trial_registrations');
                }

}

module.exports = new TrialPage();