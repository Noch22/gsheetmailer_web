---
title: "Publipostage email gratuit : comment l'envoyer depuis Gmail"
description: "Comment réaliser un publipostage email gratuit depuis Gmail et Google Sheets, sans logiciel payant, en quelques étapes simples."
lang: "fr"
publishDate: "2026-04-28"
keywords:
  - "publipostage email gratuit"
  - "publipostage gmail"
  - "faire un publipostage email"
  - "publipostage google sheets"
  - "envoi en masse email gratuit gmail"
---

Le **publipostage email** — envoyer un même message personnalisé à une liste de destinataires — est une technique classique du marketing et de la communication. Longtemps réservée aux professionnels disposant d'outils dédiés, elle est aujourd'hui accessible gratuitement à tous grâce à Gmail et Google Sheets.

## Qu'est-ce que le publipostage email ?

Le publipostage (ou *mail merge* en anglais) consiste à :

1. Partir d'un **template de message** contenant des espaces variables (prénom, entreprise, etc.).
2. Utiliser une **liste de contacts** avec les valeurs à injecter.
3. Générer et envoyer **un email unique** pour chaque destinataire.

Le résultat : chaque contact reçoit un message qui lui semble adressé personnellement.

## Les outils gratuits disponibles

Plusieurs approches permettent de faire du publipostage email gratuitement :

| Outil | Avantages | Inconvénients |
|---|---|---|
| **Gmail + Apps Script** | Gratuit, personnalisable | Nécessite du code JavaScript |
| **Gmail + GSheetMailer** | Gratuit, sans code | Limité à Gmail |
| **Mailchimp (tier gratuit)** | Interface intuitive | Limité à 500 contacts, logo Mailchimp |
| **Brevo (tier gratuit)** | 300 emails/jour | Branding imposé |

Pour un usage sans code avec votre propre adresse Gmail, **GSheetMailer** est la solution la plus directe.

## Comment faire un publipostage email gratuit avec GSheetMailer

### Étape 1 : Préparer la liste dans Google Sheets

Créez un tableau avec une colonne par variable :

```
Email | Prénom | Nom | Organisation
```

### Étape 2 : Installer GSheetMailer

Installez l'extension Chrome GSheetMailer depuis le Chrome Web Store. Elle s'intègre directement à votre navigateur et à votre compte Google.

### Étape 3 : Rédiger le template

Rédigez votre email en utilisant les noms de colonnes entre `{{` et `}}` :

```
Objet : Invitation — {{Organisation}}

Bonjour {{Prénom}} {{Nom}},

Nous vous invitons à...
```

### Étape 4 : Lancer l'envoi

Sélectionnez votre feuille, vérifiez l'aperçu, et lancez. Chaque email est envoyé individuellement depuis Gmail.

## Limites du publipostage gratuit avec Gmail

- **500 emails/jour** avec un compte Gmail gratuit.
- **2 000 emails/jour** avec Google Workspace.
- Les pièces jointes dynamiques ne sont pas encore supportées dans GSheetMailer.
- Les images intégrées dans le corps de l'email nécessitent un hébergement externe.

Pour de petits volumes (moins de 500 contacts), ces limites ne posent aucun problème.

## Publipostage email vs newsletter

Il est important de distinguer les deux approches :

- **Newsletter** : envoyée via un ESP (Mailchimp, etc.), avec footer de désinscription obligatoire. Convient pour les communications régulières aux abonnés.
- **Publipostage email** : envoyé via Gmail, aspect d'email personnel. Convient pour la prospection, les invitations, les relances, les communications personnalisées.

Pour tout usage qui nécessite un aspect personnel et humain, le publipostage via Gmail est supérieur.

## FAQ

**Le publipostage email est-il légal ?**
Oui, dans le cadre d'un usage B2B entre professionnels ou si vous avez l'accord des destinataires. Pour les particuliers (B2C), le RGPD impose d'avoir un consentement explicite.

**Peut-on personnaliser l'objet du mail ?**
Oui, les variables fonctionnent aussi dans le champ objet.

**GSheetMailer est-il vraiment gratuit ?**
GSheetMailer est actuellement en phase bêta. L'installation est gratuite et l'accès est disponible via le Chrome Web Store.

## Conclusion

Faire un **publipostage email gratuit** n'a jamais été aussi simple. Google Sheets + Gmail + GSheetMailer forment un triptyque accessible à tous, sans abonnement et sans compromis sur la personnalisation.
