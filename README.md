

## Démarrage rapide

Ces instructions vous permettront de lancer une copie du projet en local sur votre machine à des fins de développement et de test. Suivez ces instructions pour mettre en place votre environnement de développement.

### Prérequis

Quoi de nécessaire pour installer le logiciel et comment les installer.

```bash
npm install npm@latest -g
```

### Installation

Clonez le dépôt GitHub :

```bash
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
```

Installez les packages NPM :

```bash
npm install
```

Configurez les variables d'environnement :

Créez un fichier `.env` dans le répertoire racine et ajoutez les configurations nécessaires:

```plaintext
MONGODB_URI=mongodb://localhost:27017/your-database
PORT=3000
```

### Lancement de l'application

Lancez le serveur de développement :

```bash
npm start
```

L'application devrait maintenant être en cours d'exécution sur [http://localhost:3000](http://localhost:3000).

## Utilisation

**Requête :**

```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john.doe@example.com"}'
```

**Réponse :**

```json
{
  "_id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Tests

```bash
npm test
```

## Contribuer

1. Fork le projet
2. Créez votre branche de fonctionnalités (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la Licence MIT. Voir `LICENSE` pour plus d'informations.

## Contact

Votre Nom – [@linkedin](https://www.linkedin.com/in/nazif-toure) - naziftoure14@gmil.com


