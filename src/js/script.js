// IMPULSE // INNOVATION CATALYST - Centralized Configuration & Interactive Elements

// ============================================================================
// CONFIGURATION - Update all variables here
// ============================================================================
const IMPULSE_CONFIG = {
  // Main project slots
  totalSlots: 8,
  availableSlots: 2,
  currentYear: 2025,

  // Labs capacity
  labsTotal: 8,
  labsOccupied: 6,

  // Performance metrics
  selectionRate: '8.7%',
  systemUptime: '99.99%',
  edgeLatency: '<5ms',

  // Project scale metrics
  agtechScale: '10M+',
  fintechScale: '100M+',
  aerospaceScale: '1000+',

  // Contact information
  contactEmail: 'projects@impulsemtl.ca',
  contactPhone: '+1 (438) 869-6012',
};

// ============================================================================
// CALCULATED VALUES - Auto-generated from config
// ============================================================================
const CALCULATED_VALUES = {
  // Current availability display
  'current-availability': `${IMPULSE_CONFIG.availableSlots}/${IMPULSE_CONFIG.totalSlots} Slots`,

  // Selection rate
  'selection-rate': IMPULSE_CONFIG.selectionRate,

  // System uptime
  'system-uptime': IMPULSE_CONFIG.systemUptime,

  // Current year
  'current-year': IMPULSE_CONFIG.currentYear,

  // Available slots text
  'available-slots-text': IMPULSE_CONFIG.availableSlots,

  // Max projects per year
  'max-projects-per-year': `<span class="highlight">${IMPULSE_CONFIG.totalSlots} projects</span>`,

  // Intake status
  'intake-status': `${IMPULSE_CONFIG.currentYear} INTAKE: ${IMPULSE_CONFIG.availableSlots} slots remaining`,

  // Labs status
  'labs-status': `${IMPULSE_CONFIG.labsOccupied}/${IMPULSE_CONFIG.labsTotal} slots occupied`,

  // Waiting list
  'waiting-list': `${IMPULSE_CONFIG.waitingList} projects on waiting list`,

  // Edge latency
  'edge-latency': IMPULSE_CONFIG.edgeLatency,

  // Project scales
  'agtech-scale': IMPULSE_CONFIG.agtechScale,
  'fintech-scale': IMPULSE_CONFIG.fintechScale,
  'aerospace-scale': IMPULSE_CONFIG.aerospaceScale,

  // Contact info
  'contact-email': IMPULSE_CONFIG.contactEmail,
  'contact-phone': IMPULSE_CONFIG.contactPhone,
};

// ============================================================================
// INITIALIZATION - Populate all dynamic values
// ============================================================================
function initializeValues() {
  // Populate all data-value elements
  Object.keys(CALCULATED_VALUES).forEach((key) => {
    const elements = document.querySelectorAll(`[data-value="${key}"]`);
    elements.forEach((element) => {
      element.innerHTML = CALCULATED_VALUES[key];
    });
  });
}

// ============================================================================
// INTERACTIVE ELEMENTS
// ============================================================================
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all dynamic values first
  initializeValues();

  // Typewriter effect for hero
  const heroCommand = document.querySelector('.hero-command');
  if (heroCommand) {
    const originalText = './execute --systems';
    heroCommand.innerHTML = '';

    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        heroCommand.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        heroCommand.innerHTML += '<span class="cursor"></span>';
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // Glitch effect and click handler for lab items
  document.querySelectorAll('.lab-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const title = item.querySelector('.lab-title');
      const originalText = title.textContent;

      // Brief glitch effect
      title.style.textShadow = '2px 0 #ff4500, -2px 0 #00ffff';
      setTimeout(() => {
        title.style.textShadow = 'none';
      }, 350);
    });

    // Add click handler to show NDA modal
    item.addEventListener('click', () => {
      openNdaModal();
    });
  });
});

// ============================================================================
// UTILITY FUNCTIONS - For easy updates
// ============================================================================

// Function to update availability (call this when slots change)
function updateAvailability(available, total = IMPULSE_CONFIG.totalSlots) {
  IMPULSE_CONFIG.availableSlots = available;
  IMPULSE_CONFIG.totalSlots = total;

  // Recalculate dependent values
  CALCULATED_VALUES['current-availability'] = `${available}/${total} Slots`;
  CALCULATED_VALUES['available-slots-text'] = available;
  CALCULATED_VALUES[
    'intake-status'
  ] = `${IMPULSE_CONFIG.currentYear} INTAKE: ${available} slots remaining`;
  CALCULATED_VALUES[
    'max-projects-per-year'
  ] = `<span class="highlight">${total} projects</span>`;

  // Update DOM
  initializeValues();

  console.log(`✓ Availability updated: ${available}/${total} slots`);
}

