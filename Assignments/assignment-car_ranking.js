// Instructions:- There are five different car brands
// Mercedes, BMW, Tesla, Cadillac, Ferrari, ranked 1,2,3,4,5 respectively
// All These Brands have a specific rank assigned to them
//Write a program to display a message as, "BMW is on Rank 2", "Tesla is on rank 3" etc
const car = prompt("Please provide car name to check Ranking!!");
const rank = 1;
switch (rank) {
  case 1:
    alert("Mercedes is on Rank 1");
    break;
  case 2:
    alert("BMW is on Rank 2");
    break;
  case 3:
    alert("Tesla is on Rank 3");
    break;
  case 4:
    alert("Cadillac is on Rank 4");
    break;
  case 5:
    alert("Ferrari is on Rank 5");
    break;

  default:
    alert("Ranking not available!!");
}
