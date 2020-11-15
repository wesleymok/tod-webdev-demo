<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
  <h3 align="center">Traction On Demand Web Developer Demo</h3>

  <p align="center">
    A demo landing page design that integrates certain Salesforce features
    <br />
    <br />
    <a href="https://wesleymok.github.io/tod-webdev-demo/?utm_source=google&utm_medium=email&utm_campaign=2020%2BEBike%2BSale&utm_term=city%2Bcycle">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)


### Built With

* [Gridsome](https://gridsome.org/)
* [Tailwindcss](https://tailwindcss.com/)
* [Salesforce](https://www.salesforce.com/ca/?ir=1)
* [Github Pages](https://pages.github.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/github_username/repo_name.git
```
2. Install NPM packages
```sh
npm install
```
3. To run this locally on your machine, in terminal (or command prompt), navigate to the project directory and type in the command: 
```sh
gridsome develop
```
This will spin up the local environment to view the web page (ie.localhost:8080).

<!-- ABOUT THE PROJECT -->
## About The Project

As apart of Traction on Demand's interview process, I was tasked to build/redesign a lead gen landing page for a store-front that sells eletronic bicyles

## Requirements
<ul>
  <li>Build a form using a Web-to-Lead form in Salesforce</li>
  <li>Build out a page using whatever framework you prefer - either host this locally or use a
free service like netlify to deploy, but the form submission has to complete</li>
  <li>The form must include the following fields:</li>
  <ul>
    <li>First Name</li>
    <li>Last Name</li>
    <li>Email</li>
    <li>Product Interest:</li>
    <ul>
      <li>Crosslite DX 300</li>
      <li>Crosslite EVO 9D</li>
      <li>Crosslite EVO 2020</li>
      <li>Crosslite Touring Hybrid 8D</li>
      <li>Crosslite 4D</li>
      <li>Crosslite Touring 6D</li>
    </ul>
    <li>Country</li>
  <li>Email consent opt in</li>
  </ul>
  <li>Analytics must be included on the page & be tracked in Salesforce (for example, a UTM
    parameter must be recorded on the lead object)</li>
  <li>Campaign to track the landing page in Salesforce</li>
  <li>Custom Object for the products offered and associated Custom Fields and Page Layouts</li>
  <li>Use Apex or workflow rules to trigger an email to the lead upon successful completion</li>
  </ul>

<!-- USAGE EXAMPLES -->
## Overview

For this task, I was asked to redesign an example landing page (https://nicprkr.github.io/tod-demo.github.io/) where I was able to use any framework of my choice.

I decided to use Gridsome to generate the static website, Tailwindcss to style everything, and Github Pages to host the landing page. 

### Reasons for using Gridsome:
<ul>
  <li>My familiarity with the framework</li>
  <li>Easy to create a blank project with a proper file structure</li>
  <li>It has a hot reloading feature whenever changes are made to the code</li>
  <li>Easy to host on Github Pages</li>
</ul>

### Reasons for using Tailwindcss:
<ul>
  <li>Contains a lot of built in standard features</li>
  <li>Easy to use grid system</li>
  <li>Comes with preset media queries</li>
  <li>Easier to maintain styles</li>
</ul>

## Design Process

I designed a navigation bar as well as a footer to make it look like the landing page is coming from an actual storefront on a website. I made a simple logo by finding a free to use SVG logo from `freeicons.io`. I searched up "Bikes" in their search bar and I was given a wide variety to choose from. I decided to use one with an orange background which also led me to use that color as the main color scheme for the landing page. The next step was to select a font style from Google Fonts to use. My goal was to find a font that was modern looking, easy on the eyes, and also easy to read when used in large paragraphs. I ended up choosing a font style called <a href="https://fonts.google.com/specimen/Poppins?query=Poppins" target="_blank">Poppins</a> to use for the landing page. 

#### Note

Poppins will look differently on other web browsers (Safari, Firefox) compared to Google Chrome. Safari and Firefox will display the font in a different boldness and density.


## Breakdown of the Salesforce Requirements

### 1. Build a form using a Web-to-Lead form in Salesforce

This was a straight forward step to implement since I had the form already designed. In the Salesforce dashboard, navigate to the top right gear icon and a dropdown will show up with a link to go to the `Setup`. Once you are there, type in the `Quick Search` tab on the top left `Web-to-Lead` and the link will pop up to that page. From there, you will be on the `Web-to-Lead` setup page where you can create the form.

#### Extra Step:

Before creating the form, I noticed that I had to add in the new fields that were given in the instructions. These were the names of the bicycles that are being advertised on the landing page. This extra step required me to go into the `Setup` page and navigate to the `Object Manager` tab. From there look for the `Lead` standard object and press on the link. You will then see the `Fields & Relationships` tab on the left and that will allow you to add new fields to the object.

After adding in the new fields for the bike names, I made the Web-to-Lead form with the appropiate fields. The setup wizard will then generate a generic HTML form with the fields you selected as well as a unique link like this:

```"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST"```

Just by looking at the link above that the auto-generated form provided, I knew that this link was the key to connecting the form to the Salesforce. Since I already had a form created and styled before doing all of this, I used the information that was given from creating the Web-to-Lead form and added it to my own form by replacing some key values of each input field (div classes and ids). 

The final step was to test the form by inputting some information and to check if a new lead is generated with the form information.


### 2. Analytics must be included on the page & be tracked in Salesforce

For this requirement I decided to use the example that was presented which was tracking UTM parameters. This step required me to add in the UTM fields into the `Leads` object and to recreate the Web-to-Lead form. If you go inside the `src/pages/Index.vue` code, there is a Vue component on the very bottom that interacts with the UTM parameters. This component strips the values of each UTM parameter (UTM Content, UTM Medium, etc) from the URL and routes it into the template. Once you submit the form and a new lead is generated, you will see in Salesforce that the new lead will have the UTM parameter values in the details of the new lead.

### 3. Campaign to track the landing page in Salesforce (I am not sure if I did this right)

I created a new campaign in the `Campaign` tab and named it `City Cycles`. I then created another campaign called `2020 E-Bike Sale` and made `City Cycles` the parent campaign.

### 4. Custom Object for the products offered and associated Custom Fields and Page Layouts

On the `Setup` page, navigate to the `Object Manager` tab and from there create a new `Custom Object`. I was initially going to make a `Products` object but I noticed that it was already a Standard Object in Salesforce. I wanted this to be as unique as possible so I decided to name the Custom Object as `Bikes`. Within tha object I made `Custom Fields` called `Bike Name`, `Price`, and `SKU`. I then navigated back to the Home dashboard and added the Bikes object as a new tab. From there I added the name of each bike and its details into the object. At this point, I noticed that the `Page Layout` was already generated and was not sure If I needed to do anything else. 

### 5. Use Apex or workflow rules to trigger an email to the lead upon successful completion

This was probably the most confusing part of the task. When I was researching how to do workflow rules and triggers in Salesforce, all the guides that I followed said to navigate to a `Triggers` tab or `Create Workflow Rule` tab. However, I noticed that I did not have those tabs even though I followed their instructions. My assumption is that since I am on a free trial for Salesforce, I might not have access to all of its features. With that being said, I did find an alternative called `Email Alerts` in `Process Automation` -> `Workflow Actions` where I was able to set up an automated email that will be sent to leads once they submit the form. 


## Challenges

<ul>
  <li>Learning the Salesforce platform</li>
  <li>Understanding Salesforce naming conventions</li>
</ul>

## Improvements

<ul>
  <li>Making a better form validation that captures all possible business use cases</li>
  <li>Make the landing page with added security to prevent form injections</li>
</ul>

## Conclusion

This was a fun a task for me to work on that showcases what I can do on the design side of web development. It also shows my ability to learn and research how to use the Salesforce platform by completing most of the requirements needed for this task.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=flat-square
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=flat-square
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=flat-square
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=flat-square
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=flat-square
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
[product-screenshot]: images/screenshot.png
