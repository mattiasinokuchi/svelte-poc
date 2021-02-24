{#if title}
    <h1 class="text-3xl mb-3">{title}</h1>
{:else}
    <h1 class="text-3xl mb-3 text-gray-600">No title</h1>
{/if}
<div class="rendered">
    {#if content}
        {@html rendered}    <!--tell Svelte HTML tags should be rendered by the browser (not rendered by default to prevent XSS)-->
    {:else}
        <p class="text-gray-600">No content</p>
    {/if}
</div>

<script>
    export let title = ''
    export let content = ''
    import MarkdownIt from 'markdown-it'    // Module for converting Markdown into HTML
    const markdown = new MarkdownIt()
    $: rendered = markdown.render(content)
</script>