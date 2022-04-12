<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}
</style>
<template>
    <Head title="Welcome"/>
    <div class="p-4 max-w-7xl mx-auto">
        <div id="map" class="h-96" ></div><!-- this div will hold your store info -->
    </div>
</template>

<script>
import {Head, Link} from '@inertiajs/inertia-vue3';
import {showMarker} from "@/Services/GoogleMapMarker";

export default {
    components: {
        Head, Link
    },
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
    mounted() {
        showMarker('map',{lat: 44.661760, lng: -63.609490});
    }
}
</script>
