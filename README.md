# Portfolio Web Advanced
Dit portfolio bevat aparte voorbeelden voor elk onderwerp uit het opdracht voor het vak Web Advanced. Elk onderwerp heeft zijn eigen map met een bijzondere voorbeeldbestand om het concept te demonstreren.

## Navigatie
Navigeer naar de map van het gewenste onderwerp om het voorbeeld te bekijken.

## Opmerkingen
Dit portfolio wordt regelmatig bijgewerkt tot het inleverdatum 07/06.

## Voorbeelden
### Elementen Selecteren
**Beschrijving:**
Dit voorbeeld laat zien hoe je een element kunt selecteren met behulp van 'getElementById'. Het selecteert de hoofdtitel "h1" en logt de tekstinhoud naar de console.

### Elementen Mnipuleren
**Beschrijving:**
Dit voorbeeld demonstreert hoe je de tekst van een element kunt veranderen. Een zin 'p' wordt geselecteerd en de tekstinhoud wordt gewijzigd naar 'Dit is een nieuwe zin'.

### Event aan een Element Koppelen
**Beschrijving:**
Dit voorbeeld toont hoe je een klikgebeurtenus koppelt aan een knop. Wanner men op de knop klikt, verschijnt er een aler met de boodschap 'Button is geklikt!'.

### Formulier Valideren
**Beschrijving:**
Dit voorbeeld valideert een formulier waar men controleert de invoer van een geldig e-mailadres als deze zowel een '@' als een '.com' bevat. Als de invoer/email ongeldig blijkt te zijn, dan wordt een foutbericht weergegeven en wordt het formulier niet verzonden.

### Gebruiken van een constante
**Beschrijving:**
Dit voorbeeld toont hoe je een constante kunt gebruiken in Javascript. De tekst 'h1' wordt ingesteld met een constante boodschap.

### Gebruiken van Template Literals
**Beschrijving:**
Dit voorbeeld laat zien hoe je template literals kunt gebruiken om een gepersonaliseerde begroeting te maken.

### Destructuring
**Beschrijving:**
Dit voorbeeld toont zowel array destructuring als object destructuring, het laat zien hoe je elementen uit een array en eigenschappen uit een object kunt uithalen.

### Spread & Rest Operator
**Beschrijving:**
In dit voorbeeld wordt eerst de spread-operator gebruikt om een array uit te breiden met meer getallen, en daarna de rest-operator om het gemiddelde te berekenen van een variabel aantal getallen die aan een functie worden doorgegeven. Bij de rest-operator heb ik ook een extra methode toegepast om de som van alle getallen in de array te berekenen, namelijk de reduce-methode.

Ik heb voor de methode de volgende link als gids gebruikt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

### Iteration over een Array
**Beschrijving:**
Dit voorbeeld toont de 'for...of' loop voor een eenvoudige iteratie.

### Arrow Function
**Beschrijving:**
Dit voorbeeld toont hoe je een arrow functie kunt gebruiken om twee getallen op te tellen.

### Callback Function
**Beschrijving:**
Dit voorbeeld laat zien hoe je twee verschillende callback functies asynchroon kunt oproepen binnen een andere functie om wiskundige operaties uit te voeren.

Ik heb de volgende link als gids gebruikt: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](https://builtin.com/software-engineering-perspectives/callback-function)

### Promise
**Beschrijving:**
Dit voorbeeld demonstreert het gebruik van een promise om een bericht te generen aan de hand van een boolean, de uitvoerende code neemt ook 2 seconden de tijd om zijn resultaat te produceren en daarna verschijnt deze op de browser door middel van de consuming code naargelang de boolean.
De 'then-methode' wordt gebruikt om de uitkomst van de promise af te handelen, terwijl de 'catch-methode' wordt gebruikt om eventuele fouten te behandelen.

Ik heb de volgende link als gids gebruikt: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](https://www.javascripttutorial.net/es6/javascript-promises/)

### Consumer methods
**Beschrijving:**
Dit voorbeeld toont het gebruik van 'then', 'catch' en 'finally' methoden met een eenvoudige Promise.
-'then': geeft de resolve bericht weer als de Math.random getal groter is dan 0.5.
-'catch': geeft de reject bericht weer als de Math.random getal kleiner is dan 0.5.
-'finally': ongeacht het resultaat zorgt 'finally' voor een boodschap op de console als de Promise is afgehandeld.

Ik heb de volgende link als gids gebruikt om met andere methodes te werken van het object Math: https://www.w3schools.com/jsref/jsref_random.asp

### Async & Await
**Beschrijving:**

Dit voorbeeld toont aan het gebruik van 'async'/'await' om een asynchrone functie te maken. De asynchrone functie 'myPromise' geeft een Promise terug met een resolve boodschap die gelinkt wordt aan de/het DOM.

Ik heb de volgende link als gids gebruikt: https://www.w3schools.com/js/js_async.asp

### Self-executing function
**Beschrijving:**

In dit voorbeeld wordt er een simpele self-executing functie gemaakt die aan de hand vaan een 'async'/'await functie met een Promise ingebouwd die een boodschat binnen een alert genereert.

**Opmerking:**
Blijkbaar worden zulke functies 'IIFE or Immediately Invoked Function Expression' genoemd. Zie link: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

### Fetch om data op te halen
**Beschrijving:**
Dit voorbeeld toont het gebruik van de fetch methode om HTML inhoud te vragen van een URL, hoe ook dit JSON inhoudt omgezet (parsen) wordt in een structuur die door javascript kan worden gebruikt om deze te kunnen weergeven in de/het DOM.

Ik heb de volgende link als gids gebruikt: https://www.geeksforgeeks.org/javascript-fetch-method/

**Opmerking:**
Ik zat hier vast en kon de 'h1' van de url niet terug krijgen en daarom heb ik hulp aan AI gevraagd. Zie de link: https://chatgpt.com/share/d48e8010-3dae-48fe-8e84-a3e798a7408d

### JSON manipuleren en weergeven
**Beschrijving:**
In dit voorbeeld wordt er een fetch-verzoek gedaan naar de opgegeven URL om de JSON-gegevens op te halen. De JSON-data wordt omgezet naar een leesbare string met behulp van JSON.stringify() en wordt vervolgens weergegeven in een specifiek DOM-element.

Ik heb de volgende link als gids gebruikt: https://javascript.info/json

### Basis CSS Animatie
**Beschrijving:**
Dit voorbeeld toont een eenvoudige CSS-animatie die een knop van boven naar onder en dan naar rechts verplaatst in een infinity loop. De animatie wordt gedefinieerd met behulp van keyframes.

### Gebruiken van een flexbox of CSS grid
**Beschrijving:**
In dit voorbeeld wordt een kruis met een boodschap gecreëerd met behulp van flexbox- en griddisplays. Flexbox wikkelt de body van de HTML om verticaal drie containers op een rij te zetten, en grid verdeelt binnen elke container zijn eigen items over het gekozen aantal kolommen en rijen.
