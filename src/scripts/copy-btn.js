let copyBtnLabel = '/clipboard.svg'
let codeBlocks = Array.from(document.querySelectorAll('pre'))

async function copyCode(block, button) {
  let code = block.querySelector('code')
  let text = code.innerText

  await navigator.clipboard.writeText(text)

  const clipImage = button.querySelector('img')
  clipImage.src = '/check.svg'

  setTimeout(() => {
    clipImage.src = copyBtnLabel
  }, 2000)
}

for (let codeBlock of codeBlocks) {
  let wrapper = document.createElement('div')
  wrapper.style.position = 'relative'

  let copyBtn = document.createElement('button')
  copyBtn.className = 'copy-button'
  let clipImage = document.createElement('img')
  clipImage.setAttribute('src', copyBtnLabel)
  clipImage.className = 'copy-icon'
  copyBtn.appendChild(clipImage)

  codeBlock.setAttribute('tabindex', '0')
  codeBlock.appendChild(copyBtn)

  codeBlock.parentNode.insertBefore(wrapper, codeBlock)
  wrapper.appendChild(codeBlock)

  copyBtn.addEventListener('click', async () => {
    await copyCode(codeBlock, copyBtn)
  })
}
