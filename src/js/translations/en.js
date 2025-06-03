const en = {
  title: 'IMPULSE // INNOVATION CATALYST',
  hero: {
    prompt: 'innovation@impulse:~$',
    command: './execute --systems',
    output1: 'Building systems that actually work.',
    output2: 'The kind of engineering that keeps systems running at 3AM.',
    available_slots: 'Currently: 2 project slots still open for 2025',
  },
  manifesto: {
    label: '01 // Manifesto',
    text1: 'While others debate the future,',
    text2: 'we build it',
    text3:
      '. Every system, every distributed network, every IoT deployment is a step toward a world where',
    text4:
      "technology doesn't just serve humanity—it amplifies human potential exponentially",
  },

  labs: {
    label: '02 // Innovation Labs',
    title: 'Current Active Projects',
    status: '2 SLOTS REMAINING',
    waiting: 'or waiting-list',
    projects: {
      agtech: {
        category: 'AGTECH',
        title: 'Aerial Reforestation Systems',
        tech: 'UAV Payload • Precision Dispensing • GPS Targeting',
        desc: 'Autonomous drone payload systems for targeted fertilizer deployment across 50,000+ reforestation sites',
      },
      environmental: {
        category: 'ENVIRONMENTAL',
        title: 'Aquatic Intelligence Networks',
        tech: 'Aquatic sensor • Edge Detection • Real-time Analytics',
        desc: 'Advanced payload detection systems for comprehensive environmental intelligence',
      },
      automotive: {
        category: 'AUTOMOTIVE',
        title: 'Autonomous Vehicle Diagnostics',
        tech: 'Mobile native • Computer Vision • Real-time Processing',
        desc: 'High-precision scanning systems for autonomous vehicle validation and performance optimization',
      },
      ai: {
        category: 'AI SYSTEMS',
        title: 'Talent Intelligence Platform',
        tech: 'NLP • Gap Analysis • Predictive Modeling',
        desc: 'AI-driven recruitment analytics identifying skill gaps and optimization opportunities across talent pipelines',
      },
      social: {
        category: 'SOCIAL TECH',
        title: 'Influence Network Architecture',
        tech: 'Graph Analytics • Behavioral Modeling • Real-time Processing',
        desc: 'Advanced platform systems for influence pattern analysis and network effect optimization',
      },
      fintech: {
        category: 'FINTECH',
        title: 'Swarm Testing Infrastructure',
        tech: 'Docker Swarm • Orchestration • Predictive Analytics',
        desc: 'Containerized test environments for large-scale prediction model validation and performance benchmarking',
      },
    },
  },
  stack: {
    label: '03 // Stack',
    title: 'innovation_engine.rs',
    comment: '// Core Systems',
  },
  contact: {
    label: '04 // Connect',
    terminal: {
      title: 'project_application.sh',
      command1: './application --submit-project',
      output1: 'Initializing application protocol...',
      warning: 'WARNING: Only exceptional projects considered',
      command2: 'curl -X POST /evaluate-project',
      headers: {
        complexity: '--header "Technical-Complexity: Maximum"',
        impact: '--header "Industry-Impact: Transformative"',
        scale: '--header "Scale-Ambition: Global"',
      },
      endpoints: 'Application endpoints:',
      email: 'innovation@impulse.systems',
      phone: '+1 (555) IMPULSE',
      compose: 'compose --new-message',
      comment1: '# Click above to launch secure communication channel',
      comment2: '# Note: Include technical specs, scale requirements,',
      comment3: '# and why this project requires our specific expertise',
    },
  },
  form: {
    title: 'secure_message.send',
    success: '✓ Message transmitted successfully!',
    success_desc:
      'Our engineering team will evaluate your project within 48 hours.',
    fields: {
      name: {
        label: '$ whoami --name',
        placeholder: 'Enter your full name',
        error: 'Name is required',
      },
      email: {
        label: '$ echo $EMAIL_ADDRESS',
        placeholder: 'your.email@domain.com',
        error: 'Valid email address required',
      },
      subject: {
        label: '$ cat project_summary.txt',
        placeholder: 'Brief project title/summary',
        error: 'Project summary is required',
      },
      message: {
        label: '$ vim project_details.md',
        placeholder:
          "Technical specifications, scale requirements, timeline, budget range, and why this project requires IMPULSE's expertise...\n\nExample structure:\n- Problem Statement\n- Technical Complexity\n- Scale Requirements  \n- Innovation Impact\n- Timeline & Budget\n- Why IMPULSE?",
        error: 'Project details are required',
      },
    },
    buttons: {
      cancel: 'Cancel',
      submit: './send --secure',
    },
  },
};
