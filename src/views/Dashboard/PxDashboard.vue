<template>
  <div class="container-fluid mt-5">
    <div class="container-fluid mt-4">
      <div class="row">
        <h1>Dashboard</h1>
        <PxCardHistoryData />
        <PxCardsReporte />
      </div>
      <div class="row">
        <div class="col">
          <PxTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PxTable from '@/components/TablasDatos';
import PxCardHistoryData from '@/components/PxCardHistoryData';
import PxCardsReporte from '@/components/PxCardsReporte';

export default {
  components: {
    PxTable,
    PxCardHistoryData,
    PxCardsReporte,
  },
};
</script>
