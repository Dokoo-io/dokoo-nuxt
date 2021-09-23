# Dokoo Nuxt Integration

## Installation

```
yarn add @dokoo/nuxt
```

Register the module in your `nuxt.config.js`:

```javascript
export default {
  modules: [
    '@dokoo/nuxt'  
  ],
  dokoo: {
    clients: {
      myCms: {
        spaceId: '<your-space-id',
        token: '<your-access-token>'
      }
    }      
  } 
}
```

## Usage 
You are ready to go! Use it in any of your component:

```javascript
export default {
  data () {
    return {
      hits: []
    }
  },
  async fetch () {
    const feed = this.$dokoo.myCms.feeds.getFeed('<your-feed-id>')
    const { hits } = await feed.get()
    this.hits = hits
  }    
}
```
