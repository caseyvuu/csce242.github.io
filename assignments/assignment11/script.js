const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
  
    try {
      const link = await fetch(url); 
      console.log(link); 
      return await link.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("main-content");
  
    movies.forEach((movie) => {
        moviesSection.append(getMovieItem(movie));
      });
    };
  
  const getMovieItem = (movie) => {
    const moviesSection = document.createElement("section");
    moviesSection.classList.add("style-it");
    moviesSection.classList.add("flex-container");

    const movieInformation = document.createElement("section");
    moviesSection.append(movieInformation);
  
    const p = document.createElement("p");
    movieInformation.append(p);
  
    const h3 = document.createElement("h3");
    h3.innerText = movie.title; 
    p.append(h3);
  
    const p1 = document.createElement("p"); 
    p1.textContent = `Director: ${movie.director}`; 
    p.append(p1); 

    const p2 = document.createElement("p");
    p2.textContent = `Actors: ${movie.actors}`; 
    p.append(p2); 

    const p3 = document.createElement("p");
    p3.textContent = `Year: ${movie.year}`; 
    p.append(p3); 

    const p4 = document.createElement("p");
    p4.textContent = `Genre: ${movie.genres}`; 
    p.append(p4); 
  
    const p5 = document.createElement("p");
    p5.textContent = `${movie.description}`; 
    p.append(p5); 

    const img = document.createElement("img"); 
    img.src = movie.img;
    img.src = `https://portiaportia.github.io/json/${movie.img}`;
    img.classList.add("img-format");
    moviesSection.append(img); 

    img.onmouseover = () => {
        img.classList.add("big-image");
        moviesSection.classList.remove("hidden");
    }

    img.onmouseout = () => {
       img.classList.remove("big-image");
       moviesSection.classList.add("hidden");
    }
  
    return moviesSection;
  };
  
  window.onload = () => showMovies(); 