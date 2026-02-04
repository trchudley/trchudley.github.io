---
layout: single
classes: wide
title: "Research"
permalink: /research/
author_profile: true
header:
  overlay_filter: "0.3"
  overlay_image: /assets/images/header/header_camp.jpg

gallery:
  - url: 
    image_path: /assets/images/research/crev1.jpg
    alt: "A water-filled crevasse"
    title: "Crevasse 1"
  - url: 
    image_path: /assets/images/research/crev2.jpg
    alt: "Crevasses, from a UAV"
    title: "Crevasse 2"
  
feature_row_1:
  - image_path: /assets/images/research/square-uav.png
    alt: "UAV launch on an ice sheet"
    title: "UAVs and Photogrammetry"
    excerpt: "Producing accurate georeferenced models from UAV photogrammetry is difficult in glaciological applications, where implementing ground control can be hazardous. In order to aid our work at Store Glacier in Greenland, I developed a low-cost, custom built unmanned system that utilised on-board GPS post-processing in order to produce accurate glacier velocity fields even on an inland ice sheet.
    <br />
    <br />
    [_Cryosphere_ paper](https://doi.org/10.1038/s41467-023-37764-7f){: .btn .btn--primary .btn--large}
    "

feature_row_2:
  - image_path: /assets/images/research/square-ponding.jpg
    alt: "Ponded crevasses, from UAV"
    title: "Controls on crevasse ponding"
    excerpt: "Surface crevasses transfer nearly half of all of Greenland's meltwater to the bed, yet is poorly understood. Using large-scale satellite analysis, I found that ponded crevasses exist in regions of compressive surface stress which restrict drainage into the wider surface hydrological system. Differing drainage processes in controlled by stress regimes may have distinct consequences for subglacial drainage and the heating of the ice sheet due to energy release during meltwater refreezing.
    <br />
    <br />
    [_JGR: Earth Surface_ paper](https://doi.org/10.1029/2021JF006287){: .btn .btn--primary .btn--large}
    "

feature_row_3:
  - image_path: /assets/images/research/square-drainage.jpg
    alt: "Lake drainage from UAV"
    title: "Lake drainage at a fast-flowing glacier"
    excerpt: "Supraglacial lake drainage is a critical component of Greenland's hydrological system, but all prior research occurred at slow-flowing, land-terminating glaciers. I used novel geophysical methods - including UAVs, GNSS, and seismometers - to examine the causes and consequences of a drainage at a fast-flowing outlet where ice moves >600 metres a year, finding unique processes occurring in this dynamic context.
    <br />
    <br />
    [_PNAS_ paper](https://doi.org/10.1073/pnas.1913685116){: .btn .btn--primary .btn--large}
    [Press Release](https://www.cam.ac.uk/stories/greenlandicesheet){: .btn .btn--info .btn--large}
    "

feature_row_4:
  - image_path: /assets/images/research/square-retreat.gif
    alt: "Animation of glacier retreat in satellite imagery"
    title: "Rapid changes forced by ocean warming"
    excerpt: "From 2018-2021, K.I.V Steenstrups Nordre Bræ in Southeast Greenland retreated ~7 km, thinned ~20%, doubled in discharge, and accelerated ~300% -- a rate of change unprecedented amongst Greenland’s glaciers. The glacier responded to a >2 °C anomaly in ocean temperatures, highlighting that even glaciers thought to be stable are vulnerable to sudden and rapid retreat from ocean forcing.
    <br />
    <br />
    [_Nature Communications_ paper](https://doi.org/10.1038/s41467-023-37764-7){: .btn .btn--primary .btn--large}
    [Press Release](https://news.osu.edu/a-once-stable-glacier-in-greenland-is-now-rapidly-disappearing){: .btn .btn--info .btn--large}
    "


---

__I am a glaciologist interested in using satellite remote sensing, fieldwork, and numerical modelling to investigate hydrology-dynamic and ice-ocean interactions in glaciers and ice sheets.__

Ice discharge into the ocean (i.e. iceberg calving) is a key contributor to sea level rise, making up approximately half of sea level rise contribution from the Greenland Ice Sheet and representing a major future concern in the Antarctic Ice Sheet. Discharge can be accelerated or suppressed by the influence of surface meltwater as it drains through the ice sheet, as well as the thermal forcing from the ocean. However, our observations of - and our ability to model - the interactions between these processes remain limited, leading to significant uncertainty in projections of future ice‑sheet change. Reducing this uncertainty is essential when considering considering the enormous societal investment required to mitigate the effects of sea level rise on communities living in affected low-lying coastal regions, which may affect more than 10% of the global population by the end of the 21st century.
 
Some of my specific research interests include the following:

 - Developing ‘big data’ Earth‑observation methods, including deep‑learning approaches for large‑scale, automated analysis.
 - Understanding the coupling between ice fracture (i.e. crevasses), meltwater pathways, and ice dynamics.
 - Building open‑source tools that make glaciological methods more accessible and scalable.
 - Investigating the drivers of outlet‑glacier sensitivity to ocean forcing.
 - Using high‑resolution digital elevation models (DEMs) to monitor changes in ice‑sheet geometry and surface processes.
 - Integrating observations and theory to develop practical parameterisations of glacier hydrology within large‑scale ice‑sheet models.

By monitoring how glacier and ice‑sheet dynamics are evolving - and uncovering the processes driving those changes - I aim to improve our understanding of how these systems will respond to future climate forcing through the 21st century and beyond.

# Research Projects

## How do crevasses transfer water to the bed of ice sheets?

__2023-2026 \| Leverhulme Trust__

{% include gallery %}

My Leverhulme early career research fellowship aims to assess the influence of crevasse hydrology on the dynamics of the Greenland Ice Sheet (GrIS). Half of all meltwater is delivered to the bed of the GrIS via crevasses, and we are increasingly aware that crevasses can deliver water to the ice sheet in diverse ways, from slow and inefficient drainage via fracture networks through to discrete rapid drainage events. However, due to a paucity of observations on where, why, and how crevasses drain, these important processes have yet to be parameterised in ice sheet models, and the vast majority of hydrological models neglect to include crevasses at all.

![image-center](/assets/images/research/crevcompare.png){: .align-center width="700px"}


Knowing where crevasses drain begins by knowing where crevasses _are_. I have developed a new workflow that takes advantage of high-resolution digital elevation models (DEMs) to generate large-scale, multitemporal 3D observations of crevasse geometry (image above). Using this technique, we have mapped crevasses across the whole of the Greenland Ice Sheet, showing for the first time how crevasses are evolving as the ice sheet accelerates in response to climate change ([Chudley _et al._, 2025, _Nat. Geosci._](https://doi.org/10.1038/s41561-024-01636-6)). Alongside this project, I have released [public Python tools](https://pdemtools.readthedocs.io/) for management of ArcticDEM and Reference Elevation Model of Antarctica (REMA) data, making large-scale DEM analysis more accessible for glaciologists and other polar scientists ([Chudley and Howat, 2024, _Journal of Open Source Software_](https://doi.org/10.21105/joss.07149)).

![image-center](/assets/images/research/crevdetect.png){: .align-center width="600px"}

I am using deep learning approaches detect water-filled crevasses that are otherwise challenging to detect in medium-resolution Sentinel-2 imagery. This allows for temporally deep time stacks of crevasse drainage behaviour to be automatically extracted at regional scales. With these datasets, alongside public datasets of climate and ice dynamics, I am exploring the dynamic controls on crevasse hydrological behaviour. These controls will be parameterised within coupled models of ice sheet hydrology-dynamics in order to quantify the influence of crevasse hydrology on the future of the Greenland Ice Sheet.

# Research Highlights

Some of previous research highlights are summarised below.

{% include feature_row id="feature_row_4" type="left" %}

{% include feature_row id="feature_row_3" type="left" %}

{% include feature_row id="feature_row_2" type="left" %}

{% include feature_row id="feature_row_1" type="left" %}


<!-- 

# Research Highlights

## Rapid changes forced by ocean warming

![image-right](/assets/images/research/square-retreat.gif){: .align-right width="300px"}

Understanding the exact causes of glacier retreat is critical in order to properly project how the ice sheet will continue to change throughout the 21st century. During my postdocoral work at Ohio State University, I examined K.I.V Steenstrups Nordre Bræ (‘Steenstrups’) in Southeast Greenland, which, between 2018 and 2021, retreated ~7 km, thinned ~20%, doubled in discharge, and accelerated ~300%. This rate of change is unprecedented amongst Greenland’s glaciers and now places Steenstrups in the top 10% of glaciers by contribution to ice-sheet-wide discharge. Steenstrups appeared to retreat in response to a >2 °C anomaly in ocean-derived Atlantic water (AW), highlighting that even long-term stable glaciers with high sills are vulnerable to sudden and rapid retreat from warm AW intrusion.

See [our paper in _Nature Communications_](https://doi.org/10.1038/s41467-023-37764-7), and [associated press release](https://news.osu.edu/a-once-stable-glacier-in-greenland-is-now-rapidly-disappearing/).

## Lake drainage at a fast-flowing glacier

![image-right](/assets/images/research/square-drainage.jpg){: .align-right width="300px"}

Supraglacial lake drainage is a critical component of Greenland's hydrological system, but all prior research examined drainages at slow-flowing, land-terminating glaciers. I used novel geophysical methods - including UAVs, GNSS, and seismometers - to examine the causes and consequences of a drainage at a fast-flowing Greenlandic outlet where ice moves in excess of 600 metres a year, finding unique processes occurring in this dynamic context.

See our [paper in _PNAS_](https://doi.org/10.1073/pnas.1913685116), and [associated press release](https://www.cam.ac.uk/stories/greenlandicesheet).

## Controls on crevasse ponding

![image-right](/assets/images/research/square-ponding.jpg){: .align-right width="300px"}

Surface crevasses transfer nearly half of all of Greenland's meltwater to the bed, yet when, where, and how this occurs is poorly understood. I used large-scale satellite analysis to assess the spatial variability of meltwater ponding across a fast-flowing sector of the Greenland Ice Sheet. Unlike supraglacial lakes, ponding cannot by explained by water collecting in surface basins. Instead, we find that ponded crevasses exist in regions of compressive surface stress, which closes pathways that elsewhere allow crevasses to drain into the wider surface hydrological system. Differing drainage processes in regions of compressive and extensional regimes may have distinct consequences for subglacial drainage and the heating of the ice sheet due to energy release during meltwater refreezing.

See [our paper in _JGR: Earth Surface_](https://doi.org/10.1029/2021JF006287).

## UAVs and Photogrammetry

![image-right](/assets/images/research/square-uav.png){: .align-right width="300px"}

Producing accurate georeferenced models from UAV photogrammetry is difficult in glaciological applications, where implementing ground control can be hazardous. In order to aid our work at Store Glacier in Greenland, I developed a low-cost, custom built unmanned system that utilised on-board GPS post-processing in order to produce accurate glacier velocity fields even on an inland ice sheet.

See [our paper in _the Cryosphere_](https://doi.org/10.5194/tc-13-955-2019).

-->