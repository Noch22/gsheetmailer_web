---
title: "Campagne emailing depuis Google Sheets : simple et gratuit"
description: "Comment lancer une campagne emailing depuis Google Sheets sans outil d'email marketing, directement avec Gmail et GSheetMailer."
lang: "fr"
publishDate: "2026-04-28"
keywords:
  - "campagne emailing google sheets"
  - "envoyer campagne email gmail"
  - "emailing sans outil"
  - "campagne email sans mailchimp"
  - "envoyer emails en masse google sheets gmail"
---

Vous voulez lancer une **campagne emailing depuis Google Sheets** sans vous abonner à Mailchimp, Brevo ou ActiveCampaign ? C'est tout à fait possible — et souvent plus efficace pour des volumes modérés.

Voici comment construire et envoyer une campagne email complète avec uniquement Google Sheets, Gmail et GSheetMailer.

## Quand préférer Gmail à un ESP classique ?

Les outils d'email marketing (ESP) comme Mailchimp sont adaptés pour :
- Les newsletters régulières à des listes d'abonnés.
- Les emails transactionnels automatisés.
- Les campagnes à très grand volume (10 000+ contacts).

En revanche, Gmail + GSheetMailer est plus adapté si :
- Vous envoyez à **moins de 500 contacts par jour**.
- Vous voulez que vos emails **ressemblent à un vrai email personnel**.
- Vous voulez **éviter le footer "Se désabonner"** visible dans les newsletters.
- Vous n'avez pas le budget pour un abonnement ESP.

## Structurer la campagne dans Google Sheets

Une campagne bien structurée repose sur un tableau propre. Voici une structure recommandée :

| Email | Prénom | Secteur | Offre | Envoyé | Date d'envoi |
|---|---|---|---|---|---|
| contact@exemple.fr | Sophie | Immobilier | Pro | OUI | 2026-04-28 |
| autre@exemple.fr | Marc | Finance | Starter | NON | |

Les colonnes **Envoyé** et **Date d'envoi** vous permettent de savoir exactement où vous en êtes et d'éviter les doublons.

## Rédiger l'email de campagne

Un bon email de campagne en format "personnel" suit cette structure :

1. **Objet** : court, personnalisé si possible (ex: "Votre secteur {{Secteur}} — une idée pour vous")
2. **Accroche** : phrase courte qui répond à un problème précis.
3. **Corps** : 2-3 paragraphes maximum. Direct, sans jargon.
4. **CTA** : un seul appel à l'action clair (répondre, cliquer, réserver).
5. **Signature** : votre nom, prénom, titre, coordonnées.

```
Objet : Idée pour {{Secteur}} — 2 minutes ?

Bonjour {{Prénom}},

Je travaille avec plusieurs entreprises dans le secteur {{Secteur}}
et je voulais partager une approche qui leur fait gagner du temps sur...

[votre corps de message]

Seriez-vous disponible pour un appel de 15 minutes cette semaine ?

Cordialement,
[Votre nom]
```

## Envoyer la campagne avec GSheetMailer

1. Installez GSheetMailer depuis le Chrome Web Store.
2. Ouvrez votre feuille Google Sheets.
3. Sélectionnez l'onglet contenant vos contacts non encore contactés.
4. Rédigez ou collez votre template dans GSheetMailer.
5. Envoyez — chaque email part individuellement depuis Gmail.

Après l'envoi, mettez à jour la colonne "Envoyé" pour garder votre tableau à jour.

## Mesurer les résultats d'une campagne Gmail

Gmail ne fournit pas de statistiques d'ouverture ou de clics comme un ESP. Pour pallier cela :

- **Suivez les réponses** directement dans Gmail.
- **Notez les dates de réponse** dans votre tableau Sheets.
- **Calculez manuellement** votre taux de réponse (réponses / envois × 100).

Pour des campagnes de prospection, le taux de réponse est souvent plus utile que le taux d'ouverture.

## Bonnes pratiques pour éviter le spam

- N'envoyez pas plus de 100-200 emails par jour les premières semaines avec un nouveau compte Gmail.
- Évitez les mots-clés associés au spam dans l'objet ("Gratuit !", "Urgent !", "Offre limitée").
- Rédigez des emails courts et sans liens multiples.
- Envoyez depuis une adresse Gmail utilisée régulièrement.

## FAQ

**Peut-on planifier l'envoi à une heure précise ?**
GSheetMailer déclenche l'envoi au moment où vous le lancez. La planification temporelle n'est pas encore disponible.

**Peut-on A/B tester deux templates ?**
Pas nativement, mais vous pouvez créer deux onglets séparés avec deux listes et deux templates différents.

**Comment gérer les désabonnements ?**
Pour les emails de prospection B2B, un simple "Répondez STOP pour ne plus recevoir de messages" dans la signature suffit dans la plupart des cas.

## Conclusion

Une **campagne emailing depuis Google Sheets** avec GSheetMailer est une solution légère, sans abonnement, et souvent plus performante pour la prospection personnalisée que les ESP traditionnels.
