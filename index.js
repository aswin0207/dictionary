function search () {
    word0=word.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word0}`)
    .then(data => data.json()).then(data=>display(data))
}
function display(meaning) {
    word1=meaning[0].word
    defenition1=meaning[0].meanings[0].definitions[0].definition

    result.innerHTML=`
    <div  class="w-4/5 p-5 rounded-lg text-justify mx-auto border border-amber-400 shadow shadow-lg shadow-slate-700 bg-stone-700">
        <p class="text-amber-400 underline uppercase text-center font-bold text-3xl mt-3">${word1}</p>
        <p class="text-center text-lg mt-1 text-yellow-200">${defenition1}</p> 
    </div>
`
}