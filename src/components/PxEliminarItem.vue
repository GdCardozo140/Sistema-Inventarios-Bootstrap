<template>
  <div>
    <p>
      <button
        class="btn btn-danger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Eliminar Producto
      </button>
    </p>
    <div class="collapse" style="width: 300px" id="collapseExample">
      <div class="card card-body">
        <p class="fs-6">Desea Eliminar el producto con Id ... ?</p>
        <span>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            class="btn btn-sm m-1 btn-secondary"
          >
            X
          </button>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            class="btn btn-sm btn-danger"
          >
            Eliminar
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
