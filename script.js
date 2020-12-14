const countWords = () => {
    
    let word = document.getElementById('words').value;
    word = word.split(' ');
    let count = {};
    for (let i =0;i<word.length;i++){
        let num = word[i];
        count[num] = count[num]?count[num]+1:1;
        
    }
    const sortable = Object.fromEntries(
        Object.entries(count).sort(([,a],[,b]) => b-a)
    );
    for(let j=0;j<Object.keys(sortable).length;j++){
        document.getElementById('showData').innerHTML += `<tr><td>${Object.keys(sortable)[j]}</td> <td>${Object.values(sortable)[j]}</td></tr>`
    }
   
}