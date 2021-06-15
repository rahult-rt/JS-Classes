// lion,tiger,rhino --> This are zoo animals

//dog, cat,fish --> These are pet animals

//fox,cheetah --> These are wild animals
const animal = "rhino";

switch (animal) {
  case "lion":
  case "tiger":
  case "rhino":
    console.log("This are zoo animals");
    break;

  case "dog":
  case "cat":
  case "fish":
    console.log("These are pet animals");
    break;

  case "fox":
  case "cheetah":
    console.log("These are wild animals");
    break;
}
