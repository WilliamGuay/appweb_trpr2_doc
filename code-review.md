# Revue de code

Vous trouverez ci-dessous les revues de code du travail pratique 2

## Revue de la semaine 2

### Le code

#### Ajout de la navBar

Implémentation de la navbar dans un composant de sorte à la réutiliser lorsque nécessaire (partout dans le cas de cette application)
Le code respecte les normes de HTML vu en classe et utilise principalement Bootstrap.

#### Ajout de la page de Leaderboard

Implémentation du composant de leaderboard dans les routes de sorte à changer à l'affichage du leaderboard lorsque l'utilisateur clique sur l'onglet classement.

#### Ajout de l'implémentation de la database pour le jeu

Ajout du Service pour l'accès à la database de l'application.

#### Ajout du composant pour représenter les joueurs dans le leaderboard

Implémentation d'un composant qui est un item pour les tableaux bootstrap détenant des informations pour le leaderboard.

## Revue semaine 3

### Le code

#### Main Game

- Le code de main game semble un peu à s'apparenter au classique bol de spagetti mélangé et entrêlé à souhait.
  Sinon, le reste du code est fonctionnel
- Lance une alerte à la place d'un modal lorsque le joueur tente de quitter la page et n'affiche pas de modals lorsque le joueur gagne ou perds

#### Leaderboard

Le tri ne semble pas fonctionner en tout temps

### Lest tests

Lest tests semblent presque tous passer mais les tests de MainGame ne sont définitivement pas complets
