// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fFWRHAeCL._AC_UF894,1000_QL80_.jpg", "https://ntvb.tmsimg.com/assets/p446158_b_h8_aj.jpg?w=1280&h=720", "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"];
console.log(comedy);

let horror = ["https://img3.hulu.com/user/v3/artwork/7c4e9846-27b9-451c-8145-b193ec667086?base_image_bucket_name=image_manager&base_image=a0d07e3d-02a4-4595-94e7-1068eaebbd17&region=US&format=jpeg&size=952x536", "https://img3.hulu.com/user/v3/artwork/7c4e9846-27b9-451c-8145-b193ec667086?base_image_bucket_name=image_manager&base_image=a0d07e3d-02a4-4595-94e7-1068eaebbd17&region=US&format=jpeg&size=952x536", "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-boy-2016/large_The-Boy-poster-2016.jpg"];
console.log(horror);
let action = ["https://occ-0-7312-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQJqvoL0wzz3TvMVCC378SeNOP0Lb2Bj6t7QsXuQdqH3E61zLxDY7uTlvWmNF9r3yPTHVx0sVePKm9k77nMrzBK-uOHbeVv2xyFd.jpg?r=01d", "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91ebheNmoUL._RI_.jpg", "https://i.ytimg.com/vi/aKBXKdB40TY/maxresdefault.jpg"];
console.log(action);


// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");

// Submit Button
let submitButton = document.querySelector(".b1");
submitButton.onclick = function() {
        let genreInput = document.querySelector(".i1").value;
        if (genreInput === "comedy") {
            for (let comedyMovie of comedy) {
                let img = "<img src=" + comedyMovie + ">";
                result.insertAdjacentHTML("beforeend", img);
            }
        } else if (genreInput === "action") {
            for (let actionMovie of action) {
                let img = "<img src=" +
                    actionMovie + ">";
                result.insertAdjacentHTML("beforeend", img);

         
            }
            }else if (genreInput === "Horror") {
            for (let HorrorMovie of horror) {
                let img = "<img src=" +
                    HorrorMovie + ">";
                result.insertAdjacentHTML("beforeend", img);
}
            }
};
let suggestBotton = document.querySelector(".b2");
suggestBotton.onclick = function(){
    let suggestInput= document.querySelector (".i2").value;
    comedy.push(suggestInput);
  action.push (suggestInput);
  horror.push(suggestInput);
    let img = "<img src=" + suggestInput + ">";
   result.insertAdjacentHTML("beforeend" , img);
};