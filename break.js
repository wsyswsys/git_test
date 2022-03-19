/*
to check in contact list

contact arrays
input value
to catch with variable  for input value and change lowerCase

button click

to show result (if found in contact list , show Name and Phone Number)
if not found, show (contact not found)

*/

const contacts = ['Chris:22332322','Sarah:3453456','Bill:7654322','Mary:9998769','Dianne: 9384975']

        const para = document.querySelector('p')
        const input = document.querySelector('input')
        const btn = document.querySelector('button')

        btn.addEventListener('click',() =>{
            //input value to change lowerCase
            const searchName = input.value.toLowerCase();
            //clear input value
            input.value = '';
            //focus input text
            input.focus();

            para.textContent=' ';
            for(const contact of contacts){

                //each of element in contacts array split with ':'
                
                const splitContact = contact.split(':'); 

                if(splitContact[0].toLowerCase === searchName){
                    para.textContent = splitContact[0] + '\'s number is '+ splitContact[1]+ '.';
                    break;
                }
                if(para.textContent === ' '){
                    para.textContent='Contact not found.'
                }
            }
        })