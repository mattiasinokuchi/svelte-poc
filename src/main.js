import './global.css'
import {HandleSession} from './lib/Session.js'
import {profile, token} from './stores' // importing file for storing profile and token
import App from './App.svelte'

const app = (async function() { // Immediately Invoked Function Expression required due to async function
    const [profileData, tokenData] = await HandleSession(0)
    profile.set(profileData || null)
    token.set(tokenData || null)

    return new App({    // Initialize App component
        target: document.body
    })
})()
export default app