---
layout: post
title:  University of British Columbia DSSG Midterm Event
date:   2018-07-30 1:57:12
image:  /images/news/ubc_midterms.jpg
excerpt:
  
  The Data Science for Social Good summer project teams at the University of British Columbia presented midterm project reports
author: Kevin Lin
tags:
  - Data Science for Social Good
  
---
On July 16, 2018, the UBC Data Science for Social Good (DSSG) project teams [presented work-in-progress reports](https://dsi.ubc.ca/news/dssg-2018-midterm-event) to an invited audience. In attendance were project sponsors and representatives from the City of Surrey and the BC Centre for Disease Control (BCCDC), as well as industry mentors from Microsoft Vancouver and guests such as Louie Dinh of [Quantitative Rhetoric](http://quantitativerhetoric.com/), Jens von Bergmann of [Mountain Doodles](https://doodles.mountainmath.ca/) and DSSG alumni from 2017.

This year, the [UBC DSSG program](https://dsi.ubc.ca/data-science-social-good) partnered with Surrey on three projects and with the BCCDC on another. The four projects are: 1) Improving Early and Middle Childhood Outcomes; 2) Exploring the Landscape of Rental Units in Surrey; 3) Transportation Energy & Emissions Modelling; and 4) Use of Machine Learning Techniques to Classify Laboratory Test Results.

The program started in late May with two weeks of team-bonding activities and workshops. After this, the project teams immersed themselves by performing literature reviews and meetings with their project leads to discuss project scope and goals. Concurrently, the fellows were busy preparing—compiling, cleaning and integrating—data sets of relevance to their projects. Unlike last year, this year’s projects include both public data (e.g., census) and private, de-identified data provided by the project sponsors. Some examples include vehicle registration data from ICBC, CLASS dataset from Surrey and laboratory test results at the BCCDC.

While much of the work accomplished over the last six weeks are preliminary in nature, some of the early analyses that were presented were impressive and stimulated engaging discussions amongst participants:

1. The BCCDC team (Joy Chen, Kenny Chiu, William Lu, Nilgoon Zarei) used ensemble machine learning and natural language processing (NLP) techniques to create a classifier to label a set of training data (>800k entries) with +95% test accuracy. Over the next 6 weeks, the team will focus on error analysis, expanding the ensemble to do multi-class classifications and deal with some of the data imbalances in the training set to limit any potential bias towards the majority classes in the models.
 
2. The Childhood Development team (Cody Griffith, Catherine Lin, Varoon Mathur, Kevin Zhu) examined similarities between Surrey neighbourhoods using Early Development Instrument (EDI) scores, which is a measurement of vulnerability of children assessed using five categories. They performed cluster analysis of the EDI scores using a variety of techniques and found that t-SNE (t-distributed Stochastic Neighbour Embedding) generated three meaningful clusters: low vulnerability, medium vulnerability and high vulnerability neighbourhoods. The team will now examine what makes these clusters unique and change over time by incorporating green space analysis, childhood programming and social demographic variables from census data.
 
3. The Rental Housing project (Andy Fink, Zhe Jiang, Jocelyn Lee, Hyeongcheol Park) built a pipeline to collect rental posting ads from online sources into a database. Using this data, and matched against known rental housing data provided by Surrey, the team was able to visualize the spatial distribution of the rental stock. The team is now working on refining their technique to be better at removing duplicates and identifying unique postings by leveraging NLP. If that goes well, the team also aims to build a predictive model to estimate the number of unreported secondary suites for each neighbourhood.
 
4. The Sustainable Transportation team (Nimrah Anwar, Andy Hong, Mia Kramer, Kevin Wong) are working with the ICBC (Insurance Corporation of BC) data set and presented some descriptive statistics and distribution visualizations of vehicles registered in Surrey. The team will further analyze this data and classifying vehicles (by weight, class, emission) to prepare the data for use in an interactive tool they are building for policy makers in the Sustainability Department in Surrey.

It was exciting to see what our fellows have accomplished in such a short time and we are very optimistic that the fellows will deliver findings that will provide new insight and/or tools to our project sponsors. The teams are also being mindful to document their work clearly such that the findings can be reproduced and the tools be used by others following in their steps.

