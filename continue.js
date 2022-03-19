let num=10

for(let i=0; i<= num; i++){
    let sqRoot = Math.sqrt(i)
    //console.log(sqRoot)
    if(Math.floor(sqRoot) !== sqRoot){
        //console.log( sqRoot)
        continue;
    }
    //console.log(i)
}

const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
        //const list=document.querySelector('.cityOutput ul');
        //list.innerHTML = '';
        for(const city of cities){
           let  lowerCity=city.toLowerCase();
            let firstLetter=lowerCity.slice(0,1);
            let firstCapitalLetter= lowerCity.replace(firstLetter, firstLetter.toUpperCase())
            let result = firstCapitalLetter
            //console.log(result)

        }


        //to extract characters

        let codeNumStr ='MAN675847583748sjt567654;Manchester Piccadilly'

        let newThreeLetterCode = codeNumStr.slice(0,3)
        console.log(newThreeLetterCode)
        let newStationAddress=codeNumStr.split(';');
        console.log(newStationAddress[1])