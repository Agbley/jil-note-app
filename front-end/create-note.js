const createNotes = async () => {
  const notesText = document.getElementById("note-text").value;
  const authorText = document.getElementById("author-text").value;

  const response = await axios({
    url: "https://mawunya-noteapp-32b2535329b1.herokuapp.com/",
    method: "POST",
    data: {
      notes: notesText,
      author: authorText,
    },
  });

  if (response.data === true) {
    alert("Note successfully saved!");
  } else {
    alert("Something wrong happened");
  }

  console.log(response);
};
