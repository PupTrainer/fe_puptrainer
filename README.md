<div align="center">
<h1> Welcome to the PupTrainer Front-End Application! </h1>
</div>

<br>


# Intro
This application is the front-end repository for [PupTrainer](https://pup-trainer.herokuapp.com) , the back-end repository can be found [HERE](https://github.com/PupTrainer/be_puptrainer) .

# Technologies Used
- React
- JavaScript
- GraphQL & Apollo Client
- HTML
- SCSS
- Cypress

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Up

 1. Start by going [here](https://github.com/PupTrainer/fe_puptrainer). From here you will want to click on the green rectangular button titled 'Code'. This should open a drop down menu where you should see a link. To the left of the link there should be an icon with two over lapping squares. You can click the icon to copy the link.
 2. You will want to clone down the repo to you terminal using `git clone git@github.com:PupTrainer/fe_puptrainer.git`.
 3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` or `npm i` to install project dependencies.
 4. Run `npm start` in the terminal to see the page. You will need to copy and paste the local server from the terminal and paste it into your browser. The local server should be simialiar to, "http://localhost:3000/". `Control + C` is the command to stop running the local server. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.


 ## Application Login
 
 - When you first visit the PupTrainer main page you will see a login page. If you have already made an account you can login using your correct credentials. Otherwise please click on the register here and enter in your desired username and email. Once submitted you will recieve a confirmation message that the account has been created. Click on the login here button to then be taken back to the main login page. Please rememeber the credentials you entered and use them to login into your account. Once your account has been created follow the features list below to navigate through the application. 
 
 
 ## Features
 
 
 ### Login
 
 ![PT-Login Workflow](https://user-images.githubusercontent.com/96446170/212123869-02a39df1-400f-4767-9ac0-9dfeeb258f85.png)

 
 - When you first visit the PupTrainer page, you have the option to either create an account if you are a new user, or login if you are already a user.
 
 ### Registering a dog
 
 ![Register-pet workflow](https://terminal.turing.edu/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWsxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6ebf341db2c2f9fbe15733d7d9a74363f1462137/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFsZ0MiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--2f17d7aa4c6dab9e37d7af2bdbb7d452b5fd576d/Screen%20Shot%202022-07-26%20at%2012.26.47%20PM.png)
 
 - After logging in, the user is greeted with the homepage showing them their user information, as well as a form to register a dog with PupTrainer.
 - Registering a dog requires the dog's name, age, and breed.
 - Once submitted, the dog will then show up under the Pets section of the user information.

 ### Dog Profile
 
 ![Dog-profile-workflow](https://terminal.turing.edu/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW8xIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--46cbecc2cc5bd84c9921306c6579d21d2b364ada/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFsZ0MiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--2f17d7aa4c6dab9e37d7af2bdbb7d452b5fd576d/Screen%20Shot%202022-07-26%20at%2012.28.10%20PM.png)
 
 - To view the dog profile page, the user will select the dog they want to view by clicking on their dog's button under the Pets section of user information.
 - This will bring the user to that dog's profile page where information such as name,age,breed,known skills, as well as links for training courses the dog has not finished.
 
 ### Skill Page
 
 ![Skill-Add workflow](https://terminal.turing.edu/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXMxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3d2c86bddc5930e841506054416e98b85e8b5bc7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFsZ0MiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--2f17d7aa4c6dab9e37d7af2bdbb7d452b5fd576d/Screen%20Shot%202022-07-26%20at%2012.27.56%20PM.png)
 
 - To view a specific skill page, the user can go to their dog profile page and click on a specific skill under the `Training` section.
 - The user can see description of the skill, the level of the skill, the requirements to pass the skill, and a detailed video to walk a user through having their dog learn the skill.
 - After the user believes their dog meets the pass requirements, a user can click the `Complete Training` button to complete training for the skill.
 - The Dog Profile page will update to reflect specific skills that have been learned after clicking the `Complete Training` button.
 
 ### About Page
  
 - The user can navigate to the About page to view all of the PupTrainer team member's fluffy friends.
  
# **The Team ✨**

<table>
<tr>
   <td align="center"><a href="https://github.com/DanielN88"><img src="https://avatars.githubusercontent.com/u/92230099?v=4" width="100px;" alt=""/><br /><sub><b>Daniel N. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/daniel-r-neer/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=DanielN88" title="Code">💻</a></td>
   
  <td align="center"><a href="https://github.com/Jlavarine"><img src="https://avatars.githubusercontent.com/u/96446170?v=4" width="100px;" alt=""/><br /><sub><b>Jacob L. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/jacoblavarine/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=Jlavarine" title="Code">💻</a></td>
  
  <td align="center"><a href="https://github.com/aominhlong"><img src="https://avatars.githubusercontent.com/u/89413678?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas A. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/nicholas-ao/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=aominhlong" title="Code">💻</a></td>
  
  <td align="center"><a href="https://github.com/JoshMallery"><img src="https://avatars.githubusercontent.com/u/96563007?v=4" width="100px;" alt=""/><br /><sub><b>Josh M. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/joshmallery/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=JoshMallery" title="Code">💻</a></td>

</tr>
</table>

Thanks go to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>

 

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
<!--
 

 
 
 
 
