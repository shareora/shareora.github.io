function updateDashboard() {
      const countCells = document.querySelectorAll('.countCell');
      const checkboxes = document.querySelectorAll('.learntCheckbox');

      let totalCounts = 0;
      let totalLearnt = 0;

      countCells.forEach(cell => {
        totalCounts += parseInt(cell.textContent.trim()) || 0;
      });

      checkboxes.forEach(checkbox => {
        if (checkbox.checked) totalLearnt++;
      });

      const totalRows = countCells.length;

      document.getElementById('totalCounts').textContent = totalCounts;
      document.getElementById('totalLearnt').textContent = totalLearnt;
      document.getElementById('totalRows').textContent = totalRows;
      document.getElementById('footerCounts').textContent = totalCounts;
      document.getElementById('footerLearnt').textContent = totalLearnt;
    }

    // Attach change listeners to checkboxes
    document.querySelectorAll('.learntCheckbox').forEach(checkbox => {
      checkbox.addEventListener('change', updateDashboard);
    });

    // Initial calculation
    updateDashboard();