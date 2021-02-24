<!--This component requests and render the list of journal entries-->
{#await listPromise}
  Loading…  <!--Rendered while promise is pending-->
{:then list}
  <h2 class="text-2xl font-bold mb-2 text-gray-800">Journal entries on {day}</h2> <!--Rendered when promise is fulfilled-->
  {#if !list.length}
    <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-2 mx-6">
      Nothing posted on {day}!
    </div>
  {:else}
    <ul class="ml-6 space-y-2">
      {#each list as el}  <!--Iterates over the list and render each element as below-->
        {#if el && el.oid && el.date}
          <li class="cursor-pointer bg-white shadow py-2 px-4 w-2/3 lg:w-3/5"
            on:click={() => showObject(el.oid)}>
              {new Date(el.date * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
              <b>{el.title || '(no title)'}</b>
          </li>
        {/if}
      {/each}
    </ul>
  {/if}
{:catch err}
  <ErrorBox {err} />  <!--Rendered if promise is rejected-->
{/await}

<script>
import ErrorBox from './ErrorBox.svelte'
import {view, token} from '../stores.js'
import {LoadList} from '../lib/Requests.js'

export let date = null

$: day = (new Date(date * 1000)).toLocaleDateString()

let listPromise = Promise.resolve([])
$: listPromise = LoadList(date, $token) // Reactive statement to trigger a request upon changes

function showObject(oid) {
    $view = 'view/' + oid
}
</script>