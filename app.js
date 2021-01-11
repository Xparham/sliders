const tableMenu = document.getElementById("find-menu")
const formModal = document.getElementById("form-modal")
const bookTablebtn = document.getElementById("book-table-btn")
const closeModal = document.getElementById("close-modal")

tableMenu.addEventListener('click', function(){
    // .show-list
    document.body.classList.toggle('show-list')
    // tableMenu.classList.add('some-random-class')
    // console.log(document.body.classList)
})

// formModal.addEventListener('click', function(){




// })

bookTablebtn.addEventListener('click', function(){
    formModal.classList.remove('hidden')


})

closeModal.addEventListener("click", function(){
    formModal.classList.add('hidden')

})