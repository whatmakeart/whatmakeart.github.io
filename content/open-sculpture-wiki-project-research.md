---
title: Open Sculpture Wiki Project
---

## Project Introduction

This is a conceptual work in progress exploring better ways to exchange information, concepts and skills about artistic making with students, artists and the public. The primary audience are enrolled students in Sculpture courses but limiting the resource to this audience would stifle growth, creativity and innovation. Therefore the goal is the engage and collaborate with the world.

### Goals

- Easily accessible sculpture making information online
- Improve the education of sculpture students
- remove friction such as passwords and logins to access information
- continually update and improve sculpture information

## Public vs Private vs Hybrid?

Tech Wikis https://github.com/MicrosoftDocs/azure-docs https://docs.github.com/en/communities/documenting-your-project-with-wikis https://docs.gitlab.com/ee/user/project/pages/

### Examples of Coursework and Research Publicly Accessible

https://stanford-cs161.github.io/

https://ratfactor.com/hugo-adoc-html5s - personal wiki

Interaction Station Wiki on Wikimedia https://interactionstation.wdka.hro.nl/wiki/Main_Page

https://utilitarianism.net/ - Made by Professor at University of Oxford as an online textbook

http://dfabclass.com/20/

https://wiki.mcneel.com/people/rhino5cir

[u.osu.edu](https://u.osu.edu/) - Ohio State uses a multi site Wordpress installation to have quite flexible, public, online course materials

[Kevin Karplus - University of California Santa Cruz - School Site](https://users.soe.ucsc.edu/~karplus/bme88a/) - Basic but richly informative UCSC hosted website with all his course materials and archives of since delete University Department resources

[Kevin Karplus - Wordpress Site - Freshman Design](https://gasstationwithoutpumps.wordpress.com/freshman-design-table-of-contents/) - In addition to the resources hosted on the university servers, Kevin also has a Wordpress site with lots of course content

[Kevin Karplus Youtube Page](https://www.youtube.com/c/gasstationwithoutpumps/videos) - support videos for his courses

#### University of Washington Computer Science Courses

These "open" course pages have been available for years and are a model of what I think should be done at a minimum. An LMS such as Canvas or Blackboard could be used to make course content public but then why not just publish the material on the web so it is more likely to be longer lasting [University of Washington Computer Science Course CSE 458](https://courses.cs.washington.edu/courses/cse458/) [University of Washington Computer Science Course CSE 490](https://courses.cs.washington.edu/courses/cse490t/15sp/)

[Lansing Community College Teacher, Chad Bennett - Obsidian Site and Course Resources](https://mister-chad.com/welcome) - Has public personal notes as well as public resources for courses he teaches

[Data Engineering Community Wiki](https://github.com/data-engineering-community/data-engineering-wiki)

[Shawn Graham's Open Digital Humanities Notebook 2016-17](http://smgprojects.github.io/)

[Open Research of history professor at Rice University](http://wiki.wcaleb.rice.edu/)

[Digital Gardening at IUPUI](https://www.iue.edu/blogs/library/2021/11/08/digital-gardening-a-new-way-to-think-about-digital-literacy/)

[Professor Keely's Math Notebook](https://www.integreat.ca/OL/index.html)

[Massive Wiki](https://massive.wiki/) - Groups of wikis put together

### Public?

Ideally the wiki will be 100% publicly accessible. The goal is to build knowledge that is usefull for students and artists and then to share that information with the world. By sharing the information more eyes will see it increasing the change of interaction, collaboration and critique, which will improve the collection of knowledge.

### Private?

A private wiki will likely atrophy and die. This is the least ideal option and is not being considered.

### Hybrid?

A hybrid approch to public and private information would make just about everything on the wiki publicly accessible but some links may go to private school resources. This isn't much different that what would happen with the public model.

A true hybrid approach would have an authentication system so some information was only viewable to certain users. This will add uneeded friction and complexity

## Single Editor or multiple

### Single Editor

If only a single editor has control then it is more of a public digital garden. Changes could be suggested by users or students but would be committed by a single author. This is likely the best way to start the wiki, although it is not really a wiki unless there are multiple contributors.

### Multiple Editors

If there are multiple editors there likely needs to be an approval process of edits, although this could be combersome. Ideally if the wiki grows to have enough valuable resources then the more people that contribute the better. This is a long term goal of the project.

There could be a handful of approved editors that are able to make changes. Ifthere are mulitple editors, it limits the backend software to those that can verify credentials and have user accounts.

[Markdown Editors](https://www.oberlo.com/blog/markdown-editors)

https://www.11ty.dev/

## Future Proofing and Avoiding Sofware Lock-In

### Flat Files vs Database

So far everything in this project is written in simple markdown files. These are realatively human deciferable text files that can easily be converted into static HTML documents and viewed on the web.

The benefit of using multiple markdown files is that computers should be able to read them forever and it is possible to switch to other platforms. The downside of using markdown is it is not WYSIWYG so if there are multiple editors then the editors must learn markdown. [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki)and [Wiki.js](https://js.wiki/) solve this problem by having visual editors for users that do not know markdown.

Both of these use a database to keep track of the content and the media. That is not a problem but it does add complexity to the project and requires a server to host the files. [Docuwiki](https://www.dokuwiki.org/dokuwiki)is an option that uses flat files but it also requries a hosting server because it is put together with PHP.

## Choosing a Platform

The main choice is between a Static Site Generator like [Jekyll](https://jekyllrb.com/) or [Hugo](https://gohugo.io/) and an actual [wiki software](https://www.wikimatrix.org/).

The platform should be easy to edit on mobile and desktop. It should be designed mobile first and accessible. Needs to be able to support lots of embeded images, videos and sounds. Needs wikilinks and backlinks. Needs to be easily skinnable and customizalbe. It must use open formats for all data storage so mirgration to different hosting and or platforms in the future is possible.

### Potential Platforms

[Wiki.js](https://js.wiki/) [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) [Docuwiki](https://www.dokuwiki.org/dokuwiki)

[Wiki Matrix](https://www.wikimatrix.org/) This site compares the features of different wiki software

https://github.com/jobindjohn/obsidian-publish-mkdocs

## Additional Resources

### Wiki Organization Tips

[Strategies for Wiki Organization](https://tychoish.com/post/strategies-for-organizing-wiki-content/)

[My workflow in writing and maintaining this wiki | Everything I know](https://wiki.nikiv.dev/other/wiki-workflow)

[Personal Knowledge Management (PKM) | Organize Your Work and Life - Taskade Blog](https://www.taskade.com/blog/personal-knowledge-management-pkm-guide/)

[Jason Heppler's Notebook](http://notebook.jasonheppler.org/)

### Public Zettelkastens

[Reddit Thread about Public Zettelkastens](https://www.reddit.com/r/Zettelkasten/comments/um9w9e/public_zettelkastens/?utm_medium=android_app&utm_source=share)

### Copyright in Online Teaching

[Penn State Online Copyright Guide](https://guides.library.upenn.edu/copyright/onlinecourses)

[TEACH Act Checklist from University of Texas](https://guides.lib.utexas.edu/copyright/teachactchecklist)

#### Intelectual Property

[Online Course Ownership - Article in Time](https://nation.time.com/2014/03/01/online-courses-moocs-ownership/)
