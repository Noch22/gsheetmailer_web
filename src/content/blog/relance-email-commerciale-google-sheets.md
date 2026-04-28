---
title: "Relance email commerciale avec Google Sheets : méthode efficace"
description: "Comment organiser et envoyer vos relances email commerciales depuis Google Sheets et Gmail, sans CRM et sans script."
lang: "fr"
publishDate: "2026-04-28"
keywords:
  - "relance email commerciale google sheets"
  - "suivi prospection email gmail"
  - "relancer un prospect par email"
  - "modèle relance email commercial"
  - "pipeline commercial google sheets gmail"
---

La **relance email commerciale** est souvent la partie la plus négligée de la prospection. Pourtant, la majorité des ventes se concrétisent après le deuxième ou troisième contact, pas le premier.

Avec Google Sheets et GSheetMailer, vous pouvez structurer un suivi simple et envoyer des relances personnalisées sans outil CRM coûteux.

## Pourquoi Google Sheets pour les relances commerciales ?

Un CRM complet (Salesforce, HubSpot, Pipedrive) est puissant mais souvent surdimensionné pour une TPE, un freelance, ou une petite équipe commerciale.

Google Sheets offre une alternative légère :

- Gratuitement accessible à tous.
- Partageable en temps réel avec votre équipe.
- Facilement personnalisable selon votre processus.
- Directement connecté à GSheetMailer pour les envois.

## Structurer votre tableau de suivi

Voici une structure de base efficace :

| Email | Prénom | Entreprise | Statut | Dernier contact | Prochaine relance | Notes |
|---|---|---|---|---|---|---|
| lea@exemple.fr | Léa | Dupont SAS | En attente | 2026-04-10 | 2026-04-24 | Intéressée, veut une démo |
| thomas@exemple.fr | Thomas | Tech Innov | Relance 1 | 2026-04-15 | 2026-04-29 | Pas répondu |

La colonne **Statut** vous permet de filtrer et d'envoyer uniquement aux contacts à relancer. La colonne **Notes** garde le contexte de chaque échange.

## Rédiger un email de relance personnalisé

L'erreur classique est d'envoyer une relance générique. GSheetMailer vous permet d'injecter des variables pour personnaliser chaque message :

```
Objet : Re: {{Entreprise}} — quelques questions ?

Bonjour {{Prénom}},

Je me permets de vous recontacter suite à notre échange du {{Dernier contact}}.

Je sais que vous étiez occupé(e). Si vous avez des questions sur notre solution,
je suis disponible pour un appel de 15 minutes cette semaine.

À bientôt,
[Votre nom]
```

Ce type de relance est perçu comme un vrai message personnel, et non un email automatique.

## Envoyer les relances en filtrant par statut

Avec GSheetMailer, vous pouvez cibler précisément les contacts à relancer :

1. Filtrez votre feuille sur le statut "En attente" ou "Relance 1".
2. Copiez ces lignes dans un onglet dédié si nécessaire.
3. Lancez l'envoi depuis GSheetMailer en pointant sur cet onglet.

Les emails partent depuis Gmail, avec votre nom et votre adresse, ce qui maximise les taux de réponse.

## Combien de relances envoyer ?

Une règle générale en prospection B2B :

- **Relance 1** : 5-7 jours après le premier contact.
- **Relance 2** : 10-14 jours après la relance 1.
- **Relance 3** : 3-4 semaines plus tard, ton plus léger ("rupture de contact").

Au-delà de 3 relances sans réponse, il est généralement temps de passer à d'autres prospects.

## FAQ

**Peut-on automatiser les relances dans le temps ?**
GSheetMailer est une solution semi-automatique : vous déclenchez les envois manuellement, mais le ciblage et la personnalisation sont automatisés. Pour des relances entièrement automatiques dans le temps, il faudrait coupler avec un outil de scheduling.

**Est-ce adapté pour des équipes ?**
Oui. Plusieurs personnes peuvent partager la même feuille Google Sheets et déclencher des envois depuis leur propre compte Gmail.

**Comment éviter d'envoyer deux fois la même relance ?**
Ajoutez une colonne "Date d'envoi" et mettez-la à jour après chaque campagne. Vous pouvez aussi filtrer les contacts dont la cellule est déjà remplie.

## Conclusion

La relance email commerciale n'a pas besoin d'être complexe. Avec Google Sheets comme outil de suivi et GSheetMailer pour les envois, vous disposez d'un mini-CRM fonctionnel, gratuit, et personnalisable à l'infini.
