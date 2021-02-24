<!--This component requests an object from the API server, then renders it using the Renderer component-->
{#await contentPromise}
  Loading…  <!--Rendered while promise is pending-->
{:then response}
  <p class="mb-2 italic">
    Saved on    <!--Rendered when promise is fulfilled-->
    {(response && response.date) ? new Date(response.date).toLocaleString() : '(null)'} <!--Check response to avoid exception-->
  </p>
  <Renderer title={response && response.title || ''} content={response && response.content || ''} />    <!--Check response to avoid exception-->
{:catch err}
  <ErrorBox {err} />    <!--Rendered if promise is rejected-->
{/await}
<script>
import Renderer from './Renderer.svelte'
import ErrorBox from './ErrorBox.svelte'
import {LoadObject} from '../lib/Requests.js'
import {token} from '../stores.js'
export let objectId = null
let contentPromise = Promise.resolve({})
$: contentPromise = LoadObject(objectId, $token)    // Reactive statement which request an object upon changes
</script>