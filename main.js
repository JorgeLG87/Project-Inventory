const form = document.querySelector("form");
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", event => {
    event.preventDefault();

    // Fetching the data from the form

    const name = document.querySelector(".name__input").value;
    const author = document.querySelector(".author__input").value;
    const imageUrl = document.querySelector(".image__url").value;
    const price = document.querySelector(".price__input").value;
    
    const mainList = document.querySelector(".main__list");

    // Creating the elements to append the data fetched from the form

    const mainListItem = document.createElement("div");
    mainListItem.setAttribute("class","main__list__item");

    const mainListSubItem = document.createElement("div");
    mainListSubItem.setAttribute("class", "main__list__sub-item");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image-container");

    const image = document.createElement("img");
    image.setAttribute("class", "image-container__image");
    image.setAttribute("src", `${imageUrl}`);

    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "info-container");

    const sublistTitle = document.createElement("h2");
    sublistTitle.innerText = name;

    const hr = document.createElement("hr");
    hr.setAttribute("class", "sublist-underline");

    mainList.append(mainListItem);
    mainListItem.append(mainListSubItem);
    mainListSubItem.append(imageContainer);
    imageContainer.append(image);

    mainListSubItem.append(infoContainer);
    infoContainer.append(sublistTitle);
    infoContainer.append(hr);

    form.reset();
})

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", event => {
    form.reset();
})

