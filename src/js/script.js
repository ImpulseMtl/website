// IMPULSE // INNOVATION CATALYST - Centralized Configuration & Interactive Elements

// ============================================================================
// CONFIGURATION - Update all variables here
// ============================================================================
const IMPULSE_CONFIG = {
  // Main project slots
  totalSlots: 8,
  availableSlots: 3,
  currentYear: 2025,

  // Labs capacity
  labsTotal: 12,
  labsOccupied: 9,
  waitingList: 47,

  // Performance metrics
  selectionRate: '8.7%',
  systemUptime: '99.99%',
  reliabilityPercent: 99.99,
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

  // Reliability percent (for code section)
  'reliability-percent': IMPULSE_CONFIG.reliabilityPercent,

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

  console.log('✓ IMPULSE Configuration loaded successfully');
  console.log(
    `✓ Available slots: ${IMPULSE_CONFIG.availableSlots}/${IMPULSE_CONFIG.totalSlots}`
  );
  console.log(
    `✓ Labs capacity: ${IMPULSE_CONFIG.labsOccupied}/${IMPULSE_CONFIG.labsTotal}`
  );
  console.log(`✓ Waiting list: ${IMPULSE_CONFIG.waitingList} projects`);
}

// ============================================================================
// INTERACTIVE ELEMENTS
// ============================================================================
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all dynamic values first
  initializeValues();

  // Typewriter effect for hero
  const heroCommand = document.querySelector('.hero-command');
  const originalText = './execute --breakthrough-systems';
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

  // Glitch effect on lab items
  document.querySelectorAll('.lab-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const title = item.querySelector('.lab-title');
      const originalText = title.textContent;

      // Brief glitch effect
      title.style.textShadow = '2px 0 #ff4500, -2px 0 #00ffff';
      setTimeout(() => {
        title.style.textShadow = 'none';
      }, 250);
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
