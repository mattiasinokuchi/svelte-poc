<!--This is the main component-->
<Renderer title="Hello" content={content} />
<script>
import Renderer from './components/Renderer.svelte'
const content = `# Markdown here!
Here's a **great** post.`   // Backticks (`) preserves line breaks
</script>