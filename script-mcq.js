  function checkAnswers() {
    const answers = {
      q1: "b",
      q2: "a",
      q3: "b",
      q4: "c"
    };

    let score = 0;
    let output = "";

    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected) {
        if (selected.value === answers[key]) {
          score++;
          output += `<p class="correct">✅ Question ${key.slice(1)} is correct</p>`;
        } else {
          output += `<p class="wrong">❌ Question ${key.slice(1)} is wrong (Correct: ${answers[key]})</p>`;
        }
      } else {
        output += `<p class="wrong">⚠️ Question ${key.slice(1)} was not answered</p>`;
      }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Your score: ${score}/4</h3>` + output;
    resultDiv.style.display = "block";
  }
