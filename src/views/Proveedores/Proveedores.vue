<template>
  <div class="container-fluid mt-5">
    <div class="container-fluid mt-4">
      <div class="row title"><h1>Proveedores</h1></div>
      <div class="row mt-2">
        <div class="col">
          <PxAgregar />
        </div>
        <div class="col"></div>
        <div class="col">
          <PxActualizar />
        </div>
        <div class="col"></div>
        <div class="col">
          <PxEliminar />
        </div>
      </div>
      <div class="row">
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
import PxTable from '../../components/TablasDatos.vue';
import PxAgregar from '../../components/PxModalAgregarItem.vue';
import PxEliminar from '../../components/PxEliminarItem.vue';
import PxActualizar from '../../components/PxActualizarItem.vue';

export default {
  components: {
    PxTable,
    PxAgregar,
    PxEliminar,
    PxActualizar,
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: start;
}
</style>
