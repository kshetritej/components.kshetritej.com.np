### Social Share

```ts
const text = 'Description of the link.'
function shareOnFacebook(link: string) {
  const facebookIntentURL = 'https://www.facebook.com/sharer/sharer.php'
  const contentQuery = `?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(text)}`
  const shareURL = facebookIntentURL + contentQuery
  window.open(shareURL, '_blank')
}

function shareOnTwitter(link: string) {
  const twitterIntentURL = 'https://twitter.com/intent/tweet'
  const contentQuery = `?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`
  const shareURL = twitterIntentURL + contentQuery
  window.open(shareURL, '_blank')
}

function shareOnViber(link: string) {
  const url = 'viber://pa?chatURI=' + encodeURIComponent(text + '\n' + link)
  window.open(url, '_blank')
}

function shareOnWhatsApp(link: string) {
  const url = 'https://wa.me/?text=' + encodeURIComponent(text + '\n' + link)
  window.open(url, '_blank')
}

export { shareOnFacebook, shareOnTwitter, shareOnViber, shareOnWhatsApp }
```