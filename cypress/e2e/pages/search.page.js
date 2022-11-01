
const page = require('./page');


const search_input = ('input[placeholder="Search"]');
const search_text = "testing";
const searh_results_title = ('[class="search-results__header"]');
const devops_button = ('a[data-ga-name="DevOps"]');
const devops_title = ('div[class="copy"]>h1');
const devops_text = "What is DevOps?";
const gitlab_link = ('a[href="https://gitlab.com/users/sign_in/"]');


class SearchPage { 

        enterSearchItem(){
           page.type(search_input,search_text);
        }

        pressEnter(){
            page.pressEnter(search_input);
        }

        clickGitlabButton(){ 
           page.changetargets(gitlab_link,'https://gitlab.com/users/sign_in/','/users/sign_in/');              
        }

        clickdevopsButton(){
           page.changetargets(devops_button,'https://about.gitlab.com/topics/devops/','/topics/devops/');        
        }

        isresulttitleVisible(){
           page.isdisplayed(searh_results_title);
        }

        isresulttitleCorrect(){
            page.checkElement(searh_results_title,search_text);
        }
        
        isdevopsVisible(){
            page.isdisplayed(devops_title);
          }
  
        isdevopsCorrect(){
            page.checkElement(devops_title,devops_text);
        }

        urlAboutChecking(){
            page.urlChecking('/about');
        }

        urlDevopsChecking(){
            page.urlChecking('/devops');
        }

        urlSigninChecking(){
            page.urlChecking('/sign_in');
        }
       
}
module.exports = new SearchPage();