const express = require("express");
const router = express.Router();

const mprEnemies = [
 {
    name: "Rita Repulsa",
    role: "Main villain",
    powers: "Magic and manipulation of monsters",
    henchmen: ["Goldar", "Squatt", "Baboo"]
  },
{
    name: "Lord Zedd",
    role: "Main villain",
    powers: "Control over dark magic and monsters",
    henchmen: ["Goldar", "Rito Revolto", "Finster"]
  },
{
    name: "Master Vile",
    role: "Main villain",
    powers: "Control over time and monsters",
    henchmen: ["Rito Revolto", "Finster", "Tengu Warriors"]
  }
]

const powerRangers =[
{
  name: "Jason",
  role: "Red Ranger",
  power: "Super strength and agility",
  animal: "Tyrannosaurus",
  color: "Red"
  },
  {
  name: "Zack",
  role: "Black Ranger",
  power: "Super strength and speed",
  animal: "Mastodon",
  color: "Black"
  },
  {
  name: "Trini",
  role: "Yellow Ranger",
  power: "Super strength and endurance",
  animal: "Sabretooth Tiger",
  color: "Yellow"
  },
  {
  name: "Billy",
  role: "Blue Ranger",
  power: "Super intelligence and technical skills",
  animal: "Triceratops",
  color: "Blue"
  },
  {
  name: "Kimberly",
  role: "Pink Ranger",
  power: "Super agility and accuracy",
  animal: "Pterodactyl",
  color: "Pink"
  },
  {
  name: "Tommy",
  role: "Green Ranger",
  power: "Super strength and heightened senses",
  animal: "Dragonzord",
  color: "Green"
  }
]
router.get("/", (req, res) => {

    res.render("home", { name: "Jason" , loggedIn: true });
});

router.get("/villains", (req, res) => {
    res.render("villains", { villains: mprEnemies , loggedIn:true});
});

router.get("/rangers", (req, res) => {
    res.render("rangers", { rangers: powerRangers , loggedIn:true});
});

module.exports = router;