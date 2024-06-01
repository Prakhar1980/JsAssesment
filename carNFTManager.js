/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


// 1.create a variable to hold your NFT's


const minNFT = [];

// 2. This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(_name, _company, _year,_color) {
    const carNft = {
        "name": _name,
        "company": _company,
        "year": _year,
        "color":_color
    };
    minNFT.push(carNft);                               // Adds the carNft object to the minNFT array. 
    console.log("Minted: " +_name);
    console.log("---------");                          //provide space ---
}

// 3. Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listminNFT() {                               //function list all NFTs.
    for (let i = 0; i < minNFT.length; i++) {
        console.log("NFT ID Number: \t" + (i + 1));   //Logs the ID number of the NFT.
        console.log("Name: \t" + minNFT[i].name);
        console.log("Shirt Color: \t" + minNFT[i].company);
        console.log("Cap Color: \t" + minNFT[i].year);
        console.log("Theme: \t" + minNFT[i].color);
        console.log("---------");
        
    }
}

// 4. Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total car NFTs minted is: " + minNFT.length);    //it log the total number of NFTs minted.
    console.log("---------");   
}

// Call your functions below this line
mintNFT("Mustang", "Ford", "1965", "Black");   //create and mint the NFT's with the specified attributes.
mintNFT("Model S", "Tesla", "2020", "white");
mintNFT("civic", "Honda", "2018", "Blue");
mintNFT("fortuner", "Toyota", "2021", "yellow");

listminNFT();        //Calls the listminNFT function to list all the minted NFTs and their metadata.
getTotalSupply();    //Calls the getTotalSupply function to log the total number of NFTs minted.
