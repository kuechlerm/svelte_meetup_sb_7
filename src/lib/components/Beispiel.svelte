<script lang="ts">
	export let name: string = 'Test';

	let zusatz = '';
</script>

<div class="flex gap-4">
	<div class="flex-1 bg-blue-300 p-4" on:click on:keyup>Hallo {name} {zusatz}</div>

	<div class="flex justify-center">
		<input class="p-2" type="text" placeholder="Zusatz" bind:value={zusatz} />
	</div>
</div>
