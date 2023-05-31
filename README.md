# Procesverslag
**Auteur:** Katarina Živanović

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. [Flexbox] (https://ishadeed.com/article/learn-css-centering/#:~:text=To%20center%20an%20inline%20element,is%20text%2Dalign%3A%20center%20.&text=For%20multiple%20inline%20elements%2C%20the,using%20text%2Dalign%3A%20center%20 "Flexbox")
  2. clamp = https://www.youtube.com/watch?v=erqRw3E-vn4 
  3. Light and Dark mode = https://www.youtube.com/watch?v=nQzRTsjBXfQ
  4. Animation-fill-mode = https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode 
  5. Scale = https://www.youtube.com/watch?v=L4RYwQM_Wvk
  6. Fade-in & Fade-out = https://www.youtube.com/watch?v=UInN6O_nMKs 
  7. Koffie vulling = https://www.youtube.com/watch?v=wGPDuqgkoew 
  8. Dark and Light mode = https://www.youtube.com/watch?v=nQzRTsjBXfQ 



## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard: *separate paragraph*
  <img src="readme-images/Storyboard_Starbucks.png" width="375px" alt="storyboard voor opdracht 1">


  ### Je ambitie: *separate paragraph*
  Aan deze technieken/punten wil ik werken:
  - Effecten als stoom leren coderen.
  - Een koffie automaat coderen m.b.v. svgtjes?
  - En natuurlijk letters leren animeren, want dat heb ik nog nooit gedaan. *separate paragraph*

  Dus het zal zeker een uitdaging zijn :)
 
</details>



## Opdracht 1 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/website_1.png" width="375px" alt="uitomst afbeelding 1 opdracht 1"> 

  Wanneer je de hoofdpagina bezoekt, wordt de tekst 'Starbucks' weergegeven met een beker. De kleuren die je op dat moment ziet, zijn afhankelijk van je voorkeuren. Als je de lichte modus hebt ingeschakeld, worden er lichtere kleuren getoond. En als je de donkere modus aan hebt staan, krijg je wat donkerdere kleuren te zien. Dit heb ik gedaan door de roots aan te passen met behulp van '@media (prefers-color-scheme: dark)'. Het stukje code voor dit gedeelte zag er als volgt uit: *separate paragraph*

    :root {
      --letter-color:var(--starbucks-light-green);
      --coffee-color:var(--ijskoffie-licht-bruin);
      --Koffiefill-color:var(--dark-mode-coffeeFill);
      --KoffieDruppel-color: var(--ijskoffie-licht-bruin);
      --koffie-in-beker: var(--ijskoffie-licht-bruin);
      --koffie-beker-border: var(--darkMode-koffieBeker-border);
      --achtergrond-kleur: var(--starbucks-house-green);
      --letter-color:var(--darkmode-color-text);
    }


  <img src="readme-images/website_2.png" width="375px" alt="uitomst afbeelding 2 opdracht 1">

  Wanneer je over de H1 hovert, wordt er een animatie afgespeeld waarbij de letter B wordt platgedrukt, waardoor er koffiedruppels vrijkomen die in de koffiebeker vallen. Deze animaties zijn gemaakt met behulp van keyframes. Door gebruik te maken van "transform: scaleY" kon ik de lengte van de letter B aanpassen, zodat het lijkt alsof deze wordt platgedrukt. Met "opacity" en "transform: translateY" kon ik de koffiedruppels geleidelijk zichtbaar maken en laten vallen naar het bekertje. Hieronder zie bevindt zich de keyframe voor de animatie van de letter B: *separate paragraph*

    @keyframes letterBanimatie{
      0%{
        transform: scaleY(1);
      }

      20%{
        transform: scaleY(0.6);
      }
      
      40%{
        transform: scaleY(0.6);
      }

      60%{
        transform: scaleY(0.4);
      }

      80%{
        transform: scaleY(0.2);
      }

      100%{
        transform: scaleY(0.1);
      }
    }


  <img src="readme-images/website_3.png" width="375px" alt="uitomst afbeelding 3 opdracht 1">

  Na een aantal seconden lijkt het alsof een vloeibare substantie het scherm overneemt. Ook deze animatie is gemaakt met behulp van een keyframe. Door gebruik te maken van "z-index: -1;", zorg ik ervoor dat de vloeistof zich achter de tekst en de beker bevindt, waardoor het alleen op de achtergrond plaatsvindt. 



  ### Dit ging goed/Heb ik geleerd: 
  De Dark and light mode ging erg goed bij mij, ik begreep het ook erg snel. Ik vond het ook erg leuk
  om hiermee met kleuren te spelen.

  <img src="readme-images/lightmode.png" width="375px" alt="light mode desktop">
  <img src="readme-images/darkmode.png" width="375px" alt="dark mode desktop">


  ### Dit was lastig/Is niet gelukt:
  Het is me niet gelukt om een automaat en stoom te maken zonder een div/svg/img, omdat het te moeilijk
  voor me werd. Dit vond ik eigenlijk ook best pittig om te maken, omdat ik heel vaak vastliep bij bepaalde punten. Daarnaast lukt me het niet om de koffiegolf op mobielformaat groter te maken. Op mobielformaat bleef er namelijk nog een stukje witruimte over. Ook doet mijn letter B animatie het niet meer, terwijl hij het eerst wel deed. Eefje en ik konden beiden het probleem niet vinden. Wat ik echt jammer vind, want dat maakte deze wesbite eigenlijk compleet. 

  <img src="readme-images/witruimteGolf.png" width="375px" alt="witruimte golf afbeelding">
</details>



## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>


  ### Je ontwerp:
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="ontwerp opdracht 2">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - punt 1
  - punt 2
  - nog een punt
  - ...
</details>



## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>

  Neem minimaal 5 bevindingen op:



  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...
</details>



## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>