const fileInput = document.querySelector('.file')

const preview = document.querySelector('.preview')

fileInput.addEventListener('change', ()=> {
    const fr = new FileReader()
    fr.readAsText(fileInput.files[0]) // read the selected file via the input element

    fr.addEventListener('load', ()=>{ // 'load' = on sucessful completion of reading file
        preview.textContent = fr.result // place the file content in preview div
    })
})