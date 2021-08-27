<script lang="ts">
    import Tailwind from "./Tailwind.svelte";
    // import { onMount } from "svelte";
    import axios from "axios"
    
    let folderName = "";
    let directories = null;
	let submitted = false;
    
    async function onFolderChange () {
        if (folderName.length > 0) {
            submitted = true
            const res = await axios.get(`http://localhost:8080/`, {params:{ name: folderName}})
            
            const data = await res.data;
            console.log(folderName);
            directories = data;
            console.log(data);
        }
    }
</script>

<Tailwind />
<main>
    <div class="container mx-auto px-8">
        <h1 class="text-blue-600">Tree data structure</h1>
            <!-- <form class="flex" on:submit|preventDefault={onFolderChange} > -->
                <input required placeholder="Enter a local directory name" class="w-full" bind:value={folderName} on:change|preventDefault={onFolderChange}/>
                <!-- <button class="w-1/6" on:click={() => submitted = true}>Send</button> -->
            <!-- </form> -->
    {#if folderName}
    <h2 class="text-blue-600">Searching results for {folderName}</h2>
    {/if}
    </div>
</main>

<!-- <style lang="scss">
    main {
        width: 100vw;
        h1 {
            font-size: 3rem;
        }
    }
</style> -->
