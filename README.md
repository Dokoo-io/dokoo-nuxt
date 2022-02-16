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

Find the documentation of the Javascript Dokoo Client here:

- https://github.com/Dokoo-io/sdk-js/wiki/API#class-client
