<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![Logo](https://platform.simplicite.io/logos/standard/logo250.png)
* * *

`ThemesDSFR` module definition
==============================

## Introduction

Althought this **ThemesDSFR** module is hosted on the `module-themeetat` repository, it differs from it for several reasons, and isn't meant to work in combination with it. We recommend to select either one of the 2 modules instead of having both of them.

Indeed this module was created based on the [DSFR v1.14.2](https://www.systeme-de-design.gouv.fr/version-courante/fr/a-propos/notes-de-versions/note-de-version-114), and aims to reproduce/integrate its visual styles & rules specifically for Simplicité's interfaces. 

## Content

This module contains all the necessary assets to fully use our integration of the DSFR styles :

- ThemeDSFR-light
	- Light version of the DSFR looks & visuals, including the components that are still *bêta* in the v1.14.2
- ThemeDSFR-dark
	- Dark version of the DSFR looks & visuals, including the components that are still *bêta* in the v1.14.2
- Marianne Font
	- Official font referenced in the DSFR documentation, available [here](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/typographie)
- DSFR icons
	- Official icon-set detailed [here](https://www.figma.com/design/v1BW45yI2kK5DnQtWPit5a/DSFR---Fondamentaux---v1.14--Community-?node-id=1-141) in the DSFR's figma
- DSFR pictograms
	- Official set of pictograms detailed [here](https://www.figma.com/design/Kwibp2WR8vgK10SWluTP7w/DSFR---Pictogrammes---V1.14--Community-?node-id=1-2&p=f&t=wrBxdY6GHBkUrdOf-0) in the DSFR's figma

## Warning note

Even thought we tried to accurately reproduce & integrate the DSFR's rules & component styles, we faced several complications that are important to acknowledge :

- DSFR being website-oriented, and Simplicité being a web-platform, there was a mismatch in the type of interface adressed by each.
	- Thus the components couldn't be automatically matched from one environment to another
	- Some of the components from one environment have no equivalent in the other.
- Simplicité being a Low-Code platform that allows users to create their own unique interfaces, we couldn't restrict the components' usage to precise contexts.
	- Thus the components' styles were given with a more "global" approach, in order to apply as few restrictions/inconsistencies as possible in the end-users interfaces.
- Simplicité having its own custom components, those were redesigned to match the DSFR's color palette & other components style.
 - But those aren't as accurate as they would have be if included in the DSFR as they're used in Simplicité

If you're interested in the explanations behind some of our choices, or why some elements of the DSFR aren't as they could have been within proper DSFR-implemented interfaces, you can refer to the [detailed documentation](https://github.com/simplicitesoftware/module-themeetat/blob/dsfr-v6/DSFR-README.md) that is in the **DSFR_README.md** file in this repository.

