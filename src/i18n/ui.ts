export const languages = {
  fr: "FR",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "fr";

export type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Translation = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
  nav: {
    sectionsLabel: string;
    langSwitcherLabel: string;
    backHome: string;
    privacy: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    betaCta: string;
    secondaryCta: string;
    proof: string;
  };
  why: {
    title: string;
    items: string[];
  };
  how: {
    title: string;
    subtitle: string;
    stepLabel: string;
    steps: Array<{ title: string; text: string }>;
  };
  preview: {
    title: string;
    text: string;
  };
  video: {
    kicker: string;
    title: string;
    text: string;
    iframeTitle: string;
    fallback: string;
    cta: string;
  };
  workflow: {
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  benefits: {
    kicker: string;
    title: string;
    itemText: string;
  };
  trust: {
    kicker: string;
    title: string;
    text: string;
    items: Array<{ title: string; text: string }>;
  };
  faq: {
    kicker: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    title: string;
    text: string;
  };
  blog: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    privacy: string;
    blog: string;
  };
  privacyPage: {
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
    sections: PrivacySection[];
    contactTitle: string;
    contactLead: string;
    supportLabel: string;
    websiteLabel: string;
  };
};

export const translations: Record<Lang, Translation> = {
  fr: {
    meta: {
      homeTitle:
        "GSheetMailer | Envoyez des emails personnalisés depuis Google Sheets",
      homeDescription:
        "Envoyez des emails personnalisés avec Gmail depuis Google Sheets, sans script et sans complexité technique.",
      privacyTitle: "Politique de confidentialité | GSheetMailer",
      privacyDescription: "Politique de confidentialité de GSheetMailer.",
    },
    nav: {
      sectionsLabel: "Sections",
      langSwitcherLabel: "Choisir la langue",
      backHome: "Retour à l’accueil",
      privacy: "Politique de confidentialité",
    },
    hero: {
      eyebrow: "Emails Gmail simples depuis Google Sheets",
      title: "Envoyez des emails personnalisés sans complexité technique.",
      text: "GSheetMailer vous aide à transformer un simple tableur en workflow email clair, rapide et rassurant. Aucun script, aucune configuration compliquée.",
      primaryCta: "Installer l’extension",
      betaCta: "Demander l’accès bêta",
      secondaryCta: "Lire la politique de confidentialité",
      proof:
        "Installation en 30 secondes • Sans script • Compatible Gmail et Google Workspace",
    },
    why: {
      title: "Pourquoi choisir GSheetMailer",
      items: [
        "Fonctionne avec vos outils Google habituels",
        "Pensé pour les utilisateurs non techniques",
        "Rapide à prendre en main et simple à utiliser",
      ],
    },
    how: {
      title: "Comment ça marche",
      subtitle: "Trois étapes. Zéro friction.",
      stepLabel: "Étape",
      steps: [
        {
          title: "Choississez votre Google Sheet",
          text: "Connectez en toute sécurité le compte Google que vous utilisez déjà avec Gmail.",
        },
        {
          title: "Réglez vos variables",
          text: "Sélectionnez le tableur contenant vos destinataires et vos champs de personnalisation.",
        },
        {
          title: "Rédigez votre message et envoyez vos emails",
          text: "Relisez votre message puis envoyez vos emails sans script ni configuration complexe.",
        },
      ],
    },
    preview: {
      title: "À quoi ça ressemble concrètement",
      text: "Visualisez les 3 étapes dans l’interface de l’extension avant de commencer.",
    },
    video: {
      kicker: "Démo rapide",
      title: "Regardez GSheetMailer en action",
      text: "Une vidéo courte pour comprendre le workflow complet avant de commencer.",
      iframeTitle: "Vidéo explicative GSheetMailer",
      fallback:
        "Ajoutez un lien YouTube valide dans le composant pour afficher la vidéo.",
      cta: "Voir sur YouTube",
    },
    workflow: {
      title: "Un workflow simple et léger",
      cards: [
        {
          title: "Mise en route rapide",
          text: "Commencez rapidement avec une expérience claire et rassurante.",
        },
        {
          title: "Personnalisation facile",
          text: "Utilisez vos données de feuille pour envoyer des messages plus pertinents.",
        },
        {
          title: "Approche minimaliste",
          text: "Pas de backend, pas d’interface lourde, pas de distraction inutile.",
        },
      ],
    },
    benefits: {
      kicker: "Bénéfices",
      title: "Une interface conçue pour vendre sans complexifier",
      itemText:
        "Pensé pour réduire les frictions entre votre feuille et vos envois Gmail.",
    },
    trust: {
      kicker: "Confiance",
      title: "Vos données, vos règles.",
      text: "Le produit reste aligné avec un workflow Google simple, lisible, et rassurant.",
      items: [
        {
          title: "OAuth Google officiel",
          text: "Authentification sécurisée via Google avec un contrôle clair des permissions.",
        },
        {
          title: "Aucun serveur intermédiaire",
          text: "Vos contacts et vos messages restent dans votre environnement Google.",
        },
        {
          title: "Conforme RGPD",
          text: "Approche privacy-first pensée pour les équipes européennes.",
        },
        {
          title: "Politique transparente",
          text: "Documentation claire, sans promesse floue ni jargon inutile.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Les questions avant d’installer",
      items: [
        {
          q: "Combien d'emails puis-je envoyer par jour ?",
          a: "Vous restez sur les limites Gmail standard (500/jour en compte gratuit, plus avec Google Workspace).",
        },
        {
          q: "Faut-il savoir coder ?",
          a: "Non. L'objectif est précisément de supprimer le besoin de scripts.",
        },
        {
          q: "Mes contacts sont-ils stockés sur vos serveurs ?",
          a: "Non, l'envoi et la personnalisation sont pensés pour rester dans votre flux Google.",
        },
        {
          q: "Puis-je personnaliser plus que le prénom ?",
          a: "Oui, chaque colonne de votre feuille peut être utilisée comme variable dans le message.",
        },
      ],
    },
    finalCta: {
      title: "Prêt à envoyer votre première campagne en moins de 5 minutes ?",
      text: "Installation rapide, prise en main immédiate, et un workflow qui reste lisible même pour une petite équipe.",
    },
    blog: {
      title: "Blog SEO multilingue en préparation",
      text: "Consultez nos guides pratiques pour utiliser l’extension facilement.",
      cta: "Lire le blog",
    },
    footer: {
      privacy: "Politique de confidentialité",
      blog: "Blog",
    },
    privacyPage: {
      eyebrow: "Politique de confidentialité",
      title: "Votre confidentialité compte.",
      intro:
        "Cette page explique comment GSheetMailer, le site gsheetmailer.com et l’extension Chrome associée traitent les informations.",
      updated: "Dernière mise à jour : avril 2026",
      sections: [
        {
          title: "1. Introduction",
          paragraphs: [
            "GSheetMailer est une extension Chrome qui aide les utilisateurs à envoyer des emails personnalisés à partir de données stockées dans Google Sheets via leur propre compte Gmail.",
            "Nous nous engageons à protéger la vie privée des utilisateurs et à limiter l’utilisation des données à ce qui est strictement nécessaire au fonctionnement du produit.",
          ],
        },
        {
          title: "2. Données auxquelles nous accédons",
          paragraphs: [
            "GSheetMailer peut accéder aux données Google suivantes lorsque l’utilisateur l’autorise explicitement :",
            "Cet accès est utilisé uniquement pour fournir la fonctionnalité de mail merge demandée.",
          ],
          bullets: [
            "les données Google Sheets sélectionnées par l’utilisateur",
            "la capacité d’envoi Gmail du propre compte de l’utilisateur",
            "les métadonnées Google Drive nécessaires pour identifier les tableurs ou de futures pièces jointes",
          ],
        },
        {
          title: "3. Comment nous utilisons les données",
          paragraphs: [
            "Nous utilisons les données uniquement pour :",
            "Nous n’utilisons pas les données Google des utilisateurs à des fins publicitaires, de profilage, de revente ou d’entraînement de modèles IA.",
          ],
          bullets: [
            "permettre à l’utilisateur de choisir un Google Sheet",
            "lire les lignes et colonnes du tableur sélectionné",
            "générer des emails personnalisés à partir du modèle de l’utilisateur",
            "envoyer les emails via le propre compte Gmail de l’utilisateur",
          ],
        },
        {
          title: "4. Partage des données",
          paragraphs: [
            "Nous ne vendons ni ne transférons les données des utilisateurs à des tiers, sauf si cela est nécessaire pour fournir le service demandé via les API Google ou d’autres fournisseurs approuvés directement liés au produit.",
            "Nous n’utilisons pas les données pour des finalités non liées au service.",
          ],
        },
        {
          title: "5. Stockage des données",
          paragraphs: [
            "Pour le MVP actuel, les données sont principalement traitées localement dans l’extension du navigateur.",
            "Des informations de session ou des préférences temporaires peuvent être stockées localement dans le navigateur pour assurer le bon fonctionnement de l’extension.",
            "Nous ne construisons pas volontairement de base de données centralisée du contenu des emails dans cette version MVP, sauf mention explicite dans une version future.",
          ],
        },
        {
          title: "6. Contrôle utilisateur",
          paragraphs: [
            "Les utilisateurs choisissent eux-mêmes le compte Google à connecter et le tableur à utiliser.",
            "Ils peuvent cesser d’utiliser l’extension à tout moment et révoquer l’accès depuis la page d’autorisations de leur compte Google.",
          ],
        },
        {
          title: "7. Sécurité",
          paragraphs: [
            "Nous prenons des mesures raisonnables pour protéger les données et ne demander que les permissions nécessaires au fonctionnement principal de GSheetMailer.",
          ],
        },
        {
          title: "8. Conformité Google API Services",
          paragraphs: [
            "L’utilisation et le transfert d’informations reçues depuis les API Google par GSheetMailer respectent la Google API Services User Data Policy, y compris les exigences de Limited Use.",
          ],
        },
        {
          title: "9. Modifications de cette politique",
          paragraphs: [
            "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. En cas de changement important, la date affichée en haut de la page sera mise à jour.",
          ],
        },
      ],
      contactTitle: "10. Contact",
      contactLead:
        "Pour toute question liée à la confidentialité, à l’assistance ou aux données, vous pouvez nous contacter :",
      supportLabel: "Email de support",
      websiteLabel: "Site web",
    },
  },
  en: {
    meta: {
      homeTitle: "GSheetMailer | Send personalized emails from Google Sheets",
      homeDescription:
        "Send personalized emails with Gmail from Google Sheets without scripts or technical complexity.",
      privacyTitle: "Privacy Policy | GSheetMailer",
      privacyDescription: "Privacy Policy for GSheetMailer.",
    },
    nav: {
      sectionsLabel: "Sections",
      langSwitcherLabel: "Choose language",
      backHome: "Back to Home",
      privacy: "Privacy Policy",
    },
    hero: {
      eyebrow: "Simple Gmail outreach from Google Sheets",
      title: "Send personalized emails without the technical hassle.",
      text: "GSheetMailer helps you turn a simple spreadsheet into a clean email workflow using Gmail. No scripts, no confusing setup, and no extra complexity.",
      primaryCta: "Install the Extension",
      betaCta: "Request Beta Access",
      secondaryCta: "Read Privacy Policy",
      proof:
        "30-second install • No scripts • Works with Gmail and Google Workspace",
    },
    why: {
      title: "Why people use GSheetMailer",
      items: [
        "Works with familiar Google tools",
        "Built for non-technical users",
        "Fast to set up and easy to trust",
      ],
    },
    how: {
      title: "How it works",
      subtitle: "Three steps. Zero friction.",
      stepLabel: "Step",
      steps: [
        {
          title: "Choose your Google Sheet",
          text: "Securely connect the Google account you already use with Gmail.",
        },
        {
          title: "Set your variables",
          text: "Select the sheet that contains your recipients and personalization fields.",
        },
        {
          title: "Review your message and send tailored emails",
          text: "Review your message and send tailored emails without scripts or setup headaches.",
        },
      ],
    },
    preview: {
      title: "See the product in action",
      text: "These screenshots show the 3 key steps inside the extension experience.",
    },
    video: {
      kicker: "Quick demo",
      title: "See GSheetMailer in action",
      text: "A short walkthrough to understand the full workflow before you start.",
      iframeTitle: "GSheetMailer explainer video",
      fallback:
        "Add a valid YouTube link in the component to display the video.",
      cta: "Watch on YouTube",
    },
    workflow: {
      title: "Built for a clean, simple workflow",
      cards: [
        {
          title: "Clear setup",
          text: "Start quickly with a flow that feels natural and easy to follow.",
        },
        {
          title: "Personal outreach",
          text: "Use spreadsheet data to send more relevant emails with less manual work.",
        },
        {
          title: "Lightweight approach",
          text: "No backend, no bloated interface, and no unnecessary distractions.",
        },
      ],
    },
    benefits: {
      kicker: "Benefits",
      title: "An interface built to sell without adding complexity",
      itemText:
        "Designed to reduce friction between your sheet and Gmail sending.",
    },
    trust: {
      kicker: "Trust",
      title: "Your data, your rules.",
      text: "The product stays aligned with a simple, transparent, and reassuring Google workflow.",
      items: [
        {
          title: "Official Google OAuth",
          text: "Secure Google authentication with clear permission control.",
        },
        {
          title: "No intermediary server",
          text: "Your contacts and messages stay inside your Google environment.",
        },
        {
          title: "GDPR-friendly",
          text: "Privacy-first approach designed for modern teams.",
        },
        {
          title: "Transparent policy",
          text: "Clear documentation with no vague promises and no confusing jargon.",
        },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Questions before you install",
      items: [
        {
          q: "How many emails can I send per day?",
          a: "You stay within standard Gmail limits (500/day on free Gmail, more on Google Workspace).",
        },
        {
          q: "Do I need coding skills?",
          a: "No. The goal is exactly to remove the need for scripts.",
        },
        {
          q: "Are my contacts stored on your servers?",
          a: "No. Sending and personalization are designed to stay in your Google workflow.",
        },
        {
          q: "Can I personalize more than first name?",
          a: "Yes, every column in your sheet can be used as a dynamic variable in your message.",
        },
      ],
    },
    finalCta: {
      title: "Ready to send your first campaign in under 5 minutes?",
      text: "Fast setup, immediate onboarding, and a workflow that stays clear even for a small team.",
    },
    blog: {
      title: "Multilingual SEO blog is live",
      text: "Check our practical guides for using the extension easily.",
      cta: "Visit the blog",
    },
    footer: {
      privacy: "Privacy Policy",
      blog: "Blog",
    },
    privacyPage: {
      eyebrow: "Privacy Policy",
      title: "Your privacy matters.",
      intro:
        "This page explains how GSheetMailer, the website gsheetmailer.com, and the related Chrome extension handle information.",
      updated: "Last updated: April 2026",
      sections: [
        {
          title: "1. Introduction",
          paragraphs: [
            "GSheetMailer is a Chrome extension that helps users send personalized emails from data stored in Google Sheets using their own Gmail account.",
            "We are committed to protecting user privacy and limiting data use to what is strictly necessary to provide the core functionality of the product.",
          ],
        },
        {
          title: "2. Data We Access",
          paragraphs: [
            "GSheetMailer may access the following Google user data when explicitly authorized by the user:",
            "This access is only used to provide the requested mail merge functionality.",
          ],
          bullets: [
            "Google Sheets data selected by the user",
            "Gmail sending capability for the user’s own account",
            "Google Drive file metadata necessary to identify spreadsheets or future attachments",
          ],
        },
        {
          title: "3. How We Use Data",
          paragraphs: [
            "We use data only to:",
            "We do not use Google user data for advertising, profiling, resale, or AI model training.",
          ],
          bullets: [
            "let users choose a Google Sheet",
            "read the selected spreadsheet rows and columns",
            "generate personalized email content using the user’s template",
            "send emails through the user’s own Gmail account",
          ],
        },
        {
          title: "4. Data Sharing",
          paragraphs: [
            "We do not sell or transfer user data to third parties except as necessary to provide the requested service through Google APIs or other approved service providers directly related to the functionality of the product.",
            "We do not use user data for unrelated purposes.",
          ],
        },
        {
          title: "5. Data Storage",
          paragraphs: [
            "For the current MVP, data is primarily processed locally in the browser extension.",
            "Session-related information or temporary preferences may be stored locally in the browser to keep the extension working properly.",
            "We do not intentionally build a centralized database of user email content for the MVP unless explicitly stated in a future version.",
          ],
        },
        {
          title: "6. User Control",
          paragraphs: [
            "Users control which Google account they connect and which spreadsheet they choose to use.",
            "Users may stop using the extension at any time and revoke access from their Google account permissions page.",
          ],
        },
        {
          title: "7. Security",
          paragraphs: [
            "We take reasonable steps to protect data and to request only the permissions necessary for the core functionality of GSheetMailer.",
          ],
        },
        {
          title: "8. Google API Services Compliance",
          paragraphs: [
            "GSheetMailer’s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
          ],
        },
        {
          title: "9. Changes to this Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. If we make material changes, we will update the date at the top of this page.",
          ],
        },
      ],
      contactTitle: "10. Contact",
      contactLead:
        "For privacy-related questions, support requests, or data concerns, users may contact:",
      supportLabel: "Support email",
      websiteLabel: "Website",
    },
  },
};

export function getTranslation(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}

export function getLocalizedPath(lang: Lang, path = "/") {
  const normalized = path === "/" ? "" : path.replace(/^\/+|\/+$/g, "");

  if (lang === defaultLang) {
    return normalized ? `/${normalized}/` : "/";
  }

  return normalized ? `/${lang}/${normalized}/` : `/${lang}/`;
}

export function buildUrl(base: string, lang: Lang, path = "/") {
  const prefix = base === "/" ? "" : base.replace(/\/$/, "");
  return `${prefix}${getLocalizedPath(lang, path)}`;
}
