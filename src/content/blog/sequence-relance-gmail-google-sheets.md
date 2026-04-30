---
title: "Créer une séquence de relance Gmail avec Google Sheets"
description: "Comment structurer une séquence de relance email claire et personnalisée avec Google Sheets et Gmail."
lang: "fr"
publishDate: "2026-04-30"
keywords:
  - "séquence relance gmail"
  - "relance email google sheets"
  - "follow up commercial gmail"
  - "emailing b2b google sheets"
  - "relance automatisée simple"
---

Une seule relance ne suffit pas toujours. En prospection, une petite séquence de 2 a 4 emails augmente fortement le taux de réponse.

Bonne nouvelle: vous pouvez gérer cela simplement avec Google Sheets et GSheetMailer.

## Structure recommandée

- Email 1: prise de contact courte et personnalisée.
- Email 2 (J+3): rappel avec valeur ajoutée.
- Email 3 (J+7): preuve sociale ou cas concret.
- Email 4 (J+12): dernier message poli de clôture.

## Organiser votre feuille

Ajoutez ces colonnes:

```
Email | Prénom | Entreprise | Etape | DateDernierEnvoi | Statut
```

La colonne `Etape` vous indique quel template envoyer. La colonne `Statut` permet d'exclure les personnes qui ont déjà répondu.

## Exemple de relance 2

```
Objet: Je me permets de revenir vers vous, {{Prénom}}

Bonjour {{Prénom}},

Je vous relance concernant mon message précédent.
Si c'est utile, je peux vous montrer en 10 minutes
comment d'autres équipes comme {{Entreprise}} gagnent du temps.

Souhaitez-vous un exemple concret ?
```

## Erreurs fréquentes

- Relancer trop vite (moins de 48h).
- Utiliser des messages trop longs.
- Oublier d'arrêter la séquence en cas de réponse.
- Répéter exactement le même texte.

## Conclusion

Une séquence de relance simple, bien rythmée, suffit souvent pour doubler les réponses. Avec Google Sheets, vous gardez le contrôle sans outil complexe.
