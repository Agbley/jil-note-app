const fetchNotes = async () => {
  const response = await axios({
    url: "http://127.0.0.1:4300",
    method: "GET",
  });
  const notesList = response.data;

  const notesListTag = document.getElementById("view-note-list");
  console.log(notesListTag);
  for (let i = 0; i < notesList.length; i++) {
    //  noteList[i]; // {notes, author}
    const tag = `
        <li class = "view-note-block">
            <div>${notesList[i].notes}</div>
            <div class="view-note-author">${notesList[i].author}</div>
        </li>
    `;

    notesListTag.innerHTML += tag;
  }
};

fetchNotes();
