---
layout: single
# classes: wide
toc: true
toc_sticky: true
toc_label: "Resources"
title: "Resources"
permalink: /resources/
author_profile: true
header:
  overlay_filter: "0.3"
  overlay_image: /assets/images/header/header_drainage_2.jpg
---

This page collects together selected software and data I have produced as part of my commitment to open science.

## Software 

### pDEMtools

![image-right](/assets/images/softwaredata/pdemtools-sample.jpg){: .align-right width="400px"}

[![Conda Forge](https://anaconda.org/conda-forge/pdemtools/badges/version.svg)](https://anaconda.org/conda-forge/pdemtools) [![Documentation Status](https://readthedocs.org/projects/pdemtools/badge/?version=latest)](https://pdemtools.readthedocs.io/en/latest/?badge=latest)  [![JOSS Paper](https://joss.theoj.org/papers/10.21105/joss.07149/status.svg)](https://doi.org/10.21105/joss.07149)

[pDEMtools](pdemtools.rtfd.io) is a Python package that provides a convenient set of functions to explore, download, and preprocess high-resolution Digital Elevation Models (DEMs) of the polar regions from the [ArcticDEM](https://www.pgc.umn.edu/data/arcticdem/) and [Reference Elevation Model of Antarctica](https://www.pgc.umn.edu/data/rema/) (REMA) datasets, courtesy of the Polar Geospatial Center. It allows for conveninent searching and downloading of DEMs, as well as preprocessing functions including coregistration, terrain attribute derivation (hillshade, slope, curvature, etc.), and iceberg detection.

It can be installed via `conda` or `mamba`:

```bash
conda install -c conda-forge pdemtools
```

A software paper [has been published](https://joss.theoj.org/papers/2a10e67d2709a6cfb672538b4a21726e) in the Journal of Open Source Software, documentation [is available online](pdemtools.rtfd.io), and the package is in active use by a number of research groups for data management and scientific analysis. I am happy to be contacted with any queries regarding its use.

### crevDEM

![image-right](/assets/images/softwaredata/crevdem-sample.jpg){: .align-right width="350px"}

[crevDEM](github.com/trchudley/crevdem) is a Python package for extracting crevasse location and volume from high-resolution Digital Elevation Models (DEMs) of glaciers and ice sheets. It is the software accompaniment to [Chudley et al. (2025, Nat. Geosci.)](https://doi.org/10.1038/s41561-024-01636-6).

The software and explanatory notebooks are [available on GitHub](github.com/trchudley/crevdem).

## Resources

### Guide to Geospatial Python for Glaciology

![image-right](/assets/images/softwaredata/geospatialpython.png){: .align-right width="250px"}

[This Jupyter Book](https://trchudley.github.io/geospatial-python-glaciology/) is designed to get beginners up and running with using Python for geospatial programming tasks. It is aimed at my colleagues, students, and collaborators within glaciology, but has found use with a broader audience.

### Greenland Ice Sheet Discharge Explorer

[This online widget](https://trchudley.github.io/greenland-discharge-explorer/) visualises the 'living dataset' of Greenland's ice charge hosted by GEUS ([Mankoff _et al._ 2020](https://dataverse.geus.dk/dataset.xhtml?persistentId=doi:10.22008/promice/data/ice_discharge/d/v02)). Users can view time-series datasets for the whole ice sheet as well as individual regions and sectors, as well as download CSV files for their own use.

## Data

### Greenland Crevasse Map

![image-right](/assets/images/softwaredata/crevassemap.png){: .align-right width="250px"}

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.6779088.svg)](https://doi.org/10.5281/zenodo.6779087)

This dataset expands the crevasse mapping technique outlined in [Chudley et al. (2021)](https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.1029%2F2021JF006287&sa=D) to the entire continent. It contains crevasse locations identified from the ArcticDEM v3 mosaic. There are two primary products: a 2 m binary crevasse map, and a 200 m crevasse fraction map. 

[It is available to download from Zenodo.](https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.5281%2Fzenodo.6779088&sa=D)

It has seen use as part of large-scale physical studies of the Greenland Ice Sheet, including [Christmann et al. (2021)](https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.1038%2Fs43247-021-00296-3&sa=D) and [Grinsted et al. (2024)](https://www.google.com/url?q=https%3A%2F%2Fdoi.org%2F10.5194%2Ftc-18-1947-2024&sa=D).
