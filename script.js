document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();


  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); 
  });

  
  checkVotingEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});

