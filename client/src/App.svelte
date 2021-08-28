<script lang="ts">
    import Tailwind from "./Tailwind.svelte";
    import "smelte/src/tailwind.css";
    import Treeview from "smelte/src/components/Treeview";    // import "smelte/src/tailwind.css" ;
    // import { onMount } from "svelte";
    import axios from "axios"
    
    let folderName = "";
    let directories = [];
	let submitted = false;
    
    async function onFolderChange () {
        if (folderName.length > 0) {
            submitted = true
            const res = await axios.get(`http://localhost:8080/`, {params:{ name: folderName}})
            
            const data = [await res.data];
            console.log(folderName);
            directories = data;
            console.log(data);
        }
    }
</script>
<style lang="scss">
    main {
        width: 100vw;
        font-family: Baskerville, 'Times New Roman', Times, serif;
        padding: 2rem;
        h1 {
            font-size: 3rem;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
</style>
     <!-- /Users/davimello/Desktop/Reginaldo -->
<Tailwind />
<main>
    <div class="container mx-auto px-8">
        <h1 class="text-blue-600">Tree data structure</h1>
            <input required placeholder="Enter a local directory name" class="w-full px-2 py-4" bind:value={folderName} on:input={onFolderChange}/>
        {#if folderName}
            <h2 class="text-blue-600 pb-6">Searching results for {folderName}:</h2>
            <Treeview items={directories} />
        {/if}
    </div>
</main>

