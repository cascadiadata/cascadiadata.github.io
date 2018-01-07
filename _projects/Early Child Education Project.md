---
layout: project
name: Early Child Education Project
description: UBC students partnered with United Way - Avenues of Change to facilitate a data-driven approach to improving child readiness to enter Grade 1 in Guildford West, B.C.
date: 2017-09-15
facilities: [UBC]
categories: [DSSG]
thumbnail: /images/projects/thumbnails/Early-Childhood-Education-Project.png
participants:
  - Patricia Angkiriwang
  - Elba Gomez Navas Acevedo
  - Patrick Laflamme
  - Shenyi Pan
  - Stacey Rennie
---

# Partnership Enhances Data-Driven Approach to Early Childhood Education

![Surrey education presentation](/images/projects/surrey_education2.jpg)

A program to improve child readiness to enter Grade 1 in the Guildford West neighborhood of Surrey, British Columbia, has partnered with students at the University of British Columbia to adopt a more data-driven approach to its work.

This summer, student fellows with expertise in biophysics, economics, international relations, psychology and statistics collaborated with the United Way and the City of Surrey on a summer program supporting the [Avenues of Change](https://www.uwlm.ca/what-we-do/all-that-kids-can-be/aves-of-change/) (AoC) initiative. Patricia Angkiriwang, Elba Gomez Navas Acevedo, Patrick Laflamme and Shenyi Pan, led by Stacey Rennie at the City of Surrey, provided data analysis, visualizations and recommendations to strengthen data collection on childhood development to support long-term improvements.

The collaboration was one of four projects completed through the [Data Science for Social Good](https://dsi.ubc.ca/data-science-social-good) (DSSG) summer program launched this year at the University of British Columbia’s Data Science Institute with assistance from CUAC. The program complements the [DSSG program](http://escience.washington.edu/dssg/) run by the University of Washington’s eScience Institute.

Guildford West, one of 24 neighborhoods in Surrey, was selected for the pilot program due to its prevalence of early childhood education services and the highest neighborhood rate of childhood vulnerability in 2015, according to the Early Development Indicator (EDI). This population-level metric, developed at McMaster University, aggregates teacher assessments of kindergarten students in response to 104 questions about communication, social and language skills, physical ability and emotional regulation. The EDI, first collected in 2004, is considered a strong predictor of health, education and social outcomes of adolescents and adults.

Though currently used as the primary metric to determine success of the AoC initiative, the fellows found that EDI alone is not sufficient for overall program evaluation. For example, EDI is not significantly correlated with library card creation (per capita), which rose since the program began, or with community program registration or service requests. This indicates that EDI may not capture all AoC-driven improvements.

To create a more complete picture, the team integrated City-level data, including school satisfaction surveys and residential turnover data, as well as meeting minutes and interviews with service agencies. The final report, [A Data-Driven Approach to Early Childhood Initiatives](https://dsi.ubc.ca/data-science-social-good-final-reports-2017), details the data and methods used, which included linear regression and logistic regression models to predict EDI based on various variables, and linear interpolation to estimate annual population from neighborhood Census data collected every five years.

![Surrey Education Graphic](/images/projects/surrey_education.jpg)

(The figure above, from the team's final report, shows a network graph representing the relationships between early childhood-related working groups and task forces in Surrey. Each blue node represents an agency.)

As many of the datasets required extensive cleaning, organization, and manipulation, the team created a website dashboard with user-friendly sliders and drop-down menus to enable easy access to query cleaned data from disparate sources. Granular information, such as variations in the different types of vulnerability assessed, provide a detailed view beneath the overall EDI scores that represent only the number of children who are considered vulnerable in one or more categories. In this view, Guildford West showed a high vulnerability in language skills but was within the regional norm for emotional vulnerability.

In their examination of potential indicators to further evaluate AoC success, the team discovered multiple correlations. They determined that a correlation between population density and EDI, when prior research was incorporated, was likely attributed to a negative correlation between Social Economic Status and EDI. Guildford West has a high concentration of young children, according to the dashboard. The team also found that while the AoC identifies safety as a key pathway to long-term success, research showed that crime data was not a meaningful predictor of EDI.

The team conducted a social network analysis of early childhood agencies, created the first graphical analysis of AoC network connectivity, and introduced an analytical tool that suggests connections between organizations and the City to improve the flow of information within the network. The relationships between AoC-connected organizations, compared with those across Surrey, are portrayed through data visualization without disclosing agency names. The team also examined redundancies in organizational memberships. This information could help to inform an upcoming restructuring of the AoC network.

Based on their work, the Early Child Education Project team made the following recommendations for improved data collection to support future analysis:

* Establish an email survey to assess connections between collaborating agencies to enable visualizations.
* Track attendance and demographics for events and workshops.
* Conduct a regular collection initiative to increase the frequency of parent questionnaires to provide immediate indicators about what is working.
* Work with Surrey libraries to collect circulation data showing frequency and type of use (recreational or educational) following library account creations. 
* To provide a comprehensive assessment of AoC success, choose additional performance indicators besides EDI and establish the infrastructure to collect the relevant data.
* Utilize open source health databases from Fraser Health to look for potential correlation with EDI and to follow up on an AoC goal to support health of mothers and children.
* Incorporate data from the Surrey Open Data Catalogue on outdoor green space into the dashboard, through data cleaning and integration, to look for correlation with EDI and social capital.

The [AoC program](https://www.uwlm.ca/what-we-do/all-that-kids-can-be/aves-of-change/) was launched following recommendations by [IBM researchers](https://www.ibm.com/blogs/citizen-ibm/2015/10/hepner_surrey_childhood_dev/) in response to the Smarter Cities Challenge in 2012. The program, which began in 2013, is investing $5 million over five years in four neighborhoods in British Columbia. In addition to Guildford West, the program serves Coquitlam River, Strathcona and Richmond City Centre.