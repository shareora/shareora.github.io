    const data = [
      { arabic: "أَجْمَعِين", translit: "ajmain", english: "all", count: 26, learnt: false },
      { arabic: "مَلَك", translit: "malak", english: "angel", count: 88, learnt: false },
      { arabic: "شَرِيك", translit: "sharik", english: "associate", count: 40, learnt: false },
      { arabic: "سُلْطَان", translit: "sulthan", english: "authority", count: 37, learnt: false },
      { arabic: "كِتَاب", translit: "kitaab", english: "book", count: 261, learnt: false },
      { arabic: "أُمَّة", translit: "umma", english: "comunity", count: 64, learnt: false },
      { arabic: "مِيثَاق", translit: "mithaq", english: "covenant", count: 25, learnt: false },
      { arabic: "مُجْرِم", translit: "mujrim", english: "criminal", count: 52, learnt: false },
      { arabic: "كُفَّار", translit: "kuffar", english: "disbeliever", count: 21, learnt: false },
      { arabic: "عَدُوّ", translit: "aduw", english: "enemy", count: 44, learnt: false },
      { arabic: "إِله", translit: "ilh", english: "God", count: 34, learnt: false },
      { arabic: "وَلِي", translit: "wali", english: "guardian", count: 86, learnt: false },
      { arabic: "مَلَأ", translit: "mala'", english: "leaders", count: 22, learnt: false },
      { arabic: "أحَد", translit: "ahad", english: "one", count: 85, learnt: false },
      { arabic: "وَاحِد", translit: "wahid", english: "one", count: 61, learnt: false },
      { arabic: "ذَكَر", translit: "dhakar", english: "male", count: 16, learnt: false },
      { arabic: "إِنْسَان", translit: "insan", english: "man", count: 65, learnt: false },
      { arabic: "عَهْد", translit: "'ahd'", english: "pact", count: 29, learnt: false },
      { arabic: "قَوْم", translit: "qawm", english: "people", count: 383, learnt: false },
      { arabic: "زَوْج", translit: "zawj", english: "spouse", count: 76, learnt: false },
      { arabic: "عَرْش", translit: "'arsh'", english: "throne", count: 26, learnt: false },
      { arabic: "غَيْب", translit: "'ghayb'", english: "unseen", count: 49, learnt: false },
      { arabic: "شَهَادَة", translit: "'shahadat'", english: "witness", count: 26, learnt: false },
      { arabic: "اِمْرَأَة", translit: "'aimraa'at'", english: "woman", count: 83, learnt: false },
      { arabic: "كَلِمَة", translit: "'kalima'", english: "word", count: 42, learnt: false },
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
