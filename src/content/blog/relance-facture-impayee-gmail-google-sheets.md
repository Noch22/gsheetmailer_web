---
title: "Relance facture impayee avec Gmail et Google Sheets: methode simple"
description: "Comment relancer des factures impayees avec Gmail et Google Sheets en restant clair, poli et organise, sans outil complexe."
lang: "fr"
publishDate: "2026-05-04"
draft: false
keywords:
  - "relance facture impayee gmail"
  - "google sheets relance facture"
  - "email relance paiement"
  - "suivi factures impayees"
  - "gsheetmailer"
---

Relancer une facture impayee est souvent inconfortable. Pourtant, un processus simple et regulier suffit pour recuperer plus de paiements, sans casser la relation client.

Avec GSheetMailer, vous preparez votre liste dans Google Sheets puis vous envoyez des emails personnalises depuis Gmail, un par contact.

## Etape 1: preparer un tableau de suivi clair

Dans votre feuille, creez au minimum ces colonnes: `Email`, `Prenom`, `NumeroFacture`, `Montant`, `DateEcheance`, `Statut`, `DerniereRelance`.

Filtrez uniquement les lignes en retard de paiement. L'objectif est d'envoyer des messages precis, pas une relance generale a tout le monde.

## Etape 2: creer un message de relance personnalise

Utilisez un modele simple:

Objet: Rappel facture {{NumeroFacture}}

Bonjour {{Prenom}},

Je me permets de vous relancer concernant la facture {{NumeroFacture}} d'un montant de {{Montant}}, arrivee a echeance le {{DateEcheance}}.

Pouvez-vous me confirmer la date de reglement ?

Merci d'avance.

## Etape 3: envoyer par petits lots et suivre les reponses

Envoyez par lots raisonnables, puis mettez a jour la colonne `Statut` apres chaque reponse. Vous pouvez aussi renseigner la date de la prochaine relance pour garder un rythme propre.

## Checklist

- Nettoyer la liste et supprimer les doublons
- Verifier les adresses email
- Adapter le ton selon la relation client
- Ajouter une date de prochaine action
- Ne relancer que les lignes vraiment en retard

## Erreurs a eviter

- Message trop aggressif des la premiere relance
- Relancer trop vite sans laisser de delai
- Oublier de mettre a jour le statut dans la feuille
- Envoyer des emails non personnalises

## FAQ

### Combien de relances faut-il faire ?
Trois relances bien espacees suffisent dans la plupart des cas.

### Puis-je segmenter par montant ?
Oui, c'est meme recommande pour prioriser les factures a fort impact.

### Est-ce adapte aux petites structures ?
Oui, c'est ideal pour independants, TPE et petites equipes.

## Conclusion

Un systeme de relance facture efficace tient en une feuille propre, un message clair et une execution reguliere. Pour gagner du temps, installez GSheetMailer et envoyez vos relances personnalisees directement depuis Gmail.

Pour aller plus loin: [Publipostage email gratuit](../publipostage-email-gratuit/), [Relance commerciale avec Google Sheets](../relance-email-commerciale-google-sheets/), [Confidentialite](../../privacy/).