// Function to update labs capacity
function updateLabsCapacity(occupied, total = IMPULSE_CONFIG.labsTotal) {
  IMPULSE_CONFIG.labsOccupied = occupied;
  IMPULSE_CONFIG.labsTotal = total;

  CALCULATED_VALUES['labs-status'] = `${occupied}/${total} slots occupied`;

  // Update DOM
  initializeValues();

  console.log(`✓ Labs capacity updated: ${occupied}/${total} slots`);
}

// Function to update waiting list
function updateWaitingList(count) {
  IMPULSE_CONFIG.waitingList = count;
  CALCULATED_VALUES['waiting-list'] = `${count} projects on waiting list`;

  // Update DOM
  initializeValues();

  console.log(`✓ Waiting list updated: ${count} projects`);
}

// ============================================================================
// CONTACT FORM FUNCTIONALITY
// ============================================================================

// Contact form functions
function openContactForm() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeContactForm() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset form
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    if (form) form.reset();
    if (successMessage) successMessage.classList.remove('show');

    hideAllValidationErrors();
  }
}

// ============================================================================
// FORM VALIDATION FUNCTIONS
// ============================================================================

function showValidationError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function hideValidationError(fieldName) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.classList.remove('show');
  }
}

function hideAllValidationErrors() {
  const errorElements = document.querySelectorAll('.validation-error');
  errorElements.forEach((element) => {
    element.classList.remove('show');
  });
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(formData) {
  let isValid = true;
  hideAllValidationErrors();

  // Validate name
  if (!formData.get('name') || formData.get('name').trim() === '') {
    showValidationError('name', 'Name is required');
    isValid = false;
  }

  // Validate email
  const email = formData.get('email');
  if (!email || email.trim() === '') {
    showValidationError('email', 'Email address is required');
    isValid = false;
  } else if (!validateEmail(email)) {
    showValidationError('email', 'Valid email address required');
    isValid = false;
  }

  // Validate subject
  if (!formData.get('subject') || formData.get('subject').trim() === '') {
    showValidationError('subject', 'Project summary is required');
    isValid = false;
  }

  // Validate message
  const message = formData.get('message');
  if (!message || message.trim() === '') {
    showValidationError('message', 'Project details are required');
    isValid = false;
  } else if (message.trim().length < 50) {
    showValidationError(
      'message',
      'Please provide more detailed project information (minimum 50 characters)'
    );
    isValid = false;
  }

  return isValid;
}

function handleFormSubmit() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const successMessage = document.getElementById('successMessage');

  if (!form || !submitBtn || !submitText || !successMessage) return;

  // Get form data and validate
  const formData = new FormData(form);

  // Custom validation
  if (!validateForm(formData)) {
    return; // Stop if validation fails
  }

  // Show loading state
  form.classList.add('loading');
  submitText.innerHTML = '<span class="spinner"></span>Transmitting...';

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  // Simulate API call (replace with your actual endpoint)
  setTimeout(() => {
    // In a real implementation, you'd send this to your backend
    console.log('Form data:', data);

    // Show success message
    form.classList.remove('loading');
    submitText.innerHTML = './send --secure';
    successMessage.classList.add('show');
    hideAllValidationErrors();

    // Reset form after delay
    setTimeout(() => {
      form.reset();
    }, 1000);

    // Auto-close modal after 3 seconds
    setTimeout(() => {
      closeContactForm();
    }, 3000);
  }, 2000); // Simulate network delay
}

function sendMessage(event) {
  event.preventDefault();
  handleFormSubmit();
}

// Event listeners for contact form
document.addEventListener('DOMContentLoaded', function () {
  // Close modal on escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeContactForm();
    }
  });

  // Close modal on outside click
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeContactForm();
      }
    });
  }
});

// ============================================================================
// NDA MODAL FUNCTIONALITY
// ============================================================================

// NDA modal functions
function openNdaModal() {
  const modal = document.getElementById('ndaModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeNdaModal() {
  const modal = document.getElementById('ndaModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openContactFromNda() {
  closeNdaModal();
  setTimeout(() => {
    openContactForm();
  }, 300);
}

// Event listeners for NDA modal
document.addEventListener('DOMContentLoaded', function () {
  // Close NDA modal on escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      const ndaModal = document.getElementById('ndaModal');
      if (ndaModal && ndaModal.classList.contains('active')) {
        closeNdaModal();
      }
    }
  });

  // Close NDA modal on outside click
  const ndaModal = document.getElementById('ndaModal');
  if (ndaModal) {
    ndaModal.addEventListener('click', function (event) {
      if (event.target === ndaModal) {
        closeNdaModal();
      }
    });
  }
});

window.openContactForm = openContactForm;
window.closeContactForm = closeContactForm;
window.sendMessage = sendMessage;
window.handleFormSubmit = handleFormSubmit;
window.openNdaModal = openNdaModal;
window.closeNdaModal = closeNdaModal;
window.openContactFromNda = openContactFromNda;
