DSFR styles for Simplicité interfaces
=====================================

## Introduction

Ce document vient résumer le processus d'adaptation du DSFR pour les interfaces et composants propres à Simplicité Software.

> ⚠️ Simplicité n'implémente pas directement le DSFR pour des raisons techniques (trop de composants et fonctionnements natifs/socles), et par conséquent ne peut proposer qu'une "reproduction" de ce dernier aux travers des styles définits dans les "Fondamentaux" du DSFR, et comme implémentés dans la v1.14.2 de ce dernier.


## Processus d'adaptation

### Mapping des composants

| DSFR                   | Simplicité                                                      |
|------------------------|-----------------------------------------------------------------|
| Accordéon              | Zones d'attributs "Résumer"                                     |
| Ajout de fichier       | Champs de types Image/Fichier                                   |
| Alerte                 | Alertes "flottantes"                                            |
| 🟠 Badge               | Badges (menu, notifs, ...), Filtres de listes                   |
| Bandeau d'information  | Aides contextuelles                                             |
| Barre de recherche     | Recherches (globale, menu, formulaire), Filtres en liste        |
| Bouton                 | Tous les boutons (action, icône, primaire, secondaire) "socles" |
| Bouton FranceConnect   | Bouton FranceConnect (connexion)                                |
| Bouton radio           | Champs booléen & énums, 1 seul choix                            |
| 🟠 Carte               | Resumé d'objets, affichage masonry & autre                      |
| Case à cocher          | Champs énums multiples & checkboxes, séléction en liste         |
| Champ de saisie        | Champs textes & déclinaisons (principaux)                       |
| 🟠 Curseur             | Champs entier "slider"                                          |
| En-tête                | Header principal                                                |
| 🔵 En-tête 'connecté'  | Menu déroulant spécifique aux fonctions "utilisateurs"          |
| Fil d'arianne          | Fil d'arianne                                                   |
| 🟠 Indicateur d'étapes | Barre d'états, /!\ socle différent /!\                          |
| 🟠 Infobulle           | Tooltips (traductions, aides, label hover)                      |
| Interrupteur           | Champs booléen "coulissant"                                     |
| Lien                   | Liens (balise <a/\>) de base (hors <li/\> etc)                  |
| Liste déroulante       | Champs avec un dropdown                                         |
| Menu latéral           | Menu principal (domaines, sous-domaines)                        |
| 🔵 Menu déroulant      | Boutons burgers, menus en dropdowns, etc                        |
| Modale                 | Boîtes de dialogue (centrale, latérale), avec/sans décisions    |
| 🔵 Navigation tertiare | Navigation via la barre de Bookmarks                            |
| Onglet                 | Zones d'attributs en "tabs", verticales & horizontales          |
| Pagination             | Pagination des listes (bas de page)                             |
| Tableau                | Listes d'objets                                                 |
| Tuile                  | Shortcuts items                                                 |

> Les composants marqués "🔵" sont ceux encore en bêta au moment de la réalisation du projet d'adaptation.
> Et ceux marqués "🟠" sont ceux dont l'intégration n'a pas pu être complètement fidèle à la sémantique du DSFR.

### Intégration des icônes & pictogrammes

TODO

## Ecarts et spécificités

Simplicité étant une solution proposant des interfaces originales et propre à son fonctionnement, certains éléments de la plateforme ont fait l'objet de choix et de décisions pouvant s'écarter des définitions propres au DSFR.

Par conséquent pour ces écarts et prises de libertés, nous avons décidé de justifier nos choix ci-dessous dans 2 catégories d'écarts :

- **Composants non-inclut :** les composants définits par le DSFR ne correspondant à aucun élément de Simplicité, ou étant trop spécifique dans leur usage pour correspondre à une fonctionnalité de notre plateforme.
- **Interprétations spécifiques :** les fonctionnalités et cas d'usages très (trop) précis de Simplicité, pour lesquels nous avons du faire des choix de design et d'adaptation pour correspondre autant que possible au DSFR.

> ⚠️ Il faut retenir que Simplicité n'implémente pas le DSFR, mais propose une adaptation/interprétation. L'objectif étant d'inclure au maximum les visuels des composants dans nos interfaces.

### Composants non-inclut

Certains composants du DSFR n'ont pas pu être associés/retrouvés dans nos interfaces, soit par soucis de définition trop spécifique, ou bien tout simplement par non présence dans les usages réguliers de nos applications.

| Composant                    | Justification |
|------------------------------|---------------|
| Contenu médias               | |
| Citation                     | |
| Contrôle ségmenté            | |
| Groupe de boutons            | |
| Lettre d'info et réseaux     | |
| Mise en avant                | |
| Mise en éxèrgue              | |
| Mot de passe                 | |
| Navigation Principale        | |
| Paramètre d'affichage        | |
| Partage                      | |
| Pied de page                 | |
| Retour en haut de la page    | |
| Sélécteur de langue          | |
| Sommaire                     | |
| Tag                          | |
| Téléchargement de fichier    | |
| Transcription                | |
| Gestionnaire de consentement | |

### Interprétations spécifiques

Les interfaces Simplicité différants des interfaces web classiques, certains composants du DSFR ont du être intégrés dans de contextes non spécifiés, et des composants Simplicité ont dues être catégorisé dans la grille des composant du DSFR.
Les choix étant effectué par l'équipe Simplicité, nous les justifions ci-dessous pour les designers/développeurs qui souhaiteraient en savoir plus sur notre adaptation/intégration du DSFR.

#### Entorses au DSFR - 🟠

| Composant           | Problème | Interprétation |
|---------------------|----------|----------------|
| Badge               | | |
| Carte               | | |
| Curseur             | | |
| Indicateur d'étapes | | |
| Infobulle           | | |

#### Composant en "bêta" - 🔵

| Composant           | Problème | Interprétation |
|---------------------|----------|----------------|
| En-tête 'connecté'  | | |
| Menu déroulant      | | |
| Navigation tertiare | | |

### Thème "Dark"

Dans la continuité de l'intégration des styles du DSFR pour les interfaces Simplicité, nous avons fait l'effort d'aussi implémenter les styles "sombres". Cependant

## Visuels

### Exemples d'applications

## Sources

- [Documentation](https://www.systeme-de-design.gouv.fr/version-courante/fr)
- [Figma "Fondamentaux"](https://www.figma.com/community/file/1042832497184172837)
- [Figma "Composant"](https://www.figma.com/community/file/1042832984468443942)
