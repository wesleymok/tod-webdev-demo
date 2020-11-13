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
    <a href="https://wesleymok.github.io/tod-webdev-demo/">View Demo</a>
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
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



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
## Design Process

For this task, I was asked to redesign an example landing page (https://nicprkr.github.io/tod-demo.github.io/) where I am able to use any framework of choice.

For this particular task, I decided to use Gridsome to generate the static website and Tailwindcss to style everything.

### Reasons for using Gridsome:
<ul>
  <li>Easy to create a blank project with a proper file structure</li>
  <li>It has a hot reloading feature whenever changes are made to the code</li>
  <li>Easy to host on Github Pages</li>
</ul>

### Reasons for using Tailwindcss:
<ul>
  <li>Contains a lot of built in features</li>
  <li>Easy to use grid system</li>
  <li>Easier to maintain styles</li>
</ul>


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* []()
* []()
* []()





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
