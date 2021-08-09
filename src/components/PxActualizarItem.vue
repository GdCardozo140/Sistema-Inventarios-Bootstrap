<template>
  <div>
    <p>
      <button
        class="btn btn-outline-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseActualizar"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Actualizar Producto
      </button>
    </p>
    <div class="collapse" style="width: 640px" id="collapseActualizar">
      <div class="card card-body">
        <p class="fs-4">
          FORMULARIOS
          <span>
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseActualizar"
              aria-expanded="false"
              aria-controls="collapseExample"
              class="btn btn-sm m-1 btn-secondary"
            >
              Cancelar
            </button>
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseActualizar"
              aria-expanded="false"
              aria-controls="collapseExample"
              class="btn btn-sm btn-Primary"
            >
              Actualizar
            </button>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
