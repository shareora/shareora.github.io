    const data = [
      { arabic: "أَجْمَعِين", translit: "ajmain", english: "all", count: 26, learnt: false },
      { arabic: "مَلَك", translit: "malak", english: "angel", count: 88, learnt: false },
      { arabic: "شَرِيك", translit: "sharik", english: "associate", count: 40, learnt: false },
      { arabic: "سُلْطَان", translit: "sulthan", english: "authority", count: 37, learnt: false },
      // Add more rows here
    ];

    const cardGrid = document.getElementById("cardGrid");

    function renderCards() {
      cardGrid.innerHTML = "";
      let totalCount = 0;
      let totalLearned = 0;

      data.forEach((item, index) => {
        totalCount += item.count;
        if (item.learnt) totalLearned++;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-inner">
            <div class="card-front">
              <h2>${item.arabic}</h2>
              <p>${item.translit}</p>
            </div>
            <div class="card-back">
              <p><strong>English:</strong> ${item.english}</p>
              <p><strong>Count:</strong> ${item.count}</p>
              <label><input type="checkbox" class="checkbox" data-index="${index}" ${item.learnt ? "checked" : ""}/> Learnt</label>
            </div>
          </div>
        `;
        cardGrid.appendChild(card);
      });

      document.getElementById("totalRows").innerText = data.length;
      document.getElementById("totalCount").innerText = totalCount;
      document.getElementById("totalLearned").innerText = totalLearned;

      document.querySelectorAll(".checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
          const i = e.target.getAttribute("data-index");
          data[i].learnt = e.target.checked;
          renderCards(); // Refresh dashboard
        });
      });
    }

    renderCards();
