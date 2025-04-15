const statusBarElem = document.querySelector('.status-bar')



function onlineConnectionHandler() {
  statusBarElem.classList.remove('offline')
  
  statusBarElem.className += ' online'
  statusBarElem.textContent = 'Connection is live.'
  statusBarElem.classList.remove('hidden')

  setTimeout(() => {statusBarElem.classList.add('hidden')}, 3000)

}


function offlineConnectionHandler() {
  statusBarElem.className += ' offline'
  statusBarElem.textContent = 'No internet connection !'
  statusBarElem.classList.remove('hidden')

}



window.addEventListener('online', onlineConnectionHandler)
window.addEventListener('offline', offlineConnectionHandler)
