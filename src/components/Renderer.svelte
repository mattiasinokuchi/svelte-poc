import { title } from "process";
{#if title}
    <h1 class="text-3xl mb-3">{title}</h1>
{:else}
    <h1 class="text-3xl mb-3 text-gray-600">No title</h1>
{/if}
<div class="rendered">
    {#if content}
        {content}
    {:else}
        <p class="text-gray-600">No content</p>
    {/if}
</div>

<script>
    export let title = ''
    export let content = ''
</script>