<template>
	<div id="child"
	     @click='toggleActive'
	     v-bind:class="{ active: isActive }"
	>
		<p id="text">Some text</p>
	</div>
</template>
<script>
export default {
  name: 'app',
  props: ['clickHandler'],
  data: function() {
    return {
	   isActive: false,
		}
	},
	methods: {
		toggleActive: function() {
			this.isActive = !this.isActive;
		}
	}
};
</script>