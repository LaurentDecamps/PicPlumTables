# PicPlumTables
A la base le jeu est un jeu de société pour enfant. 
Le jeu pique plume consiste à une course sur un circuit où pour avancer on doit retrouver la prochaine étape parmi un "memory" central et partagé par chaque jour. Dans cette version ce ne sont pas des éléments de la basse courre que vous devrez retrouvez mais les résultats des multiplications. 
Le jeu se voudra modulable avec la possibilité de paramétrer le nombre de cases et les informations qu'on pourra y retrouver : des verbes irréguliers, des dates historiques, etc ...

# Journal de développement
## 31/12/21
Je commence ce journal de développement, un peu comme la [technique du  canard en plastique](https://fr.wikipedia.org/wiki/M%C3%A9thode_du_canard_en_plastique), je pense qu'il va m'aider à y voir plus clair dans mes objectifs et globalement dans mon développement. J'ai une première version fonctionnelle et qui se déploie automatiquement sur GitHub Pages via le répertoire *doc*. Aujourd'hui je voudrais améliorer le jeu et y mettre la possibilité de faire gagner un des deux joueurs. Je dois créer une méthode qui donne la dalle suivante où se trouve l'opération dont le joueur courant doit retrouver le résultat parmi les dalles résultats du centre. Cela me permettra de me débarrasser de l'énorme switch qui organise le *chemin* des dalles avec cette méthode. Je pourrais également facilement faire le test de victoire par rapport à la. J'essaie sans succès d'installer Jest pour Angular. Il semble qu'il faille pas mal de configuration pour ça, mais je bloque sur l'installation de babel qui semble indispensable (une erreur bizarre de rename dû à node). J'ai essayé de supprimer le répertoire node_module, mais j'ai voulu en profiter pour essayer de supprimer des package que je n'utilise plus ou pas (test de phaser et karma/jasmine). J'ai essayé de le faire via npm uninstall mais ça a retéléchargé tout le node_modules 😥. Note pour plus tard : l'erreur semble se résoudre lorsqu'on supprime le pacakge-lock.json. Finalement non un redémarrage a été nécessaire.

## 16/01/21
Le déploiement continue avec GitHub pages semble ne pas fonctionner. On teste ça et on mets en place le pop in de victoire.

### Git Hubpages
Il semble qu'il faille faire la ligne de commande suivante pour générer un répertoire docs cible du build qui fonctionne bien sur github pages :

    npm run build -- --base-href='https://laurentdecamps.github.io/PicPlumTables/'

Le -- permet d'indiquer une option à la commande ng. Cette option, le base-ref permets d'indiquer un chemin de référence de base dans la balise &lt;base> contenu dans le &lt;head>.