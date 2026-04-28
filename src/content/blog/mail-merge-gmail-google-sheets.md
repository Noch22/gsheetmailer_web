---
title: "Mail merge Gmail Google Sheets : comment ça marche vraiment"
description: "Découvrez comment réaliser un mail merge entre Gmail et Google Sheets sans coder, en quelques minutes, pour envoyer des emails personnalisés en masse."
lang: "fr"
publishDate: "2026-04-28"
keywords:
  - "mail merge gmail google sheets"
  - "publipostage gmail sheets"
  - "envoyer email en masse gmail"
  - "mail merge sans code"
  - "personnaliser email masse gmail"
---

Le **mail merge Gmail Google Sheets** est l'une des techniques les plus recherchées par ceux qui veulent envoyer des emails personnalisés sans payer un outil d'emailing coûteux.

L'idée est simple : vous avez une liste de contacts dans un tableau Google Sheets, et vous voulez envoyer à chacun un email différent — avec son prénom, son entreprise, ou toute autre information — directement depuis Gmail.

## Pourquoi utiliser Gmail pour le mail merge ?

Gmail présente plusieurs avantages par rapport à des plateformes comme Mailchimp ou Brevo :

- **Meilleure délivrabilité** : les emails arrivent rarement en spam car ils transitent par votre vrai compte Gmail.
- **Aspect humain** : le destinataire reçoit un email qui ressemble à un message personnel, pas à une newsletter.
- **Coût nul** : Gmail est gratuit jusqu'à 500 emails par jour pour un compte standard.

Pour des listes de taille modérée — prospection, suivi client, invitations — c'est souvent la meilleure option disponible.

## Préparer Google Sheets pour le mail merge

Avant tout envoi, votre feuille doit être bien structurée. Chaque ligne représente un destinataire, chaque colonne une variable :

| Email | Prénom | Entreprise | Offre |
|---|---|---|---|
| marie@exemple.fr | Marie | Dupont SAS | Plan Pro |
| paul@exemple.fr | Paul | Tech Innov | Plan Starter |

Nommez bien vos colonnes, sans accent ni espace si possible. Ces noms serviront de variables dans votre modèle d'email.

## Rédiger le template d'email personnalisé

Dans GSheetMailer, le template s'écrit en utilisant les noms de colonnes entre doubles accolades :

```
Bonjour {{Prénom}},

J'espère que vous allez bien. Je vous contacte au sujet de {{Offre}} pour {{Entreprise}}.

Cordialement,
Votre équipe
```

Chaque variable sera remplacée automatiquement à l'envoi. Il n'y a aucun script à écrire.

## Envoyer le mail merge depuis Gmail

Une fois la feuille prête et le template rédigé :

1. Connectez GSheetMailer à votre compte Google.
2. Sélectionnez la feuille contenant vos contacts.
3. Rédigez ou collez votre template.
4. Lancez l'envoi — chaque email part depuis votre adresse Gmail.

L'email que reçoit chaque contact est un vrai email Gmail, ce qui maximise les chances qu'il soit lu.

## Combien d'emails peut-on envoyer ?

Gmail impose des limites quotidiennes :

- Compte Gmail gratuit : **500 emails par jour**
- Google Workspace (anciennement G Suite) : **2 000 emails par jour**

Pour de la prospection classique ou du suivi commercial, ces limites sont rarement atteintes.

## FAQ : mail merge Gmail Google Sheets

**Est-ce possible sans script Apps Script ?**
Oui. GSheetMailer fonctionne entièrement sans code, contrairement aux solutions basées sur Apps Script qui nécessitent de coller du code JavaScript dans votre feuille.

**Les emails arrivent-ils en spam ?**
Les emails envoyés via Gmail depuis votre propre compte arrivent en général en boîte de réception. C'est l'un des avantages majeurs par rapport aux ESP traditionnels.

**Peut-on joindre des pièces jointes ?**
Cette fonctionnalité est prévue dans les prochaines versions de GSheetMailer.

**Est-ce adapté aux non-techniciens ?**
Absolument. L'interface a été conçue pour des utilisateurs qui ne savent pas coder.

## Conclusion

Le mail merge Gmail Google Sheets est accessible à tous. Avec les bons outils, vous pouvez envoyer 50 ou 500 emails personnalisés en quelques minutes, sans quitter Google.

GSheetMailer a été créé exactement pour ça.
