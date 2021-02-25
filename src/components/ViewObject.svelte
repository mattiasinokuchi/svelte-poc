<!-- This component ?-->

<div in:fade>
    <Obj objectId={params.objectId} />
</div>

<script>
import Obj from './Obj.svelte'
import {fade} from 'svelte/transition'
export let params = {}
</script>
