/**
 * GAIA 2.0 - Field Deployment & Technical Reports Controller
 * Supports telemetry search, filtering, copy GPS, and interactive tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  // Table search filter
  const searchInput = document.getElementById('telemetrySearch');
  const tableRows = document.querySelectorAll('#telemetryTableBody tr');

  if (searchInput && tableRows.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // Node filter buttons in telemetry section
  const nodeFilters = document.querySelectorAll('.node-filter-btn');
  if (nodeFilters.length > 0) {
    nodeFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        nodeFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedNode = btn.getAttribute('data-node');
        tableRows.forEach(row => {
          const rowNode = row.getAttribute('data-node');
          if (selectedNode === 'all' || rowNode === selectedNode) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // Quick Copy GPS Helper
  document.querySelectorAll('.copy-gps-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const coords = btn.getAttribute('data-coords');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(coords).then(() => {
          const origText = btn.innerHTML;
          btn.innerHTML = '✓ Copied';
          btn.style.color = 'var(--accent-neon)';
          setTimeout(() => {
            btn.innerHTML = origText;
            btn.style.color = '';
          }, 1800);
        });
      }
    });
  });
});
