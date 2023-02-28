// Function to read the quote of the day from Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readQuote(day) {
    db.collection("quotes").doc(day).onSnapshot(tuesdayDoc => {                                                               
           console.log("current document data: " + tuesdayDoc.data());                          
           document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      
      })
}
readQuote("tuesday");        
