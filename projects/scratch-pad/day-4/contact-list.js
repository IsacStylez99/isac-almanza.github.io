// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //making contacts an empty array container
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){ //pushing contact to contacts
            contacts.push(contact);
    }, 
    findContact: function(fullName){
     for (var i = 0; i < contacts.length; i ++){ //iterate over contacts
        if (`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName){ //if nameFirst + nameLast == fullName 
            return (contacts[i]); //return the contacts
        }
      }
    },
    removeContact: function(contact){
        for (var i = 0; i < contacts.length; i ++){ //iterate over contacts
            if (contacts[i] === contact){ //if contacts === contact 
                return contacts.splice(0, 1); //remove contact
            }
        }
    },
    printAllContactNames: function(){
        var name = ""; //create variable for names 
        for (var i = 0; i < contacts.length; i++){ //iterating over contacts 
            if(name !== ""){ //if name is not empty 
             name += '\n' //create line break
            }
         name += `${contacts[i].nameFirst} ${contacts[i].nameLast}`; // reassign name to nameFirst + nameLast
         }
         console.log(name);
         return name; //return name
    }
}
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
