const getReviews = async() => {
    try {
        return (await fetch("api/reviews")).json();
    } catch (error) {
        console.log(error);
    }
}

const addReview = async(e) => {
    e.preventDefault();
    const form = document.getElementById("review-form");
    const formData = new FormData(form);
    const dataStatus = document.getElementById("data-status");
    let response;

    if (form._id.value == -1) {
        formData.delete("_id");
        

        console.log(...formData);

        response = await fetch("/api/reviews", {
            method: "POST",
            body: formData
        });
        dataStatus.classList.remove("hidden");
        dataStatus.innerHTML = "Data Successfully Posted!";
        setTimeout(() => {
            dataStatus.classList.add("hidden");
        }, 3000);
    }

    if (response.status != 200) {
        dataStatus.classList.remove("hidden");
        dataStatus.innerHTML = "Error Posting Data!";
        setTimeout(() => {
            dataStatus.classList.add("hidden");
        }, 3000);
        console.log("Error posting data");
    }

    response = await response.json();
    showReviews();
};

const showReviews = async() => {
    let reviews = await getReviews();
    let reviewsDiv = document.getElementById("reviews");
    
    reviews.forEach((review) => {
        const section = document.createElement("section");
        reviewsDiv.append(section);

        const p1 = document.createElement("p");
        p1.innerHTML = review.message;
        section.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = review.name;
        section.append(p2);
    });

    const reviewText = document.querySelector("#reviews");

    let reviewIndex = 0;

    const updateReview = () => {
        console.log(reviewIndex);
        if(reviewIndex == reviews.length){
          reviewIndex = 0;
        }

        reviewText.innerHTML = reviews[reviewIndex].message;
        reviewText.innerHTML += "<br>- " + reviews[reviewIndex].name;
        reviewText.classList.add("style-review-section");

        console.log(reviews);
        reviewIndex++;
    };

    updateReview();

    setInterval(updateReview, 2000);
};

window.onload = () => {
    showReviews();
    document.getElementById("review-form").onsubmit = addReview;
};