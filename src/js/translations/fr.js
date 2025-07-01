const fr = {
  title: "IMPULSE // CATALYSEUR D'INNOVATION",
  hero: {
    prompt: 'innovation@impulse:~$',
    command: './execute --systemes',
    available_slots:
      "Actuellement : 2 créneaux d'innovations encore ouverts pour 2025",
  },

  manifesto: {
    label: '01 // Manifeste',
    text1:
      "La plupart des projets d'innovation échouent car ils privilégient la complexité sur la fiabilité.",
    text2: 'Nous construisons des systèmes qui fonctionnent',
    text3: '. À grande échelle. Sous pression. Quand ça compte.',
    text4:
      "L'excellence technique ne consiste pas à utiliser le dernier framework—mais à résoudre de vrais problèmes avec des solutions durables.",
  },

  labs: {
    label: "02 // Laboratoires d'Innovation",
    title: 'Projets Actifs',
    status: '2 CRÉNEAUX RESTANTS',
    waiting: "ou liste d'attente",
    projects: {
      agtech: {
        category: 'AGTECH',
        title: 'Systèmes de Reforestation Aérienne',
        tech: 'Charge Utile UAV • Dispensation Précise • Ciblage GPS',
        desc: "Systèmes de charge utile de drones autonomes pour déploiement ciblé d'engrais sur plus de 50 000 sites de reforestation",
      },
      environmental: {
        category: 'ENVIRONNEMENTAL',
        title: "Système d'Intelligence Aquatique",
        tech: 'Capteur Aquatique • Détection Edge • Analytiques Temps Réel',
        desc: "Systèmes avancés de détection pour de l'intelligence environnementale.",
      },
      automotive: {
        category: 'AUTOMOBILE',
        title: 'Diagnostics automatique de Véhicules',
        tech: 'Mobile Natif • Vision par Ordinateur • Traitement Temps Réel',
        desc: 'Systèmes de scanning haute précision pour validation de véhicules',
      },
      ai: {
        category: 'SYSTÈMES IA',
        title: "Plateforme d'Intelligence des Talents",
        tech: 'NLP • Analyse des Lacunes • Modélisation Prédictive',
        desc: "Analytiques de recrutement pilotées par IA identifiant les lacunes de compétences et opportunités d'optimisation dans les pipelines de talents",
      },
      social: {
        category: 'TECH SOCIALE',
        title: "Réseaux d'Influence",
        tech: 'Analytiques de Graphes • Modélisation Comportementale • Traitement Temps Réel',
        desc: "Systèmes de plateforme avancés pour l'analyse des modèles d'influence et l'optimisation des effets de réseau",
      },
      fintech: {
        category: 'FINTECH',
        title: 'Infrastructure de Tests',
        tech: 'Docker Swarm • Orchestration • Analytiques Prédictives',
        desc: 'Environnements de test conteneurisés pour validation de modèles de prédiction à grande échelle et benchmarking de performance',
      },
    },
  },
  contact: {
    label: '03 // Connexion',
    terminal: {
      title: 'candidature_projet.sh',
      command1: './candidature --soumettre-projet',
      output1: 'Initialisation du protocole de candidature...',
      command2: 'curl -X POST /evaluer-projet',
      headers: {
        complexity: '--header "Complexité-Technique: Maximum"',
        impact: '--header "Impact-Industriel: Transformateur"',
        scale: '--header "Ambition-Échelle: Mondiale"',
      },
      endpoints: 'Points de terminaison de candidature :',
      email: 'pierre@impulsemtl.ca',
      compose: 'composer --nouveau-message',
      comment1: '# Cliquez ci-dessus pour envoyer votre proposition de projet',
      comment2:
        "# Note : Incluez les spécifications techniques, exigences d'échelle,",
      comment3: '# et pourquoi ce projet nécessite notre expertise spécifique',
    },
  },
  form: {
    title: 'message_sécurisé.envoyer',
    success: '✓ Message transmis avec succès !',
    success_desc:
      "Notre équipe d'ingénierie évaluera votre projet dans les 48 heures.",
    fields: {
      name: {
        label: '$ whoami --nom',
        placeholder: 'Entrez votre nom complet',
        error: 'Le nom est requis',
      },
      email: {
        label: '$ echo $ADRESSE_EMAIL',
        placeholder: 'votre.email@domaine.com',
        error: 'Une adresse email valide est requise',
      },
      subject: {
        label: '$ cat résumé_projet.txt',
        placeholder: 'Titre/résumé bref du projet',
        error: 'Le résumé du projet est requis',
      },
      message: {
        label: '$ vim détails_projet.md',
        placeholder:
          "Spécifications techniques, exigences d'échelle, calendrier, gamme de budget, et pourquoi ce projet nécessite l'expertise d'IMPULSE...\n\nStructure d'exemple :\n- Énoncé du Problème\n- Complexité Technique\n- Exigences d'Échelle\n- Impact d'Innovation\n- Calendrier et Budget\n- Pourquoi IMPULSE ?",
        error: 'Les détails du projet sont requis',
      },
    },
    buttons: {
      cancel: 'Annuler',
      submit: './envoyer',
    },
  },
  nda: {
    title: 'divulgation_projet.sh',
    headline: 'Accès Projet : NDA Requis',
    message1:
      'Tous les projets actifs sont protégés par des accords de non-divulgation.',
    message2:
      'Nous serions ravis de discuter des détails du projet avec des partenaires qualifiés.',
    action_text: 'Prendre Contact',
    footer: '# Protocoles de confidentialité actifs',
  },
};
