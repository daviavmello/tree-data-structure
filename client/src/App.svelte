<script lang="ts">
    import Tailwind from "./Tailwind.svelte";
    
    let folderName = "";
    console.log(folderName);
    
</script>

<style lang="scss">
    main {
        h1 {
            font-size: 3rem;
        }
    }
</style>

<Tailwind />
<main>
    <div class="container mx-auto px-8">
    <h1 class="text-blue-600">Tree data structure</h1>
    <form class="flex">
        <input placeholder="Enter a local directory name" class="w-5/6" bind:value={folderName}/>
        <button class="w-1/6"></button>
    </form>
    {#if folderName}
    <h2 class="text-blue-600">Searching results for {folderName}</h2>
    {/if}
</div>
</main>
