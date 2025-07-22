  function checkAnswers() {
    const answers = {
      q1: "c",
      q2: "c",
      q3: "a",
      q4: "b",
      q5: "b",
      q6: "b",
      q7: "b",
      q8: "a",
      q9: "b",
      q10: "b",
      q11: "b",
      q12: "b",
      q13: "a",
      q14: "b",
      q15: "b"
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
    resultDiv.innerHTML = `<h3>Your score: ${score}/15</h3>` + output;
    resultDiv.style.display = "block";
  }
