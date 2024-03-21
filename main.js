// Variables to be used later on




const form = document.querySelector("form");

const submitButton = document.querySelector(".submit-button");
form.addEventListener("submit", event => {
    event.preventDefault();

    // Fetching the data from the form
    
    const name = document.querySelector(".name__input").value;
    console.log(name);

    const author = document.querySelector(".author__input").value;
    console.log(author);

    const imageUrl = document.querySelector(".in-stock__dropdown").value;
    console.log(imageUrl);

    const price = document.querySelector(".price__input").value;
    console.log(price);
    
    const quantityStock = document.querySelector(".quantity-available").value;
    quantityStock2 = Number(quantityStock);

    let availableTickets = quantityStock2;

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

    if (imageUrl === "american-airlines") {
        image.setAttribute("src", "./images/American-Airlines-Logo.png");
    } else if (imageUrl === "united-airlines") {
        image.setAttribute("src", "https://www.bcdtravel.com/move-global/wp-content/uploads/sites/142/Move_Global_Spotlight_UnitedAirlines_logo_April2018.png")
    } else if (imageUrl === "delta") {
        image.setAttribute("src", "./images/Delta-Logo.jpg");
    }

    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "info-container");

    const departures = document.createElement("div");
    departures.setAttribute("class", "departures");

    const iconContainer = document.createElement("div");
    iconContainer.setAttribute("class", "icon-container");

    const icon = document.createElement("img");
    icon.setAttribute("class", "icon");
    icon.setAttribute("src", "./images/departures.png");

    const subListContainer = document.createElement("div");
    subListContainer.setAttribute("class", "sublist-title-container");

    const sublistTitle = document.createElement("h2");
    sublistTitle.setAttribute("class", "sublist-title");
    sublistTitle.innerText = name;

    const hr = document.createElement("hr");
    hr.setAttribute("class", "sublist-underline");

    

    const price2 = document.createElement("p");
    price2.innerText=`$${price}`;

    const availableTick = document.querySelector(".availableTick");
    availableTick.innerText = `${availableTickets}`;

    mainList.append(mainListItem);
    mainListItem.append(mainListSubItem);
    mainListSubItem.append(imageContainer);
    imageContainer.append(image);

    mainListSubItem.append(infoContainer);
    infoContainer.append(departures);
    departures.append(iconContainer);
    iconContainer.append(icon);
    departures.append(subListContainer);
    subListContainer.append(sublistTitle);
    infoContainer.append(hr);
    
    const arrivals = document.createElement("div");
    arrivals.setAttribute("class", "departures");

    const iconContainer2 = document.createElement("div");
    iconContainer.setAttribute("class", "icon-container");

    const icon2 = document.createElement("img");
    icon2.setAttribute("class", "icon2");
    icon2.setAttribute("src", "./images/arrivals.png");

    const subListContainer2 = document.createElement("div");
    subListContainer.setAttribute("class", "sublist-title-container");

    const to = document.createElement("h3");
    to.setAttribute("class", "sublist-author");
    to.innerText = author;

    infoContainer.append(arrivals);
    arrivals.append(iconContainer2);
    iconContainer2.append(icon2);
    arrivals.append(subListContainer2);
    subListContainer2.append(to);


    infoContainer.append(price2);
    infoContainer.append(availableTick);

    const inStock = document.createElement("p");
    inStock.setAttribute("class", "in-stock1");
    inStock.innerText = "In Stock";

    if (quantityStock2 > 0) {
        inStock.style.textDecoration = "none";
    } else {
        inStock.style.textDecoration = "line-through";
    }

    infoContainer.append(inStock);

    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove-button");
    removeBtn.setAttribute("type", "click");
    removeBtn.innerText = "Quantity Sold";

    infoContainer.append(removeBtn);
    form.reset();
})

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", event => {
    form.reset();
})

const removeBtn = document.querySelector(".remove-button");
removeBtn.addEventListener("click", event => {
    const soldBox = document.querySelector(".sold-box");
    soldBox.style.display = "flex";

    let availableTick2 = document.querySelector(".availableTick").value;

    const ok = document.querySelector(".sold-btn");
    ok.addEventListener("click", event => {
        const currentQuantity = document.querySelector(".availableTick");
        const quantitySold = document.querySelector(".quantity-sold").value;
        quantitySold2 = Number(quantitySold);

        let availableTick3 = availableTick2 - quantitySold2;

        currentQuantity.innerText = availableTick3;

        event.target.parentNode.reset();
        soldBox.style.display = "none";
        
    })
})


