# MyNotesWebBis

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Serveur de développement

Exécutez `ng serve` pour lancer un serveur de développement. Accédez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Génération de code

Exécutez `ng generate component nom-du-composant` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construction

Exécutez `ng build` pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist/`.

## Exécution des tests unitaires

Exécutez `ng test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io).

## Exécution des tests end-to-end

Exécutez `ng e2e` pour exécuter les tests end-to-end via une plateforme de votre choix. Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente des capacités de test end-to-end.

## Aide supplémentaire

Pour obtenir plus d'aide sur Angular CLI, utilisez `ng help` ou consultez la [Vue d'ensemble et référence des commandes Angular CLI](https://angular.io/cli).

## Docker

Pour exécuter l'application dans un conteneur Docker, suivez les étapes ci-dessous :

1. Construisez l'image Docker :
   ```bash
   docker build -t sekken/web:1.0 .
   ```

2. Exécutez le conteneur Docker :
   ```bash
   docker run -p 4200:4200 docker.io/sekken/web:1.0
   ```

Assurez-vous que Docker est installé et en cours d'exécution sur votre machine. Les commandes ci-dessus construiront l'image Docker et lanceront le conteneur, exposant l'application sur le port 4200.