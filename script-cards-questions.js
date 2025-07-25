let data = [];

fetch('data/cards-words.json')
  .then(response => {
    if (!response.ok) throw new Error("HTTP error: " + response.status);
    return response.json();
  })
  .then(json => {
    data = json;
    renderCards();
  })
  .catch(error => {
    console.error("Failed to load JSON:", error);
  });

function renderCards() {
  const cardGrid = document.getElementById("cardGrid");
  cardGrid.innerHTML = "";
  let totalCount = 0;
  let totalLearned = 0;

  data.forEach((item, index) => {
    totalCount += item.count;
    if (item.learnt) totalLearned++;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="cards-questions">
        <div class="card-front">
          <h2>${item.arabic}</h2>
          <p>${item.translit}</p>
          <input type="text" class="question-input" placeholder="What does this mean?" />
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
      renderCards();
    });
  });
}
// Check if running from file:// protocol, which blocks fetch for local files
if (location.protocol === 'file:') {
    const cardGrid = document.getElementById('cards-questions');
    if (cardGrid) cardGrid.innerHTML = "<p>Error: Please run this page from a web server, not directly from the file system.</p>";
} else {
    fetch('data/cards-words.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const cardGrid = document.getElementById('cards-questions');
            if (!cardGrid) return;
            if (!Array.isArray(data) || data.length === 0) {
                cardGrid.innerHTML = "<p>No questions found.</p>";
                return;
            }
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <h2>${item.arabic || ""}</h2>
                            <p>${item.translit || ""}</p>
                        </div>
                        <div class="card-back">
                            <input type="text" class="question-input" placeholder="What does this mean?" name="answer${index}" data-answer="${item.answer ? item.answer.trim().toLowerCase() : ''}" />
                        </div>
                    </div>
                `;
                cardGrid.appendChild(card);
            });
        })
        .catch(error => {
            const cardGrid = document.getElementById('cards-questions');
            if (cardGrid) cardGrid.innerHTML = "<p>Error loading questions.</p>";
            console.error('Error loading cards-words.json:', error);
        });
}

// Enhanced checkAnswers function
function checkAnswers() {
    const inputs = document.querySelectorAll('.question-input');
    let correct = 0;
    let answered = 0;

    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.getAttribute('data-answer') || '';
        if (userAnswer !== "") answered++;
        if (userAnswer === correctAnswer && correctAnswer !== "") correct++;
    });

    const resultDiv = document.getElementById('mcqResult');
    if (correct === inputs.length && inputs.length > 0) {
        resultDiv.innerText = "🎉 Congratulations! You got 100% correct. Redirecting to dashboard...";
        localStorage.setItem('allah`s sign_complete', 'true');
        setTimeout(() => {
            window.location.href = "student-login.html";
        }, 2000);
    } else {
        resultDiv.innerText = `You answered ${answered} out of ${inputs.length} questions. Correct: ${correct} out of ${inputs.length}.`;
    }
}
