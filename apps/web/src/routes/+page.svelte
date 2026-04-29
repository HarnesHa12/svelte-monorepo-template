<script lang="ts">
import { api } from '@acme/api/client';
import { onMount } from 'svelte';

let example = $state<string>('');

onMount(async () => {
    const res = await api.example.get();
    example = res.data?.message ?? 'No message';
});
</script>

{#if example}
    <p>{example}</p>
{:else}
    <p>Loading...</p>
{/if}