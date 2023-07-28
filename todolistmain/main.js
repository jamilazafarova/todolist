const input=document.querySelector('.my_input')
const wrapper = document.querySelector('.wrapper ul')
const btn=document.querySelector('.btn')
const deleted=document.querySelector('.delete_all')



btn.addEventListener('click', () => {
    const li = document.createElement('li');
    const spanText = document.createElement('span')
    const deleteBtn = document.createElement('span');
    li.append(spanText)
    li.append(deleteBtn)
    spanText.textContent = input.value
    deleteBtn.textContent = '-'
    deleteBtn.classList.add("delete")
    deleteBtn.onclick =  function handleClick(event) {
        event.target.parentElement.remove()
      };
    if(input.value != "") {
        input.value=""
        wrapper.append(li)
    }
})


deleted.addEventListener('click', () => {
    wrapper.innerHTML = ""
})