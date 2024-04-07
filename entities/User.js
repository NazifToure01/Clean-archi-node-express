class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    validate() {
        if (!this.name || !this.email) {
            throw new Error("Name and email are required");
        }
        // Ici, on peut ajouter d'autres validations comme la vérification de la longueur du nom, la validité de l'email, etc.
    }
}

module.exports = User;