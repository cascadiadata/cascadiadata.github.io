---
layout: project
name: Surrey Transportation Project
description: DSSG team at UBC partnered with the Surrey Transportation Department, creating data visualization tools to analyze bus route performance and demographics
date: 2017-08-30
facilities: [UBC]
categories: [DSSG]
thumbnail: /images/projects/thumbnails/Surrey-Transportation-Project.png
participants:
  - Saeid Allahdadian
  - Lap-Tak
  - Mina Park
  - William Qi
  - Don Buchanan
---

# Surrey Transportation Project Creates Data Visualizations of Bus Networks and Demographic Data

![Surrey Transit Presentation](/images/projects/surrey_transit2.jpg)

A team of graduate and undergraduate fellows at the University of British Columbia (UBC) has created a suite of data visualization tools to analyze bus route performance and demographics in Vancouver, Canada, with a focus on the City of Surrey.

Saeid Allahdadian, Lap-Tak Chu, Mina Park and William Qi worked with Surrey Transportation Planner Don Buchanan as their project lead to build an interactive public map of demographic and bus data, generate graphs to characterize and model bus networks, and analyze social media data to assess route volume and customer opinions. The data visualizations showing bus frequency and connectivity can be used to inform route planning and transit expansion in the region. The final report, [Exploiting Open Data for Public Transportation Analysis](https://dsi.ubc.ca/sites/dsi.ubc.ca/files/dssg_final_report_open_transit.pdf), details the data cleaning and analysis processes used.

The collaboration was one of four projects completed through the [Data Science for Social Good](https://dsi.ubc.ca/data-science-social-good) (DSSG) summer program launched this year at UBC's Data Science Institute. The program complements the DSSG program run by the [University of Washington’s eScience Institute](http://escience.washington.edu/dssg/). The Surrey Transportation Project was featured with the UW Cruising Traffic Analysis Project in a [Microsoft blog post](https://news.microsoft.com/features/students-create-something-really-incredible-broader-aim-help-two-cross-border-cities-thrive-together/).

Surrey, the fastest growing municipality in metropolitan Vancouver and the second largest city in British Columbia, has six town centers and a mix of urban, rural, residential, commercial and agricultural zones. The city has more than 50 bus routes serving more than 100,000 passengers, with transit expansion underway. Data sources included the [TransLink Open API](https://developer.translink.ca/), which incorporates transit and scheduling data provided through the [General Transit Feed Specification](https://developers.google.com/transit/gtfs/reference/) (GTFS), a standard used by transit agencies to feed data to Google’s trip planning applications and other systems; and data collected from entrance and exit doors by Automated Passenger Counters from the Surrey Engineering Department.

The [City of Surrey Transit Dashboard](http://williamqi.com/surreytransportation/) that the team created is a multi-layered data visualization tool showing bus usage overlaid with demographic, zoning and employment data from Census Canada and the City of Surrey. The tool was built using Javascript and Webpack. Users can click on individual bus stops or routes to view fine-grained statistics on service and utilization. Hovering over a region shows a pop-up of for each census tract or town center. The map makes open data accessible to the public to explore. The team also took steps to enable researchers to reuse and modify their work. Each map layer is built as a separate module, which allows layers to be added without modifying the code. The data module is built with plug and play computability, allowing GTFS data from any region to be used. There are plans to release the code openly via Github.

In addition to creating the map, the team used Python and NetworkX to build a graph model for conducting network analysis of the Surrey bus system based on weekday schedules. The model uses stops and routes to show degrees of connectivity and centrality, and average clustering coefficient, which represents the ease of moving within a network. The model enables mathematical computation and comparisons to benchmark networks and sub-networks against each other. Computational methods for measuring connectivity and complexity in bus network graphs used a modified version of those outlined by the UBC Department of Civil Engineering in a [2014 paper](http://www.nrcresearchpress.com/doi/abs/10.1139/cjce-2014-0054). Based on the graphs created, the fellows found that Cloverdale, which is surrounded by agricultural land, is the town center with the smallest number of bus routes and the lowest degrees of connectivity and complexity, while City Centre and Whalley showed the highest connectivity.

![Surrey Transit Visualization](/images/projects/ubc_transit.jpg)

Expanding on the graphs, a Bayesian model was used to analyze bus routes in the Frequent Transit Network (FTN), which run every 15 minutes from morning until night. The goal was to quantify differences in transit performance and service utilization between FTN and other routes; and to compare the eight FTN routes in Surrey with other areas in Vancouver. Data for selected routes was manually extracted using Tabula from Translink’s Transit Service Performance Review, which included annual service cost and peak passenger load for 2011-2015. The data was cleaned using Pandas in Python and analyzed in R. The data showed that FTN routes in Surrey had significantly lower employment density than those in the rest of Vancouver, despite having a similar population density. This may indicate opportunities for economic development along Surrey's FTN corridors. FTN routes in Surrey had fewer passenger boardings, higher costs per passenger and a better on-time performance, with an average speed of 30.07 versus 19.74 kilometers per hour. The team observed that routes with low utilization play an important role in connecting Surrey to other municipalities.

To model low-cost methods for assessing commuter transit patterns, travel time and customer opinions, the team utilized the Twitter API, analyzing data over three weeks in July and August 2017. This consisted of 30,000 geotagged public Tweets representing 3,440 people in Vancouver, and 4,800 Tweets directed towards @Translink, with stop IDs and route numbers extracted through filters. While only a subset of the population was represented, the team recommends this method for showing relative demand on routes throughout the day and highlighting problems in real-time. Combining the data with historical Tweets, they created a map to estimate traffic volume. Through a clustering method, combined with transit times from Google Maps, the team observed that residents of Langley Township appear to have greater intra-regional transit than surrounding areas. Finally, they recommended three areas for improved connectivity: between Surrey and Langley, between Coquitlam/ Port Coquitlam and Surrey/ Langley, and the Newtown area within Surrey and New Westminster.