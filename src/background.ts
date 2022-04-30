chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  console.log('reason:', reason)

  if (reason === 'install') {
    console.log('on install')

    chrome.tabs.create({
      url: 'onboarding.html'
    })
  } else if (reason === 'update') {
    console.log('on update')
    chrome.tabs.create({
      url: 'onboarding.html'
    })
  }
})
