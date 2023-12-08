const url = "/api/v1/notes";
const fileFormDOM = document.querySelector(".file-form");

const nameInputDOM = document.querySelector("#name");
const priceInputDOM = document.querySelector("#price");
const imageInputDOM = document.querySelector("#image");

const containerDOM = document.querySelector(".container");
let notesValue;

imageInputDOM.addEventListener("change", async (e) => {
  const notesFile = e.target.files[0];
  const formData = new FormData();
  formData.append("notes", notesFile);
  try {
    const { data } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    notesValue = data.notes.src;
    console.log(notesValue);
  } catch (error) {
    notesValue = null;
    console.log(error);
  }
});

fileFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInputDOM.value;
  const priceValue = priceInputDOM.value;
  try {
    const product = {
      courseName: nameValue,
      courseDescription: priceValue,
      notes: notesValue,
    };

    await axios.post(url, product);
    // fetchProducts();
  } catch (error) {
    console.log(error);
  }
});
