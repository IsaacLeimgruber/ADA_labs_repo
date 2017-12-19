# Evolution of the Swiss Energy Production. 
## Abstract
On this project we would like to see the evolution of the Swiss energy during roughly 100 years and determine the velocity of the energy transition. The goal is to understand how the energy consumption evolved during a set period and analyse whether the energetic transition is on its way or not. Another objective is to allow a lambda user to play with the data and display only the sources he is interested in. This easy informative tool shows straightforward insight into the Swiss energetic climate and its past evolutions. To achieve this project, we will use a dataset provided by Swiss Open Data called “Gross energy consumption: Share of primary energy carriers“ which contains everything that we need; Ratios and raw values of the energy consumption in Switzerland per source and for each year. 

## Research questions
- How did the energy production diversified over the years in Switzerland?
- Can we observe some changes in the sources in these 20 last years?
- How static is the energy production in Switzerland?

## Dataset
As said before we want to use the data set of [Swiss Open Data](https://opendata.swiss/fr/) called [Gross energy consumption: Share of primary energy carriers](https://opendata.swiss/en/dataset/bruttoenergieverbrauch-anteil-der-primarenergietrager).
In this set we have access to the shares of each energy source in Swiss and it’s in raw production from 1910 to 2014. For example, we know that in 1910 the wood and charcoal represented 16.27% of the total Swiss energy consumption and in 2014 in was only to 3.47%.

In addition to this data set we've also found on [opendata.swiss](https://opendata.swiss/fr/) information on: [The electrical production of Switzerland and its sources](https://opendata.swiss/fr/dataset/elektrizitatserzeugung-in-gwh), as well as [the nuclear production of the nuclear plants of the country](https://opendata.swiss/fr/dataset/kernkraftwerke-der-schweiz-elektrizitatserzeugung-und-arbeitsnutzung). Those additional information will help us see what amount of enregy and how it is produced in Switzerland which will help us build more precise analysis and visuals. 

See aditional data sources under the Final Milestone paragraph.

# Objectives for milestone 2
- We will sort and clean the data to keep only the information that we need. 
- We will create a function to easily filter the data to represent only certain sources or time-span.

Having done all of the above, we will expect for the final presentation what is written below this.


# Objective for milestone 3 and presentation
- We are considering doing a "data story" to visualise our results and are looking at the different ways of doing so. 
- We will combine all the sources of information described above and display them onto maps and interactive graphs. 

See below an abstract view of what the final result could look like. 

![alt text](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/graphimage.jpg?raw=true)

With interact such as: 
- Checkboxs to select energy source.
- Ability to commpare consumed energy and produced one (what amount of energy is imported).
- Add a line of reference/objective that Swtzerland or/and Europe has on energy. 
- Add of bullets to give detail on event that gave particular shift in the curves (opening of a power plant or historical event for example).
- Possibility to select a given year and to have visual decription (barplot or similar). 

# Final Milestone 

## Dataset update : 

After the previous milestone, we noticed that we didn't have enough data, we needed to consider more sources, [Swiss Open Data](https://opendata.swiss/fr/) resources were limited. 

We were missing gas, wood, petrol, solar, hydroelectric and other renewable type of energies. (We only had nuclear power...)

We considered data from the website of the Swiss confederation:  [admin.ch](https://opendata.swiss/fr/), on which we found a lot of report and especially ones on our subject of study. 

However many of those reports were PDFs and data needed to be extracted from them to be incorporated into our work. 

##### For hydraulic power : 

We used [this list of reports](http://www.bfe.admin.ch/themen/00490/00491/index.html?dossier_id=01049&lang=fr) to find the hydraulic plants of Switzerland. We had to select from this list over their dates and information. From there we found the average production per year and per canton, how many plants is there per canton as well as the detail of each of those plants. However as stated above, the report were PDFs so had to be converted to CSV before they could be cleaned and merged (all that process is done and explained in the [notebook](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Project_Final.ipynb)).  We've started by doing graphs separating by plant and by canton to see their evolution of production over time. But some cantons, like Argovie, have more then 30 plants while others like Appenzell Rh. int./ext. only have 5. We've discussed ways to better represent such differences and chose to select the 5 most significant plant per canton (the ones that had the highest production in 2017). We decided to save the graphs that represent the average annual GW/h per year and to compare only their winter to summer production difference in the [notebook](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Project_Final.ipynb).

The search for viable data continue and the next found was on wood. 

##### For wood: 

We used [this press report](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Project_Final.ipynb) coming from the Helvetic confederation. However data in the bulletin were graphs and had to be manually imported.

This was also the case for the other renewable sources: 

##### Other renewable sources: 

- [Wind Power](http://www.suisse-eole.ch/fr/energie-eolienne/statistiques/ )
- [Geothermal](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Data/pdf/Geothermiestatistik_Schweiz_Ausgabe_2016_RWGEO.2017.07.20.pdf)
- [Solar](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Data/pdf/SunRecensement_2016_def.pdff)

All sources and reports are from the confederation. 

Having gathered all these additional datas, we looked at other energies sources such as petrol, gas, coal as well as industrial waste. 

After some research we found that there are some well in Switzerland (mainly coal and gas) but that those are not used as energy sources for the general public. We therefore chose to show the consumption (in Tera Joules) of those sources in our visuals (using the first dataset that we've found, mentioned above).  

Finally we linked an image to each energy source as well as a text describing what the energy represent and how it is used. This meant some more research on which subject to give most detailed explanation, all of this work can be found in the "Create data" part of the [notebook](https://github.com/IsaacLeimgruber/ADA_labs_repo/blob/master/Project/Project_Final.ipynb).

## Website creation: 

Following the above description (done for milestone 3), we create an interactive website on which you can select each source of energy and have a extended description of it with pictures and text. This [template](https://rawgit.com/IsaacLeimgruber/ADA_labs_repo/master/Project/TestWebsite/template/index.html), was then incorporated using a [iframe](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe#Exemples) into a GitHub pages using [Jekyll](https://jekyllrb.com). We used GitHub as sourcing relying on [rawgit](http://rawgit.com)  to convert the files into browser interpretable ones. 

Please find below below a description of the pipeline used to get our data story online.

[This](https://github.com/IsaacLeimgruber/ADA_labs_repo/tree/master/Project/template) director stores the template of the website. [This one](https://github.com/IsaacLeimgruber/ADA_labs_repo/tree/master/Project/TestWebsite/template) is the browser interpretable version of the template, that we pass through [rawgit](http://rawgit.com) to give us [this](https://rawgit.com/IsaacLeimgruber/ADA_labs_repo/master/Project/TestWebsite/template/index.html) that we then incorporated as explained above. The final result can be seen under [this website](http://charlesthiebaut.github.io/jekyll/update/2017/12/13/ADA_Project.html).

## Work separation 

Kevin: data research, processing and visualising, Isaac: data processing and visualising, website creation, Charles: data research, website hosting, readme and data story writing. 

# Questions for TAs
Please Look at the Project_Final.ipynb (the Interaction.ipynb use Jupyter Widget and for now don't work on git).

We did some analysis on the data and we want to do something more visual too, but will it be accepted for the project?
