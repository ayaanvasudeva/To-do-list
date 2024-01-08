import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
let wday = "nothing"
let noteL = []
let n = 0
let note1 = "note1"
let note2 = "note2"
let note3 = "note3"
let note4 = "note4"
let note5 = "note5"
let note6 = "note6"
let note7 = "note7"
let note8 = "note8"
let note9 = "note9"
let note10 = "note10"
const d = new Date();
const date = d.getDate();
const day = d.getDay();
const month = d.getMonth();
if (day === 0){ 
   wday = "Sunday" 
} 
if (day === 1){ 
   wday = "Monday" 
 } 
if (day === 2){ 
   wday = "Tuesday" 
 } 
if (day === 3){ 
   wday = "Wednesday" 
 } 
if (day === 4){ 
   wday = "Thursday" 
} 
if (day === 5){
 wday = "Friday" 
 } 
if (day === 6){ 
  wday = "Saturday" 
} 
let monthsY = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
let finalM = monthsY[month]
//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

er
// showing static files
app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.render("index.ejs", {month:finalM, date: date, day: wday});
});

app.post("/submit", (req, res) => {

let note = req.body.note
if (n < 10){
  n += 1
}else{
  n = 1
}
note = note.slice(0,23);
note = " " + note + " "
noteL.push(note)
if (n === 1){
  note1 = note
}
if (n === 2){
  note2 = note
}
if (n === 3){
  note3 = note
}
if (n === 4){
  note4 = note
}
if (n === 5){
  note5 = note
}
if (n === 6){
  note6 = note
}
if (n === 7){
  note7 = note
}
if (n === 8){
  note8 = note
}
if (n === 9){
  note9 = note
}
if (n === 10){
  note10 = note
}else{
  console.log(n)
  console.log(note)
  console.log(note1)
}
  res.render("end.ejs", {month:finalM, date: date, day: wday, note:note, n: n, note1:note1, note2:note2, note3:note3, note4:note4, note5:note5, note6:note6,note7:note7,note8:note8,note9:note9,note10:note10} );
  
 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});