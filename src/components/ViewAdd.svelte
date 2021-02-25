<!-- This is a view component with full layout of the page for adding new journal entries  -->

<AddForm on:added={added} bind:content bind:title />    <!-- two-way binding to AddForm components' properties
-->
<div class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 text-sm">
    <h1 class="text-3xl mb-2">Preview</h1>
    <div class="border border-gray-600 p-4">
        <Renderer {title} {content} />
    </div>
</div>

<script>
import AddForm from './AddForm.svelte'
import Renderer from './Renderer.svelte'
import {view} from '../stores.js'
import {fade} from 'svelte/transition'

let content = ''
let title = ''
function added(event) {
    if (event && event.detail && event.detail.objectId) {
        $view = 'view/' + event.detail.objectId // Stores the object ID in a Svelte store called $view
    }
}
</script>
