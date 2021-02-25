<Calendar bind:date />
<List bind:date />

<script>
import Calendar from './Calendar.svelte'
import List from './List.svelte'
import {fade} from 'svelte/transition'

let date = null
</script>
